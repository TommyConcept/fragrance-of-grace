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
  fit: 'cover',           // cover | contain
  radius: 0,
  opacity: 1,
  // Nudges the visible part of a cover image, as a CSS object-position.
  focusX: 50,
  focusY: 50,
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

/** A working copy of one template at one size. */
export function loadLayout(template, sizeId) {
  const layout = template.layouts[sizeId];
  if (!layout) return null;
  return {
    background: layout.background ?? '#0B1B33',
    elements: layout.elements.map(hydrate),
  };
}
