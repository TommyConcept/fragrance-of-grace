// admin/AdminApp.jsx
// The whole admin area in one lazy-loaded chunk.

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import AdminGate from './AdminGate.jsx';
import AdminLayout from './AdminLayout.jsx';
import PodcastAdmin from './PodcastAdmin.jsx';
import MusicAdmin from './MusicAdmin.jsx';
import FeaturedVideosAdmin from './FeaturedVideosAdmin.jsx';

export default function AdminApp() {
  return (
    <AuthProvider>
      <AdminGate>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route index           element={<Navigate to="/admin/podcast" replace />} />
            <Route path="podcast"  element={<PodcastAdmin />} />
            <Route path="music"    element={<MusicAdmin />} />
            <Route path="featured" element={<FeaturedVideosAdmin />} />
            <Route path="*"        element={<Navigate to="/admin/podcast" replace />} />
          </Route>
        </Routes>
      </AdminGate>
    </AuthProvider>
  );
}
