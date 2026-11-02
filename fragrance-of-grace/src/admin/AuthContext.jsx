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

  // The owner signs in with a username and nothing else.
  //
  // The username is checked here, then an anonymous Supabase session is
  // opened. That session still carries the `authenticated` role, so the row
  // level security written in schema.sql keeps working untouched — no email,
  // no password, and no credential inside the bundle.
  //
  // This is a convenience the site owner asked for, not a security boundary:
  // the username is public, so anyone who reaches /design can open a session
  // the same way.
  const signIn = async (username) => {
    if (!isSupabaseConfigured) {
      return { error: 'The admin area is not configured yet. Add the Supabase keys in Vercel and redeploy.' };
    }
    if (username.trim().toLowerCase() !== ADMIN_USERNAME.toLowerCase()) {
      return { error: 'That username was not recognised.' };
    }

    const { error } = await supabase.auth.signInAnonymously();
    if (!error) return { error: null };

    // Anonymous sign-in is off for this project. Fall back to the stored
    // password if one was configured, otherwise say exactly what to switch on.
    if (ADMIN_EMAIL && ADMIN_PASSWORD) {
      const { error: pwErr } = await supabase.auth.signInWithPassword({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      });
      if (!pwErr) return { error: null };
    }

    return {
      error: 'Could not sign in. In Supabase, open Authentication, then Sign In / Providers, and turn on "Allow anonymous sign-ins".',
    };
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
