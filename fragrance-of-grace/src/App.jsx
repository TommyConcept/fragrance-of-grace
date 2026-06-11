// App.jsx — Fragrance of Grace | One-Page Website
// All sections are rendered in scroll order on the same page.
// Navigate using anchor links in the Header — each section has an id.
//
// Asset placements:
//   Logo:              public/images/logo.png   (also used as favicon in index.html)
//   Hero background:   public/images/hilda-hero.jpg
//   Hilda photos:      public/images/hilda-1.jpg through hilda-5.jpg
//   Video thumbnails:  public/images/video-thumbnail-1.jpg through video-thumbnail-4.jpg

import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Mission from './components/Mission.jsx';
import Story from './components/Story.jsx';
import Podcast from './components/Podcast.jsx';
import FeaturedVideos from './components/FeaturedVideos.jsx';
import Music from './components/Music.jsx';
import Connect from './components/Connect.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation Header */}
      <Header />

      <main>
        {/* 1. Hero — #home */}
        <Hero />

        {/* 2. About — #about */}
        <About />

        {/* 3. Mission — #mission (scrolled to from About) */}
        <Mission />

        {/* 4. Story — #story */}
        <Story />

        {/* 5. Podcast — #podcast */}
        <Podcast />

        {/* 6. Featured Videos — #videos */}
        <FeaturedVideos />

        {/* 7. Music — #music */}
        <Music />

        {/* 8. Connect + Email Signup — #connect */}
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
