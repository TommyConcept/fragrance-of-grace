// design/Canvas.jsx
// Renders a layout at its true pixel size, then scales the whole thing down to
// fit the screen with a CSS transform. Because export re-renders the untouched
// full-size node, what she sees is exactly what downloads.

import React, { forwardRef } from 'react';

const px = (n) => `${n}px`;

function ElementBox({ el, selected, onSelect, interactive }) {
  const base = {
    position: 'absolute',
    left: px(el.x),
    top: px(el.y),
    width: px(el.w),
    transform: el.rotate ? `rotate(${el.rotate}deg)` : undefined,
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
        style={{
          width: '100%',
          height: '100%',
          objectFit: el.fit,
          objectPosition: `${el.focusX}% ${el.focusY}%`,
          display: 'block',
        }}
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

  return (
    <div
      style={base}
      onClick={interactive ? (e) => { e.stopPropagation(); onSelect(el.id); } : undefined}
      data-selected={selected ? 'true' : undefined}
      className={interactive ? 'de-el' : undefined}
    >
      {inner}
    </div>
  );
}

/**
 * `exporting` strips selection outlines so they never appear in a download.
 */
const Canvas = forwardRef(function Canvas(
  { size, layout, selectedId, onSelect, scale = 1, interactive = true, exporting = false },
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
        onClick={interactive ? () => onSelect(null) : undefined}
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
          />
        ))}
      </div>
    </div>
  );
});

export default Canvas;
