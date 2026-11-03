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
import ReelsAdmin from './ReelsAdmin.jsx';
import DesignStudio from '../design/DesignStudio.jsx';

/**
 * `studioOnly` serves /design, where the Design Studio is the whole point and
 * there is no admin index to fall through to.
 */
export default function AdminApp({ studioOnly = false }) {
  if (studioOnly) {
    return (
      <AuthProvider>
        <AdminGate>
          <DesignStudio />
        </AdminGate>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <AdminGate>
        <Routes>
          {/* The studio needs the whole screen, so it sits outside the tabs. */}
          <Route path="studio" element={<DesignStudio />} />
          <Route element={<AdminLayout />}>
            <Route index           element={<Navigate to="/admin/podcast" replace />} />
            <Route path="podcast"  element={<PodcastAdmin />} />
            <Route path="music"    element={<MusicAdmin />} />
            <Route path="featured" element={<FeaturedVideosAdmin />} />
            <Route path="reels"    element={<ReelsAdmin />} />
            <Route path="*"        element={<Navigate to="/admin/podcast" replace />} />
          </Route>
        </Routes>
      </AdminGate>
    </AuthProvider>
  );
}
