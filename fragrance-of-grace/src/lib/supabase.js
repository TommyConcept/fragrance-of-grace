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

// Optional: when set, the admin signs in with the username alone and this
// password is supplied for them.
//
// SECURITY NOTE — this is a deliberate trade-off the site owner asked for.
// Anything the browser can use, a visitor can read: this value is recoverable
// from the built JavaScript by anyone who looks for it. It is weaker than
// typing a password, and stronger than opening the database to anonymous
// writes, because row level security still requires a real session, so an
// automated scan with the public anon key cannot write anything.
// Use a password that is unique to this account, and leave this unset to go
// back to a normal password prompt.
export const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || '';
export const PASSWORDLESS = Boolean(ADMIN_PASSWORD);

// Public URL for a file in the `media` bucket.
export function mediaUrl(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/')) return path;
  if (!supabase) return path;
  return supabase.storage.from('media').getPublicUrl(path).data.publicUrl;
}
