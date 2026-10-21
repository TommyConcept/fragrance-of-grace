// admin/AdminLayout.jsx — chrome shared by every admin screen.

import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Mic, Music, Video, LogOut, ExternalLink } from 'lucide-react';
import { useAuth } from './AuthContext.jsx';

const tabs = [
  { to: '/admin/podcast',  label: 'Podcast',         icon: Mic },
  { to: '/admin/music',    label: 'Music',           icon: Music },
  { to: '/admin/featured', label: 'Featured Videos', icon: Video },
];

export default function AdminLayout() {
  const { signOut } = useAuth();

  const tabClass = ({ isActive }) =>
    `inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-inter text-sm font-medium transition-all ${
      isActive ? 'bg-navy text-ivory' : 'text-navy/70 hover:text-gold hover:bg-white'
    }`;

  return (
    <div className="min-h-screen bg-ivory">
      <header className="bg-white border-b border-gold/15 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className="font-playfair text-navy text-lg font-semibold leading-tight truncate"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Fragrance of Grace
            </p>
            <p className="text-muted font-inter text-xs tracking-[0.2em] uppercase">Admin</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-navy/70 font-inter text-xs hover:text-gold transition-colors"
            >
              <ExternalLink size={13} aria-hidden="true" />
              View site
            </Link>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-gray-200 text-navy/70 font-inter text-xs hover:text-gold hover:border-gold/40 transition-all"
            >
              <LogOut size={13} aria-hidden="true" />
              Sign out
            </button>
          </div>
        </div>

        <nav className="max-w-5xl mx-auto px-4 sm:px-6 pb-3 flex gap-2 overflow-x-auto" aria-label="Admin sections">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <NavLink key={t.to} to={t.to} className={tabClass}>
                <Icon size={15} aria-hidden="true" />
                {t.label}
              </NavLink>
            );
          })}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-20">
        <Outlet />
      </main>
    </div>
  );
}
