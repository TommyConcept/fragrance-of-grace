// App.jsx — Fragrance of Grace
// Public routes: / | /ministry | /podcast | /music | /shop | /connect
// Private route: /admin (podcast, music, featured videos)

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Pages
import Home        from './pages/Home.jsx';
import Ministry    from './pages/Ministry.jsx';
import PodcastPage from './pages/PodcastPage.jsx';
import MusicPage   from './pages/MusicPage.jsx';
import ConnectPage from './pages/ConnectPage.jsx';
import ShopPage    from './pages/ShopPage.jsx';

// Admin — loaded on demand so visitors to the public site never download it.
const AdminApp = lazy(() => import('./admin/AdminApp.jsx'));

// The public site, with the shared header and footer.
function PublicSite() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/podcast"  element={<PodcastPage />} />
        <Route path="/music"    element={<MusicPage />} />
        <Route path="/connect"  element={<ConnectPage />} />
        <Route path="/shop"     element={<ShopPage />} />
        <Route path="*"         element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin — its own chrome, no public header or footer. */}
        <Route
          path="/admin/*"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-ivory">
                  <p className="text-muted font-inter text-sm">Loading\u2026</p>
                </div>
              }
            >
              <AdminApp />
            </Suspense>
          }
        />

        {/* Everything else is the public website. */}
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </Router>
  );
}
