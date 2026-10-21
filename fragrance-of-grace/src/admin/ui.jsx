// admin/ui.jsx — small shared building blocks for the admin forms.

import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { supabase, mediaUrl } from '../lib/supabase.js';

const fieldBase =
  'w-full px-3.5 py-2.5 rounded border border-gray-200 bg-white text-navy text-sm font-inter ' +
  'placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60';

export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-inter font-semibold text-navy/70 mb-1.5">{label}</span>
      {children}
      {hint && <span className="block text-muted font-inter text-xs mt-1">{hint}</span>}
    </label>
  );
}

export function Input(props) {
  return <input {...props} className={fieldBase} />;
}

export function Textarea(props) {
  return <textarea rows={3} {...props} className={`${fieldBase} resize-y`} />;
}

export function Select({ options, ...props }) {
  return (
    <select {...props} className={fieldBase}>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

export function Button({ variant = 'primary', children, ...props }) {
  const styles = {
    primary: 'bg-navy text-ivory hover:bg-gold hover:text-white',
    ghost: 'bg-white text-navy border border-gray-200 hover:border-gold/50 hover:text-gold',
    danger: 'bg-white text-red-600 border border-red-200 hover:bg-red-50',
  }[variant];
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded font-inter font-medium text-sm tracking-wide transition-all disabled:opacity-50 ${styles}`}
    >
      {children}
    </button>
  );
}

/**
 * Uploads an image to the `media` bucket and hands back its public URL.
 * Shows the current image so it is obvious what is being replaced.
 */
export function ImageUpload({ value, onChange, folder = 'uploads', label = 'Image' }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const pick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('That file is not an image.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('That image is larger than 5MB. Please use a smaller one.');
      return;
    }
    if (!supabase) {
      setError('Image upload needs Supabase configured.');
      return;
    }

    setBusy(true);
    setError('');

    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from('media')
      .upload(path, file, { cacheControl: '31536000', upsert: false });

    if (upErr) {
      setError(upErr.message || 'Upload failed. Please try again.');
    } else {
      onChange(mediaUrl(path));
    }

    setBusy(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div>
      <span className="block text-xs font-inter font-semibold text-navy/70 mb-1.5">{label}</span>
      <div className="flex items-start gap-3">
        <div className="w-32 aspect-video rounded-lg border border-gray-200 bg-gray-50 overflow-hidden flex items-center justify-center flex-shrink-0">
          {value ? (
            <img src={value} alt="" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon size={18} className="text-muted" aria-hidden="true" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={pick}
            className="hidden"
            id={`upload-${folder}-${label}`}
          />
          <Button
            type="button"
            variant="ghost"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
          >
            <Upload size={14} aria-hidden="true" />
            {busy ? 'Uploading…' : value ? 'Replace image' : 'Upload image'}
          </Button>
          <p className="text-muted font-inter text-xs mt-2 leading-relaxed">
            Landscape 16:9 works best (1280×720). Up to 5MB.
          </p>
          {error && <p className="text-red-600 font-inter text-xs mt-1.5" role="alert">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export function SaveBar({ dirty, saving, saved, onSave, onCancel }) {
  if (!dirty && !saved) return null;
  return (
    <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
      {dirty && (
        <>
          <Button type="button" onClick={onSave} disabled={saving}>
            {saving ? 'Saving…' : 'Save changes'}
          </Button>
          {onCancel && (
            <Button type="button" variant="ghost" onClick={onCancel} disabled={saving}>
              Cancel
            </Button>
          )}
        </>
      )}
      {!dirty && saved && (
        <p className="text-green-700 font-inter text-xs">Saved. The website is updated.</p>
      )}
    </div>
  );
}
