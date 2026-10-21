// admin/AdminLogin.jsx

import React, { useState } from 'react';
import { Lock, LogIn } from 'lucide-react';
import { useAuth } from './AuthContext.jsx';
import { ADMIN_USERNAME, PASSWORDLESS } from '../lib/supabase.js';

export default function AdminLogin() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState(ADMIN_USERNAME);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const { error: err } = await signIn(username, password);
    if (err) setError(err);
    setBusy(false);
  };

  const field =
    'w-full px-4 py-3 rounded border border-gray-200 bg-white text-navy text-sm font-inter ' +
    'placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/60';

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-ivory">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-white border border-gold/25 shadow-sm flex items-center justify-center mx-auto mb-5">
            <Lock size={20} className="text-gold" aria-hidden="true" />
          </div>
          <h1
            className="font-playfair text-navy text-2xl font-semibold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Fragrance of Grace
          </h1>
          <p className="text-muted font-inter text-xs tracking-[0.2em] uppercase mt-1">
            Admin
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl border border-gold/15 shadow-sm p-7"
        >
          <label htmlFor="username" className="block text-xs font-inter font-medium text-navy/70 mb-1.5">
            Username
          </label>
          <div className={PASSWORDLESS ? '' : 'mb-4'}>
          <input
            id="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={field}
          />
          </div>

          {/* The password field only appears when no password is configured
              for this deployment. */}
          {!PASSWORDLESS && (
            <>
              <label htmlFor="password" className="block text-xs font-inter font-medium text-navy/70 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={field}
              />
            </>
          )}

          {error && (
            <p className="text-red-600 text-xs font-inter mt-4 leading-relaxed" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy || (!PASSWORDLESS && !password)}
            className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-ivory font-inter font-medium text-sm rounded tracking-wide hover:bg-gold hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-navy disabled:hover:text-ivory"
          >
            <LogIn size={15} aria-hidden="true" />
            {busy ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-muted font-inter text-xs mt-6">
          This area is private. Visitors never see it.
        </p>
      </div>
    </main>
  );
}
