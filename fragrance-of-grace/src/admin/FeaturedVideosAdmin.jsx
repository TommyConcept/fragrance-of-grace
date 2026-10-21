// admin/FeaturedVideosAdmin.jsx
// Exactly four slots on the Ministry page. Slots are replaced in place —
// there is deliberately no way to add a fifth or delete one, because the
// Ministry grid is built for four.

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';
import { Field, Input, Textarea, Select, Button, ImageUpload } from './ui.jsx';

const SLOTS = [1, 2, 3, 4];
const PLATFORMS = ['YouTube', 'Instagram', 'Other'];

const emptySlot = (slot) => ({
  slot,
  title: '',
  platform: 'YouTube',
  label: 'Teaching',
  description: '',
  thumbnail_url: '',
  link: '',
});

export default function FeaturedVideosAdmin() {
  const [rows, setRows] = useState(SLOTS.map(emptySlot));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [savingSlot, setSavingSlot] = useState(null);

  useEffect(() => {
    (async () => {
      const { data, error: e } = await supabase
        .from('featured_videos')
        .select('*')
        .order('slot', { ascending: true });

      if (e) setError(e.message);
      else {
        // Always render four slots, even if the table is partly empty.
        setRows(SLOTS.map((s) => data?.find((r) => r.slot === s) ?? emptySlot(s)));
      }
      setLoading(false);
    })();
  }, []);

  const patch = (slot, changes) =>
    setRows((rs) => rs.map((r) => (r.slot === slot ? { ...r, ...changes, _dirty: true } : r)));

  const save = async (row) => {
    setSavingSlot(row.slot);
    setError('');
    const { _dirty, updated_at, ...payload } = row;

    const { data, error: e } = await supabase
      .from('featured_videos')
      .upsert({ ...payload, updated_at: new Date().toISOString() }, { onConflict: 'slot' })
      .select()
      .single();

    if (e) setError(e.message);
    else setRows((rs) => rs.map((r) => (r.slot === row.slot ? data : r)));
    setSavingSlot(null);
  };

  if (loading) return <p className="text-muted font-inter text-sm">Loading featured videos…</p>;

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-playfair text-navy text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Featured Messages & Videos
        </h2>
        <p className="text-muted font-inter text-sm mt-1 max-w-2xl">
          Four videos show on the Ministry page. Replace any one of them below — the
          grid always holds exactly four, so there is nothing to add or delete.
        </p>
      </div>

      {error && (
        <p className="text-red-600 font-inter text-sm mb-4 p-3 rounded bg-red-50 border border-red-100" role="alert">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {rows.map((row) => (
          <div key={row.slot} className="bg-white rounded-xl border border-gold/15 p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold font-inter text-xs font-semibold">
                Slot {row.slot}
              </span>
              {row._dirty && <span className="text-amber-600 font-inter text-xs font-medium">Unsaved</span>}
            </div>

            <ImageUpload
              label="Video thumbnail"
              folder={`featured/slot-${row.slot}`}
              value={row.thumbnail_url}
              onChange={(url) => patch(row.slot, { thumbnail_url: url })}
            />

            <Field label="Video title">
              <Input value={row.title || ''} onChange={(e) => patch(row.slot, { title: e.target.value })} />
            </Field>

            <Field label="Description" hint="Kept short — the card trims it to two lines.">
              <Textarea rows={2} value={row.description || ''} onChange={(e) => patch(row.slot, { description: e.target.value })} />
            </Field>

            <Field label="Link to the video">
              <Input value={row.link || ''} onChange={(e) => patch(row.slot, { link: e.target.value })} placeholder="https://youtu.be/…" />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Platform" hint="Sets the badge colour">
                <Select
                  options={PLATFORMS}
                  value={row.platform || 'YouTube'}
                  onChange={(e) => patch(row.slot, { platform: e.target.value })}
                />
              </Field>
              <Field label="Tag">
                <Input value={row.label || ''} onChange={(e) => patch(row.slot, { label: e.target.value })} placeholder="Teaching" />
              </Field>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <Button onClick={() => save(row)} disabled={savingSlot === row.slot || !row._dirty}>
                {savingSlot === row.slot ? 'Saving…' : row._dirty ? 'Save slot ' + row.slot : 'Saved'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
