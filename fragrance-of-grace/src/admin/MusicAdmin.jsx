// admin/MusicAdmin.jsx — add, edit and remove worship releases.

import React, { useEffect, useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '../lib/supabase.js';
import { Field, Input, Textarea, Button, ImageUpload } from './ui.jsx';

// Accepts a watch URL, a youtu.be link or a bare ID and returns the embed URL.
function toEmbed(url) {
  if (!url) return '';
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : '';
}

const blank = () => ({
  title: '',
  description: '',
  album_art_url: '',
  youtube_url: '',
  youtube_embed: '',
  spotify_url: '',
  apple_music_url: '',
  sort_order: 0,
});

export default function MusicAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState(null);

  const load = async () => {
    setLoading(true);
    const { data, error: e } = await supabase
      .from('music_tracks')
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
    const { _dirty, _isNewRow, ...rest } = row;
    // Keep the embed in step with the YouTube link automatically.
    const payload = { ...rest, youtube_embed: toEmbed(rest.youtube_url) || rest.youtube_embed || '' };

    const query = _isNewRow
      ? supabase.from('music_tracks').insert(payload).select().single()
      : supabase.from('music_tracks').update(payload).eq('id', row.id).select().single();

    const { data, error: e } = await query;
    if (e) setError(e.message);
    else setRows((rs) => rs.map((r) => (r.id === row.id ? data : r)));
    setSavingId(null);
  };

  const remove = async (row) => {
    if (!window.confirm(`Remove "${row.title}" from the music page? This cannot be undone.`)) return;
    if (!row._isNewRow) {
      const { error: e } = await supabase.from('music_tracks').delete().eq('id', row.id);
      if (e) { setError(e.message); return; }
    }
    setRows((rs) => rs.filter((r) => r.id !== row.id));
  };

  const addTrack = () => {
    const maxOrder = rows.reduce((m, r) => Math.max(m, r.sort_order ?? 0), 0);
    const row = { ...blank(), id: `new-${Date.now()}`, sort_order: maxOrder + 10, _isNewRow: true, _dirty: true };
    setRows((rs) => [...rs, row]);
    setOpenId(row.id);
  };

  if (loading) return <p className="text-muted font-inter text-sm">Loading music…</p>;

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="font-playfair text-navy text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Worship & Music
          </h2>
          <p className="text-muted font-inter text-sm mt-1">
            Each release shows on the Music page with its album art and streaming links.
          </p>
        </div>
        <Button onClick={addTrack}>
          <Plus size={15} aria-hidden="true" />
          New release
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
                  {row.album_art_url && <img src={row.album_art_url} alt="" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-playfair text-navy font-semibold text-sm truncate" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {row.title || 'Untitled release'}
                  </p>
                  {row._dirty && <p className="text-amber-600 font-inter text-xs mt-0.5 font-medium">Unsaved</p>}
                </div>
                {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
              </button>

              {open && (
                <div className="p-5 pt-1 border-t border-gray-100 flex flex-col gap-4">
                  <ImageUpload
                    label="Album art"
                    folder="music"
                    value={row.album_art_url}
                    onChange={(url) => patch(row.id, { album_art_url: url })}
                  />

                  <Field label="Song title">
                    <Input value={row.title || ''} onChange={(e) => patch(row.id, { title: e.target.value })} placeholder="Your Will Be Done" />
                  </Field>

                  <Field label="Description">
                    <Textarea value={row.description || ''} onChange={(e) => patch(row.id, { description: e.target.value })} />
                  </Field>

                  <Field label="YouTube link" hint="The embed used on the page is worked out from this automatically.">
                    <Input value={row.youtube_url || ''} onChange={(e) => patch(row.id, { youtube_url: e.target.value })} placeholder="https://youtu.be/…" />
                  </Field>

                  <Field label="Spotify link" hint="Leave blank to show “Spotify, coming soon”.">
                    <Input value={row.spotify_url || ''} onChange={(e) => patch(row.id, { spotify_url: e.target.value })} placeholder="https://open.spotify.com/track/…" />
                  </Field>

                  <Field label="Apple Music link" hint="Optional. Leave blank to hide the button.">
                    <Input value={row.apple_music_url || ''} onChange={(e) => patch(row.id, { apple_music_url: e.target.value })} placeholder="https://music.apple.com/…" />
                  </Field>

                  <Field label="Order on page" hint="Lower shows first">
                    <Input type="number" value={row.sort_order ?? 0} onChange={(e) => patch(row.id, { sort_order: Number(e.target.value) })} />
                  </Field>

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
