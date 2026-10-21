// admin/AdminGate.jsx — shows the login screen until there is a session.

import React from 'react';
import { useAuth } from './AuthContext.jsx';
import AdminLogin from './AdminLogin.jsx';

export default function AdminGate({ children }) {
  const { session, checking } = useAuth();

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <p className="text-muted font-inter text-sm">Loading…</p>
      </div>
    );
  }

  if (!session) return <AdminLogin />;
  return children;
}
