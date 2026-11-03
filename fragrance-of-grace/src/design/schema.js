// design/schema.js
// A template is one design with a separate layout per canvas size.
//
//   template
//     id, name, preview
//     layouts: { [sizeId]: { background, elements: [...] } }
//
// Every element shares these fields:
//   id      stable key, also used to match an element across sizes
//   type    'text' | 'image' | 'button' | 'shape'
//   name    what the layers list calls it
//   x,y,w,h position and size in canvas pixels (not percentages, so exports
//           are exact), with y/h ignored for auto-height text
//   rotate  degrees
//   locked  true keeps it out of the layers list and off-limits to editing
//
// Type-specific fields are documented on the defaults below.

export const TEXT_DEFAULTS = {
  text: 'Your text here',
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: 64,
  fontWeight: 600,
  italic: false,
  color: '#FFFFFF',
  align: 'left',          // left | center | right
  lineHeight: 1.1,
  letterSpacing: 0,
  uppercase: false,
  shadow: '',             // any CSS text-shadow, '' for none
  stroke: 0,              // outline thickness in px
  strokeColor: '#000000',
};

export const IMAGE_DEFAULTS = {
  src: '',
  fit: 'cover',           // cover | contain | fill
  radius: 0,
  opacity: 1,
  // Nudges the visible part of a cover image, as a CSS object-position.
  focusX: 50,
  focusY: 50,
  // Mirrors the element vertically, as Figma's flip does.
  flipY: false,
  // Reproduces a Figma crop: the picture is sized and offset inside its
  // frame, in percentages of the frame, and anything outside is clipped.
  // Null means the picture simply fills the frame.
  crop: null,             // { w, h, left, top } all in %
};

export const BUTTON_DEFAULTS = {
  text: 'LISTEN NOW',
  fontFamily: "'Inter', sans-serif",
  fontSize: 28,
  fontWeight: 600,
  color: '#0B1B33',
  background: '#C9A227',
  radius: 999,
  paddingX: 36,
  paddingY: 16,
  uppercase: true,
  letterSpacing: 1,
};

export const SHAPE_DEFAULTS = {
  background: 'rgba(11,27,51,0.55)',
  radius: 0,
  opacity: 1,
  border: 0,
  borderColor: '#C9A227',
};

export const DEFAULTS_BY_TYPE = {
  text: TEXT_DEFAULTS,
  image: IMAGE_DEFAULTS,
  button: BUTTON_DEFAULTS,
  shape: SHAPE_DEFAULTS,
};

/** Fills in anything a template author left out. */
export function hydrate(el) {
  return { rotate: 0, locked: false, ...DEFAULTS_BY_TYPE[el.type], ...el };
}

// Properties that are lengths and so scale with the canvas.
const SCALED = ['fontSize', 'letterSpacing', 'radius', 'border', 'paddingX', 'paddingY'];

/**
 * Derives a layout for a size the template was not drawn at.
 *
 * Content is scaled by the smaller of the two ratios and centred, so nothing
 * is ever cut off. Full-bleed pictures — the ones already drawn larger than
 * the canvas — are scaled by the larger ratio instead, so backgrounds still
 * cover the frame rather than leaving bars down the sides.
 *
 * This reads well for sizes near the original's proportions. A much wider
 * canvas wants a real layout, which is why the templates carry hand-made
 * wide ones.
 */
export function fitLayout(layout, from, to) {
  const fit = Math.min(to.w / from.w, to.h / from.h);
  const fitX = (to.w - from.w * fit) / 2;
  const fitY = (to.h - from.h * fit) / 2;

  const cover = Math.max(to.w / from.w, to.h / from.h);
  const coverX = (to.w - from.w * cover) / 2;
  const coverY = (to.h - from.h * cover) / 2;

  return {
    background: layout.background,
    elements: layout.elements.map((el) => {
      const bleeds =
        el.type !== 'text' &&
        el.x <= 0 && el.y <= 0 &&
        el.x + el.w >= from.w && el.y + el.h >= from.h;

      const k = bleeds ? cover : fit;
      const ox = bleeds ? coverX : fitX;
      const oy = bleeds ? coverY : fitY;

      const out = { ...el, x: el.x * k + ox, y: el.y * k + oy, w: el.w * k, h: el.h * k };
      for (const prop of SCALED) {
        if (typeof el[prop] === 'number') out[prop] = el[prop] * k;
      }
      return out;
    }),
  };
}

/**
 * A working copy of one template at one size. Falls back to deriving the
 * layout from the template's base size when it has no hand-made one.
 */
export function loadLayout(template, sizeId, sizes, baseSizeId) {
  const own = template.layouts[sizeId];
  if (own) {
    return {
      background: own.background ?? '#0B1B33',
      elements: own.elements.map(hydrate),
    };
  }

  // Derive from whichever hand-made layout is closest in shape. A wide canvas
  // like Facebook comes from the YouTube layout rather than the portrait one,
  // which keeps the composition instead of letterboxing it.
  const target = sizes?.[sizeId];
  if (!target) return null;

  const candidates = Object.keys(template.layouts).filter((id) => sizes[id]);
  if (candidates.length === 0) return null;

  const aspect = (id) => sizes[id].w / sizes[id].h;
  const wanted = target.w / target.h;
  const baseId = candidates.reduce((best, id) =>
    Math.abs(aspect(id) - wanted) < Math.abs(aspect(best) - wanted) ? id : best
  );

  const base = template.layouts[baseId];
  if (!base) return null;

  const fitted = fitLayout(
    { background: base.background ?? '#0B1B33', elements: base.elements },
    sizes[baseId],
    sizes[sizeId]
  );
  return { background: fitted.background, elements: fitted.elements.map(hydrate) };
}
