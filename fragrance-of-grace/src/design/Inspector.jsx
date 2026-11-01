// design/Inspector.jsx
// The right-hand panel: shows only the settings that apply to whatever is
// selected. Nothing is dragged — every change is made here.

import React from 'react';
import { Trash2, AlignLeft, AlignCenter, AlignRight, Upload, Bold, Italic } from 'lucide-react';
import { supabase, mediaUrl } from '../lib/supabase.js';

const row = 'flex flex-col gap-1.5 mb-4';
const lbl = 'text-xs font-inter font-semibold text-navy/70';
const inp = 'w-full px-3 py-2 rounded border border-gray-200 bg-white text-navy text-sm font-inter focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60';

function Num({ label, value, onChange, min, max, step = 1 }) {
  return (
    <label className={row}>
      <span className={lbl}>{label}</span>
      <input type="number" value={value ?? 0} min={min} max={max} step={step}
        onChange={(e) => onChange(Number(e.target.value))} className={inp} />
    </label>
  );
}

function Color({ label, value, onChange }) {
  return (
    <label className={row}>
      <span className={lbl}>{label}</span>
      <div className="flex items-center gap-2">
        <input type="color" value={/^#[0-9a-f]{6}$/i.test(value || '') ? value : '#000000'}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-9 rounded border border-gray-200 bg-white p-0.5 cursor-pointer" />
        <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} className={inp} />
      </div>
    </label>
  );
}

function Toggle({ label, active, onClick, children }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active} title={label} aria-label={label}
      className={`w-9 h-9 rounded border flex items-center justify-center transition-all ${
        active ? 'bg-navy text-ivory border-navy' : 'bg-white text-navy/60 border-gray-200 hover:border-gold/50'
      }`}>
      {children}
    </button>
  );
}

function ImagePicker({ value, onChange }) {
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState('');
  const ref = React.useRef(null);

  const pick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setErr('That file is not an image.'); return; }
    if (file.size > 10 * 1024 * 1024) { setErr('That image is over 10MB.'); return; }
    setBusy(true); setErr('');

    if (supabase) {
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const path = `designs/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from('media').upload(path, file, { cacheControl: '31536000' });
      if (error) setErr(error.message); else onChange(mediaUrl(path));
    } else {
      // No Supabase configured: keep it in the page so the editor still works.
      onChange(URL.createObjectURL(file));
    }
    setBusy(false);
    if (ref.current) ref.current.value = '';
  };

  return (
    <div className={row}>
      <span className={lbl}>Picture</span>
      <div className="w-full aspect-video rounded border border-gray-200 bg-gray-50 overflow-hidden mb-2">
        {value && <img src={value} alt="" className="w-full h-full object-cover" />}
      </div>
      <input ref={ref} type="file" accept="image/*" onChange={pick} className="hidden" id="de-img" />
      <button type="button" onClick={() => ref.current?.click()} disabled={busy}
        className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded border border-gray-200 bg-white text-navy text-sm font-inter font-medium hover:border-gold/50 hover:text-gold transition-all disabled:opacity-50">
        <Upload size={14} aria-hidden="true" />
        {busy ? 'Uploading…' : 'Replace picture'}
      </button>
      {err && <p className="text-red-600 text-xs mt-1" role="alert">{err}</p>}
    </div>
  );
}

export default function Inspector({ element, onChange, onDelete }) {
  if (!element) {
    return (
      <div className="p-5">
        <p className="text-muted font-inter text-sm leading-relaxed">
          Click anything on the design to edit it, or pick it from the list on the left.
        </p>
      </div>
    );
  }

  const set = (patch) => onChange(element.id, patch);
  const t = element.type;

  return (
    <div className="p-5">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="min-w-0">
          <p className="font-playfair text-navy font-semibold text-base truncate" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {element.name}
          </p>
          <p className="text-muted font-inter text-xs capitalize">{t}</p>
        </div>
        <button onClick={() => onDelete(element.id)} title="Delete this element"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-red-200 text-red-600 text-xs font-inter hover:bg-red-50 transition-all flex-shrink-0">
          <Trash2 size={13} aria-hidden="true" />
          Delete
        </button>
      </div>

      {(t === 'text' || t === 'button') && (
        <label className={row}>
          <span className={lbl}>Text</span>
          <textarea rows={t === 'text' ? 3 : 1} value={element.text}
            onChange={(e) => set({ text: e.target.value })} className={`${inp} resize-y`} />
        </label>
      )}

      {t === 'image' && <ImagePicker value={element.src} onChange={(src) => set({ src })} />}

      {(t === 'text' || t === 'button') && (
        <>
          <Num label="Font size" value={element.fontSize} onChange={(fontSize) => set({ fontSize })} min={8} max={400} />
          <div className="flex items-end gap-2 mb-4">
            <Toggle label="Bold" active={element.fontWeight >= 600}
              onClick={() => set({ fontWeight: element.fontWeight >= 600 ? 400 : 700 })}><Bold size={15} /></Toggle>
            {t === 'text' && (
              <Toggle label="Italic" active={element.italic} onClick={() => set({ italic: !element.italic })}>
                <Italic size={15} />
              </Toggle>
            )}
            <Toggle label="UPPERCASE" active={element.uppercase} onClick={() => set({ uppercase: !element.uppercase })}>
              <span className="text-xs font-semibold">AA</span>
            </Toggle>
            {t === 'text' && (
              <div className="flex gap-1 ml-auto">
                {[['left', AlignLeft], ['center', AlignCenter], ['right', AlignRight]].map(([a, Icon]) => (
                  <Toggle key={a} label={`Align ${a}`} active={element.align === a} onClick={() => set({ align: a })}>
                    <Icon size={15} />
                  </Toggle>
                ))}
              </div>
            )}
          </div>
          <Color label="Text colour" value={element.color} onChange={(color) => set({ color })} />
        </>
      )}

      {t === 'button' && <Color label="Button colour" value={element.background} onChange={(background) => set({ background })} />}
      {t === 'shape' && <Color label="Colour" value={element.background} onChange={(background) => set({ background })} />}

      {t === 'image' && (
        <>
          <Num label="Move picture left/right (%)" value={element.focusX} onChange={(focusX) => set({ focusX })} min={0} max={100} />
          <Num label="Move picture up/down (%)" value={element.focusY} onChange={(focusY) => set({ focusY })} min={0} max={100} />
        </>
      )}

      <details className="mt-2">
        <summary className="text-xs font-inter font-semibold text-navy/60 cursor-pointer select-none mb-3">
          Position &amp; size
        </summary>
        <div className="grid grid-cols-2 gap-x-3">
          <Num label="Left" value={element.x} onChange={(x) => set({ x })} />
          <Num label="Top" value={element.y} onChange={(y) => set({ y })} />
          <Num label="Width" value={element.w} onChange={(w) => set({ w })} />
          {t !== 'text' && t !== 'button' && <Num label="Height" value={element.h} onChange={(h) => set({ h })} />}
          <Num label="Rotation" value={element.rotate} onChange={(rotate) => set({ rotate })} min={-180} max={180} />
        </div>
      </details>
    </div>
  );
}
