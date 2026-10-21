// admin/PodcastAdmin.jsx — add, edit and remove podcast episodes.

import React, { useEffect, useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '../lib/supabase.js';
import { Field, Input, Textarea, Button, ImageUpload } from './ui.jsx';

const blank = () => ({
  season: 2,
  episode_number: null,
  season_label: '',
  title: '',
  description: '',
  label: 'Parenting',
  thumbnail_url: '',
  youtube_url: '',
  spotify_url: '',
  rumble_url: '',
  is_new: true,
  sort_order: 0,
});

export default function PodcastAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState(null);

  const load = async () => {
    setLoading(true);
    const { data, error: e } = await supabase
      .from('podcast_episodes')
      .select('*')
      .order('sort_order', { ascending: true });
    if (e) setError(e.message);
    else setRows(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const patch = (id, changes) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...changes, _dirty: true } : r)));

  const save = async (row) => {
    setSavingId(row.id);
    setError('');
    const { _dirty, _isNewRow, ...payload } = row;

    const query = _isNewRow
      ? supabase.from('podcast_episodes').insert(payload).select().single()
      : supabase.from('podcast_episodes').update(payload).eq('id', row.id).select().single();

    const { data, error: e } = await query;
    if (e) setError(e.message);
    else setRows((rs) => rs.map((r) => (r.id === row.id ? data : r)));
    setSavingId(null);
  };

  const remove = async (row) => {
    if (!window.confirm(`Remove "${row.title}" from the website? This cannot be undone.`)) return;
    if (!row._isNewRow) {
      const { error: e } = await supabase.from('podcast_episodes').delete().eq('id', row.id);
      if (e) { setError(e.message); return; }
    }
    setRows((rs) => rs.filter((r) => r.id !== row.id));
  };

  const addEpisode = () => {
    const maxOrder = rows.reduce((m, r) => Math.max(m, r.sort_order ?? 0), 0);
    const row = { ...blank(), id: `new-${Date.now()}`, sort_order: maxOrder + 10, _isNewRow: true, _dirty: true };
    setRows((rs) => [...rs, row]);
    setOpenId(row.id);
  };

  if (loading) return <p className="text-muted font-inter text-sm">Loading episodes…</p>;

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="font-playfair text-navy text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Podcast Episodes
          </h2>
          <p className="text-muted font-inter text-sm mt-1">
            Add a new episode, or edit one that is already live. Lower numbers in
            “Order on page” appear first.
          </p>
        </div>
        <Button onClick={addEpisode}>
          <Plus size={15} aria-hidden="true" />
          New episode
        </Button>
      </div>

      {error && (
        <p className="text-red-600 font-inter text-sm mb-4 p-3 rounded bg-red-50 border border-red-100" role="alert">
          {error}
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
                <div className="w-20 aspect-video rounded bg-gray-100 overflow-hidden flex-shrink-0">
                  {row.thumbnail_url && <img src={row.thumbnail_url} alt="" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-playfair text-navy font-semibold text-sm truncate" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {row.title || 'Untitled episode'}
                  </p>
                  <p className="text-muted font-inter text-xs mt-0.5">
                    {row.season_label || `Season ${row.season}`}
                    {row.is_new && <span className="ml-2 text-gold font-medium">Out Now</span>}
                    {row._dirty && <span className="ml-2 text-amber-600 font-medium">Unsaved</span>}
                  </p>
                </div>
                {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
              </button>

              {open && (
                <div className="p-5 pt-1 border-t border-gray-100 flex flex-col gap-4">
                  <ImageUpload
                    label="Episode thumbnail"
                    folder="podcast"
                    value={row.thumbnail_url}
                    onChange={(url) => patch(row.id, { thumbnail_url: url })}
                  />

                  <Field label="Episode title">
                    <Input value={row.title || ''} onChange={(e) => patch(row.id, { title: e.target.value })} placeholder="When They Leave Home" />
                  </Field>

                  <Field label="Description" hint="Two short sentences read best on the card.">
                    <Textarea value={row.description || ''} onChange={(e) => patch(row.id, { description: e.target.value })} />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Badge text" hint="Shown on the card, e.g. Season 2 · Episode 7">
                      <Input value={row.season_label || ''} onChange={(e) => patch(row.id, { season_label: e.target.value })} placeholder="Season 2 · Episode 7" />
                    </Field>
                    <Field label="Topic tag">
                      <Input value={row.label || ''} onChange={(e) => patch(row.id, { label: e.target.value })} placeholder="Parenting" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Field label="Season" hint="1 or 2">
                      <Input type="number" value={row.season ?? 2} onChange={(e) => patch(row.id, { season: Number(e.target.value) })} />
                    </Field>
                    <Field label="Episode number">
                      <Input type="number" value={row.episode_number ?? ''} onChange={(e) => patch(row.id, { episode_number: e.target.value === '' ? null : Number(e.target.value) })} />
                    </Field>
                    <Field label="Order on page" hint="Lower shows first">
                      <Input type="number" value={row.sort_order ?? 0} onChange={(e) => patch(row.id, { sort_order: Number(e.target.value) })} />
                    </Field>
                  </div>

                  <Field label="YouTube link">
                    <Input value={row.youtube_url || ''} onChange={(e) => patch(row.id, { youtube_url: e.target.value })} placeholder="https://youtu.be/…" />
                  </Field>
                  <Field label="Spotify link">
                    <Input value={row.spotify_url || ''} onChange={(e) => patch(row.id, { spotify_url: e.target.value })} placeholder="https://open.spotify.com/episode/…" />
                  </Field>
                  <Field label="Rumble link" hint="Optional. Leave blank to hide the Rumble button.">
                    <Input value={row.rumble_url || ''} onChange={(e) => patch(row.id, { rumble_url: e.target.value })} placeholder="https://rumble.com/…" />
                  </Field>

                  <label className="inline-flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={Boolean(row.is_new)}
                      onChange={(e) => patch(row.id, { is_new: e.target.checked })}
                      className="w-4 h-4 accent-[#C9A227]"
                    />
                    <span className="text-navy font-inter text-sm">Show the gold “Out Now” badge</span>
                  </label>

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
