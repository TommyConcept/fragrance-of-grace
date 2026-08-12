// App.jsx — Fragrance of Grace | 5-Page Website
// Routes: / | /ministry | /podcast | /music | /connect

import React from 'react';
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

export default function App() {
  return (
    <Router>
      {/* Sticky navigation — shared across all pages */}
      <Header />

      {/* Page routes */}
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/podcast"  element={<PodcastPage />} />
        <Route path="/music"    element={<MusicPage />} />
        <Route path="/connect"  element={<ConnectPage />} />
        <Route path="/shop"     element={<ShopPage />} />

        {/* Catch-all — redirect unknown URLs to Home */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer — shared across all pages */}
      <Footer />
    </Router>
  );
}
