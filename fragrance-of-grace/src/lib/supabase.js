// lib/supabase.js
// Single Supabase client for the whole site.
//
// The site works with or without Supabase configured: when the env vars are
// missing (local dev, or before setup is finished) `supabase` is null and every
// page falls back to the content bundled in src/data/.

import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;

// Admin identity. The username is not a secret — it only decides which account
// to sign in as. The password is what actually protects the admin area, and it
// is verified by Supabase, never in this bundle.
export const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'Fragranceofgrace';
export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || '';

// Public URL for a file in the `media` bucket.
export function mediaUrl(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/')) return path;
  if (!supabase) return path;
  return supabase.storage.from('media').getPublicUrl(path).data.publicUrl;
}
