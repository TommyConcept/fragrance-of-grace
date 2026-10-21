// admin/ReelsAdmin.jsx — manage the reels on the Ministry page.
//
// A reel is a thumbnail plus a link. Clicking one on the website opens that
// link in a new tab; nothing is ever played on the site itself.

import React, { useEffect, useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase.js';
import { Field, Input, Textarea, Select, Button, ImageUpload } from './ui.jsx';

const PLATFORMS = ['YouTube', 'Instagram', 'Facebook', 'TikTok', 'Other'];

const blank = () => ({
  title: '',
  description: '',
  thumbnail_url: '',
  link: '',
  platform: 'YouTube',
  sort_order: 0,
});

export default function ReelsAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState(null);

  useEffect(() => {
    (async () => {
      const { data, error: e } = await supabase
        .from('reels')
        .select('*')
        .order('sort_order', { ascending: true });
      if (e) setError(e.message);
      else setRows(data ?? []);
      setLoading(false);
    })();
  }, []);

  const patch = (id, changes) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...changes, _dirty: true } : r)));

  const save = async (row) => {
    setSavingId(row.id);
    setError('');
    const { _dirty, _isNewRow, ...payload } = row;

    const query = _isNewRow
      ? supabase.from('reels').insert(payload).select().single()
      : supabase.from('reels').update(payload).eq('id', row.id).select().single();

    const { data, error: e } = await query;
    if (e) setError(e.message);
    else setRows((rs) => rs.map((r) => (r.id === row.id ? data : r)));
    setSavingId(null);
  };

  const remove = async (row) => {
    if (!window.confirm(`Remove "${row.title}" from the website? This cannot be undone.`)) return;
    if (!row._isNewRow) {
      const { error: e } = await supabase.from('reels').delete().eq('id', row.id);
      if (e) { setError(e.message); return; }
    }
    setRows((rs) => rs.filter((r) => r.id !== row.id));
  };

  const addReel = () => {
    const maxOrder = rows.reduce((m, r) => Math.max(m, r.sort_order ?? 0), 0);
    const row = { ...blank(), id: `new-${Date.now()}`, sort_order: maxOrder + 10, _isNewRow: true, _dirty: true };
    setRows((rs) => [...rs, row]);
    setOpenId(row.id);
  };

  if (loading) return <p className="text-muted font-inter text-sm">Loading reels…</p>;

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="font-playfair text-navy text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Reels
          </h2>
          <p className="text-muted font-inter text-sm mt-1 max-w-2xl">
            Shown on the Ministry page. Tapping a reel opens its link in a new tab —
            nothing plays on the website, so the view counts stay on YouTube,
            Instagram or Facebook.
          </p>
        </div>
        <Button onClick={addReel}>
          <Plus size={15} aria-hidden="true" />
          New reel
        </Button>
      </div>

      {error && (
        <p className="text-red-600 font-inter text-sm mb-4 p-3 rounded bg-red-50 border border-red-100" role="alert">
          {error}
        </p>
      )}

      {rows.length === 0 && (
        <p className="text-muted font-inter text-sm p-6 bg-white rounded-xl border border-gold/15 text-center">
          No reels yet. Add one and it appears on the Ministry page straight away.
        </p>
      )}

      <div className="flex flex-col gap-3">
        {rows.map((row) => {
          const open = openId === row.id;
          return (
            <div key={row.id} className="bg-white rounded-xl border border-gold/15 overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : row.id)}
                className="w-full flex items-center gap-4 p-4 text-left hover:bg-ivory/50 transition-colors"
              >
                {/* Reels are portrait on the site, so preview them that way. */}
                <div className="w-14 aspect-[9/16] rounded bg-gray-100 overflow-hidden flex-shrink-0">
                  {row.thumbnail_url && <img src={row.thumbnail_url} alt="" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-playfair text-navy font-semibold text-sm truncate" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {row.title || 'Untitled reel'}
                  </p>
                  <p className="text-muted font-inter text-xs mt-0.5">
                    {row.platform}
                    {row._dirty && <span className="ml-2 text-amber-600 font-medium">Unsaved</span>}
                  </p>
                </div>
                {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
              </button>

              {open && (
                <div className="p-5 pt-1 border-t border-gray-100 flex flex-col gap-4">
                  <ImageUpload
                    label="Reel thumbnail"
                    folder="reels"
                    value={row.thumbnail_url}
                    onChange={(url) => patch(row.id, { thumbnail_url: url })}
                  />
                  <p className="text-muted font-inter text-xs -mt-2">
                    Reels show tall (9:16). A portrait screenshot of the reel works best.
                  </p>

                  <Field label="Reel title">
                    <Input value={row.title || ''} onChange={(e) => patch(row.id, { title: e.target.value })} placeholder="Walk By Faith, Not Fear!" />
                  </Field>

                  <Field label="Short description">
                    <Textarea rows={2} value={row.description || ''} onChange={(e) => patch(row.id, { description: e.target.value })} />
                  </Field>

                  <Field label="Link to the reel" hint="Where the reel opens when someone taps it.">
                    <Input value={row.link || ''} onChange={(e) => patch(row.id, { link: e.target.value })} placeholder="https://youtube.com/shorts/… or an Instagram or Facebook link" />
                  </Field>

                  {row.link && (
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gold font-inter text-xs font-medium hover:text-navy transition-colors w-fit -mt-2"
                    >
                      <ExternalLink size={12} aria-hidden="true" />
                      Test this link
                    </a>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Platform" hint="Sets the badge on the card">
                      <Select
                        options={PLATFORMS}
                        value={row.platform || 'YouTube'}
                        onChange={(e) => patch(row.id, { platform: e.target.value })}
                      />
                    </Field>
                    <Field label="Order on page" hint="Lower shows first">
                      <Input type="number" value={row.sort_order ?? 0} onChange={(e) => patch(row.id, { sort_order: Number(e.target.value) })} />
                    </Field>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <Button onClick={() => save(row)} disabled={savingId === row.id || !row._dirty}>
                      {savingId === row.id ? 'Saving…' : row._dirty ? 'Save changes' : 'Saved'}
                    </Button>
                    <Button variant="danger" onClick={() => remove(row)}>
                      <Trash2 size={14} aria-hidden="true" />
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
