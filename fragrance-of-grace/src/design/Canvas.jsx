// design/Canvas.jsx
// Renders a layout at its true pixel size, then scales the whole thing down to
// fit the screen with a CSS transform. Because export re-renders the untouched
// full-size node, what she sees is exactly what downloads.
//
// Elements can be dragged and resized directly. Pointer movement is in screen
// pixels, so every delta is divided by the display scale to get canvas pixels.

import React, { forwardRef } from 'react';

const px = (n) => `${n}px`;
const round = (n) => Math.round(n * 100) / 100;

// Corner and edge handles, as [name, xFactor, yFactor, cursor].
const HANDLES = [
  ['nw', 0, 0, 'nwse-resize'], ['n', 0.5, 0, 'ns-resize'], ['ne', 1, 0, 'nesw-resize'],
  ['w', 0, 0.5, 'ew-resize'],                               ['e', 1, 0.5, 'ew-resize'],
  ['sw', 0, 1, 'nesw-resize'], ['s', 0.5, 1, 'ns-resize'], ['se', 1, 1, 'nwse-resize'],
];

function ElementBox({ el, selected, onSelect, interactive, scale, onChange }) {
  // Rotation first, then the flip, matching how Figma composes a transform.
  const tf = [
    el.rotate ? `rotate(${el.rotate}deg)` : '',
    el.flipY ? 'scaleY(-1)' : '',
  ].filter(Boolean).join(' ');

  const base = {
    position: 'absolute',
    left: px(el.x),
    top: px(el.y),
    width: px(el.w),
    transform: tf || undefined,
    opacity: el.opacity ?? 1,
  };

  let inner = null;

  if (el.type === 'text') {
    Object.assign(base, { height: 'auto' });
    inner = (
      <div
        style={{
          fontFamily: el.fontFamily,
          fontSize: px(el.fontSize),
          fontWeight: el.fontWeight,
          fontStyle: el.italic ? 'italic' : 'normal',
          color: el.color,
          textAlign: el.align,
          lineHeight: el.lineHeight,
          letterSpacing: px(el.letterSpacing),
          textTransform: el.uppercase ? 'uppercase' : 'none',
          textShadow: el.shadow || undefined,
          WebkitTextStroke: el.stroke ? `${el.stroke}px ${el.strokeColor}` : undefined,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          margin: 0,
        }}
      >
        {el.text}
      </div>
    );
  }

  if (el.type === 'image') {
    Object.assign(base, { height: px(el.h), overflow: 'hidden', borderRadius: px(el.radius) });
    inner = el.src ? (
      <img
        src={el.src}
        alt=""
        crossOrigin="anonymous"
        style={
          el.crop
            ? {
                // Figma crop: size and offset the picture inside the frame,
                // which clips it via the wrapper's overflow:hidden.
                position: 'absolute',
                width: `${el.crop.w}%`,
                height: `${el.crop.h}%`,
                left: `${el.crop.left}%`,
                top: `${el.crop.top}%`,
                maxWidth: 'none',
                display: 'block',
              }
            : {
                width: '100%',
                height: '100%',
                objectFit: el.fit,
                objectPosition: `${el.focusX}% ${el.focusY}%`,
                display: 'block',
              }
        }
      />
    ) : (
      <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.08)' }} />
    );
  }

  if (el.type === 'shape') {
    Object.assign(base, {
      height: px(el.h),
      background: el.background,
      borderRadius: px(el.radius),
      border: el.border ? `${el.border}px solid ${el.borderColor}` : undefined,
      boxSizing: 'border-box',
      filter: el.blur ? `blur(${el.blur}px)` : undefined,
    });
  }

  if (el.type === 'button') {
    Object.assign(base, { width: 'auto' });
    inner = (
      <span
        style={{
          display: 'inline-block',
          fontFamily: el.fontFamily,
          fontSize: px(el.fontSize),
          fontWeight: el.fontWeight,
          color: el.color,
          background: el.background,
          borderRadius: px(el.radius),
          padding: `${px(el.paddingY)} ${px(el.paddingX)}`,
          textTransform: el.uppercase ? 'uppercase' : 'none',
          letterSpacing: px(el.letterSpacing),
          whiteSpace: 'nowrap',
          lineHeight: 1.2,
        }}
      >
        {el.text}
      </span>
    );
  }

  // Text has no fixed height — its box hugs the type — so vertical resizing
  // changes the font size instead of a height that would be ignored.
  const isText = el.type === 'text';

  const startDrag = (e) => {
    if (!interactive || el.locked) return;
    e.stopPropagation();
    e.preventDefault();
    onSelect(el.id);
    const sx = e.clientX, sy = e.clientY;
    const ox = el.x, oy = el.y;
    const move = (ev) => onChange(el.id, {
      x: round(ox + (ev.clientX - sx) / scale),
      y: round(oy + (ev.clientY - sy) / scale),
    });
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const startResize = (e, hx, hy) => {
    if (!interactive || el.locked) return;
    e.stopPropagation();
    e.preventDefault();
    const sx = e.clientX, sy = e.clientY;
    const o = { x: el.x, y: el.y, w: el.w, h: el.h, fontSize: el.fontSize };

    const move = (ev) => {
      const dx = (ev.clientX - sx) / scale;
      const dy = (ev.clientY - sy) / scale;
      const patch = {};

      if (hx === 0) { patch.x = round(o.x + dx); patch.w = Math.max(8, round(o.w - dx)); }
      else if (hx === 1) { patch.w = Math.max(8, round(o.w + dx)); }

      if (isText) {
        // A corner drag scales the type with the box; a side drag only
        // changes how wide the text may run.
        if (hy !== 0.5 && hx !== 0.5 && o.w > 0 && patch.w) {
          patch.fontSize = Math.max(6, round(o.fontSize * (patch.w / o.w)));
        }
      } else if (hy === 0) {
        patch.y = round(o.y + dy); patch.h = Math.max(8, round(o.h - dy));
      } else if (hy === 1) {
        patch.h = Math.max(8, round(o.h + dy));
      }

      onChange(el.id, patch);
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <div
      style={base}
      onPointerDown={startDrag}
      data-selected={selected ? 'true' : undefined}
      className={interactive ? 'de-el' : undefined}
    >
      {inner}

      {selected && interactive && !el.locked && HANDLES.map(([name, hx, hy, cursor]) => {
        // Handles are drawn at a constant on-screen size whatever the zoom.
        const s = 11 / scale;
        const skip = isText && hx === 0.5 && hy !== 0.5; // no top/bottom on text
        if (skip) return null;
        return (
          <div
            key={name}
            onPointerDown={(e) => startResize(e, hx, hy)}
            style={{
              position: 'absolute',
              left: `calc(${hx * 100}% - ${s / 2}px)`,
              top: isText && hy === 1 ? undefined : `calc(${hy * 100}% - ${s / 2}px)`,
              bottom: isText && hy === 1 ? `-${s / 2}px` : undefined,
              width: px(s), height: px(s),
              background: '#FFFFFF',
              border: `${Math.max(1, 1.5 / scale)}px solid #C9A227`,
              borderRadius: px(s / 4),
              cursor,
              zIndex: 20,
            }}
          />
        );
      })}
    </div>
  );
}

/**
 * `exporting` strips selection outlines so they never appear in a download.
 */
const Canvas = forwardRef(function Canvas(
  { size, layout, selectedId, onSelect, scale = 1, interactive = true, exporting = false, onChange },
  ref
) {
  return (
    <div
      style={{
        width: px(size.w),
        height: px(size.h),
        transform: scale === 1 ? undefined : `scale(${scale})`,
        transformOrigin: 'top left',
        flex: '0 0 auto',
      }}
    >
      <div
        ref={ref}
        // Deselect only when the click lands on the canvas itself, not on an
        // element sitting on it.
        onPointerDown={interactive ? (e) => { if (e.target === e.currentTarget) onSelect(null); } : undefined}
        style={{
          position: 'relative',
          width: px(size.w),
          height: px(size.h),
          background: layout.background,
          overflow: 'hidden',
        }}
      >
        {layout.elements.map((el) => (
          <ElementBox
            key={el.id}
            el={el}
            selected={!exporting && el.id === selectedId}
            onSelect={onSelect}
            interactive={interactive && !exporting}
            scale={scale}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
});

export default Canvas;
