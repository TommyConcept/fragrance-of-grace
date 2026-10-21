// admin/AuthContext.jsx
// Session state for the admin area, backed by Supabase Auth.

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured, ADMIN_USERNAME, ADMIN_EMAIL, ADMIN_PASSWORD } from '../lib/supabase.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) { setChecking(false); return; }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
      setChecking(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  // Accepts the username rather than an email address. The username maps to the
  // single admin account. When VITE_ADMIN_PASSWORD is configured the password
  // is supplied automatically, so the owner signs in with a username alone.
  const signIn = async (username, password) => {
    if (!isSupabaseConfigured) {
      return { error: 'The admin area is not configured yet. Add the Supabase keys in Vercel and redeploy.' };
    }
    if (!ADMIN_EMAIL) {
      return { error: 'No admin email is configured. Set VITE_ADMIN_EMAIL in Vercel and redeploy.' };
    }
    if (username.trim().toLowerCase() !== ADMIN_USERNAME.toLowerCase()) {
      return { error: 'That username was not recognised.' };
    }

    const effectivePassword = ADMIN_PASSWORD || password;
    if (!effectivePassword) {
      return { error: 'Please enter your password.' };
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password: effectivePassword,
    });
    if (error) {
      return {
        error: ADMIN_PASSWORD
          // The owner typed nothing wrong — the stored password is stale.
          ? 'Sign in failed. The saved password no longer matches this account; update VITE_ADMIN_PASSWORD in Vercel and redeploy.'
          : 'That username and password do not match.',
      };
    }
    return { error: null };
  };

  const signOut = async () => {
    if (isSupabaseConfigured) await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, checking, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
