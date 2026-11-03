// design/DesignStudio.jsx — pick a template, pick a size, edit, download.

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Layers, RotateCcw, Image as ImageIcon, Type, Square, MousePointerClick } from 'lucide-react';
import { TEMPLATES, getTemplate } from './templates/index.js';
import { SIZE_LIST, SIZES, BASE_SIZE } from './sizes.js';
import { loadLayout } from './schema.js';
import Canvas from './Canvas.jsx';
import Inspector from './Inspector.jsx';
import { downloadImage, downloadPdf } from './exporters.js';

const ICON = { text: Type, image: ImageIcon, button: MousePointerClick, shape: Square };

export default function DesignStudio() {
  const [templateId, setTemplateId] = useState(null);
  const [sizeId, setSizeId] = useState('post-1080x1250');
  const [layout, setLayout] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');
  const [scale, setScale] = useState(0.5);

  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const template = templateId ? getTemplate(templateId) : null;
  const size = SIZES[sizeId];

  useEffect(() => { document.title = 'Design Studio | Fragrance of Grace'; }, []);

  // Load the layout whenever the template or size changes, carrying over any
  // text and pictures she has already changed on a matching element.
  useEffect(() => {
    if (!template) { setLayout(null); return; }
    const next = loadLayout(template, sizeId, SIZES, BASE_SIZE);
    if (!next) return;
    setLayout((prev) => {
      if (!prev) return next;
      const byId = Object.fromEntries(prev.elements.map((e) => [e.id, e]));
      return {
        ...next,
        elements: next.elements
          .filter((e) => byId[e.id] === undefined || byId[e.id]._kept !== false)
          .map((e) => {
            const old = byId[e.id];
            if (!old) return e;
            // Keep content, take position and size from the new layout.
            const { text, src, color, background, fontWeight, italic, uppercase } = old;
            return { ...e, ...(text !== undefined && { text }), ...(src !== undefined && { src }),
                     color, background, fontWeight, italic, uppercase };
          }),
      };
    });
    setSelectedId(null);
  }, [templateId, sizeId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Fit the canvas to the available width.
  useEffect(() => {
    if (!size) return;
    const fit = () => {
      const avail = (stageRef.current?.clientWidth ?? 900) - 48;
      const maxH = window.innerHeight - 220;
      setScale(Math.min(avail / size.w, maxH / size.h, 1));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [size, templateId]);

  const selected = useMemo(
    () => layout?.elements.find((e) => e.id === selectedId) ?? null,
    [layout, selectedId]
  );

  const patchElement = (id, patch) =>
    setLayout((l) => ({ ...l, elements: l.elements.map((e) => (e.id === id ? { ...e, ...patch } : e)) }));

  const deleteElement = (id) => {
    setLayout((l) => ({ ...l, elements: l.elements.filter((e) => e.id !== id) }));
    setSelectedId(null);
  };

  const clearAll = () => {
    if (!window.confirm('Remove every element from this design? You can reset it afterwards.')) return;
    setLayout((l) => ({ ...l, elements: [] }));
    setSelectedId(null);
  };

  const reset = () => {
    setLayout(loadLayout(template, sizeId, SIZES, BASE_SIZE));
    setSelectedId(null);
  };

  const filename = `${template?.id ?? 'design'}-${sizeId}`;

  const run = async (fn, label) => {
    setBusy(label); setErr('');
    // Drop the selection so no outline can appear in the file.
    setSelectedId(null);
    await new Promise((r) => requestAnimationFrame(r));
    try { await fn(); }
    catch (e) { setErr(e?.message || 'Download failed. Please try again.'); }
    finally { setBusy(''); }
  };

  // ── Template chooser ──
  const chooseTemplate = (t) => {
    setTemplateId(t.id);
    setLayout(null);
    setSizeId(t.baseSize ?? BASE_SIZE);
  };

  if (!template) {
    return (
      <main className="min-h-screen bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <Link to="/admin" className="inline-flex items-center gap-1.5 text-navy/60 font-inter text-xs hover:text-gold mb-8">
            <ArrowLeft size={13} aria-hidden="true" /> Back to admin
          </Link>
          <h1 className="font-playfair text-navy text-3xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Design Studio
          </h1>
          <p className="text-muted font-inter text-sm mb-8">Pick a template to start. You can change every word, picture and colour on it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEMPLATES.map((t) => (
              <button key={t.id} onClick={() => chooseTemplate(t)}
                className="text-left bg-white rounded-xl border border-gold/15 overflow-hidden hover:border-gold/45 hover:shadow-md transition-all">
                {(() => {
                  const firstSize = SIZES[t.baseSize ?? BASE_SIZE];
                  const s = 280 / firstSize.w;
                  return (
                    <div className="bg-navy/5 overflow-hidden relative mx-auto"
                      style={{ width: 280, height: firstSize.h * s }}>
                      <div style={{ transform: `scale(${s})`, transformOrigin: 'top left' }}>
                        <Canvas size={firstSize} layout={loadLayout(t, t.baseSize ?? BASE_SIZE, SIZES, BASE_SIZE)}
                          interactive={false} onSelect={() => {}} />
                      </div>
                    </div>
                  );
                })()}
                <div className="p-4">
                  <p className="font-playfair text-navy font-semibold text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{t.name}</p>
                  <p className="text-muted font-inter text-xs mt-1">{t.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // ── Editor ──
  return (
    <main className="min-h-screen bg-ivory flex flex-col">
      <header className="bg-white border-b border-gold/15 px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 sticky top-0 z-30">
        <button onClick={() => { setTemplateId(null); setLayout(null); }}
          className="inline-flex items-center gap-1.5 text-navy/70 font-inter text-xs hover:text-gold">
          <ArrowLeft size={14} aria-hidden="true" /> Templates
        </button>

        <select value={sizeId} onChange={(e) => setSizeId(e.target.value)}
          className="px-3 py-2 rounded border border-gray-200 bg-white text-navy text-sm font-inter focus:outline-none focus:ring-2 focus:ring-gold/40">
          {SIZE_LIST.map((s) => (
            <option key={s.id} value={s.id}>{s.label} — {s.w}×{s.h}</option>
          ))}
        </select>

        <button onClick={reset} className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-gray-200 text-navy/70 font-inter text-xs hover:text-gold hover:border-gold/40">
          <RotateCcw size={13} aria-hidden="true" /> Reset
        </button>

        <div className="ml-auto flex items-center gap-2">
          {['png', 'jpeg'].map((f) => (
            <button key={f} disabled={Boolean(busy)}
              onClick={() => run(() => downloadImage(canvasRef.current, size, { format: f, scale: 2, filename }), f)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-navy text-ivory font-inter text-xs font-medium hover:bg-gold hover:text-white transition-all disabled:opacity-50">
              <Download size={13} aria-hidden="true" />
              {busy === f ? 'Preparing…' : f.toUpperCase()}
            </button>
          ))}
          <button disabled={Boolean(busy)}
            onClick={() => run(() => downloadPdf(canvasRef.current, size, { scale: 2, filename }), 'pdf')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-navy text-navy font-inter text-xs font-medium hover:bg-navy hover:text-ivory transition-all disabled:opacity-50">
            <Download size={13} aria-hidden="true" />
            {busy === 'pdf' ? 'Preparing…' : 'PDF'}
          </button>
        </div>
      </header>

      {err && <p className="bg-red-50 border-b border-red-100 text-red-700 text-sm font-inter px-6 py-2" role="alert">{err}</p>}

      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Layers */}
        <aside className="lg:w-56 bg-white lg:border-r border-gold/15 p-3 lg:overflow-y-auto">
          <p className="flex items-center gap-1.5 text-xs font-inter font-semibold text-navy/60 uppercase tracking-wider mb-2 px-1">
            <Layers size={12} aria-hidden="true" /> Elements
          </p>
          <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto">
            {layout?.elements.map((el) => {
              const Icon = ICON[el.type] ?? Square;
              return (
                <button key={el.id} onClick={() => setSelectedId(el.id)}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded text-left text-xs font-inter whitespace-nowrap transition-all ${
                    el.id === selectedId ? 'bg-navy text-ivory' : 'text-navy/75 hover:bg-ivory'
                  }`}>
                  <Icon size={13} aria-hidden="true" className="flex-shrink-0" />
                  <span className="truncate">{el.name}</span>
                </button>
              );
            })}
          </div>
          {layout?.elements.length > 0 && (
            <button onClick={clearAll} className="mt-3 w-full px-2.5 py-2 rounded border border-red-200 text-red-600 text-xs font-inter hover:bg-red-50 transition-all">
              Delete all elements
            </button>
          )}
        </aside>

        {/* Canvas */}
        <div ref={stageRef} className="flex-1 overflow-auto p-6 flex items-start justify-center bg-[#EFEAE0] min-h-[50vh]">
          <div style={{ width: size.w * scale, height: size.h * scale }} className="shadow-lg">
            {layout && (
              <Canvas ref={canvasRef} size={size} layout={layout} selectedId={selectedId}
                onSelect={setSelectedId} scale={scale} />
            )}
          </div>
        </div>

        {/* Inspector */}
        <aside className="lg:w-80 bg-white lg:border-l border-gold/15 lg:overflow-y-auto border-t lg:border-t-0">
          <Inspector element={selected} onChange={patchElement} onDelete={deleteElement} />
        </aside>
      </div>
    </main>
  );
}
