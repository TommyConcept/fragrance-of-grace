// components/Hero.jsx
// Hero background image: public/images/hilda-hero.jpg
// Fully centered and stacked vertically — no split layout.

import React from 'react';
import EmailSignupForm from './EmailSignupForm.jsx';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Fragrance of Grace"
    >
      {/* Background Image with soft 25% overlay */}
      {/* Image location: public/images/hilda-hero.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hilda-hero.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay — soft ivory/navy at 75% opacity so image remains visible */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, rgba(11,27,51,0.93) 0%, rgba(11,27,51,0.90) 50%, rgba(11,27,51,0.87) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative soft glow shapes */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Content — centered stacked */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 py-24 pt-36 text-center flex flex-col items-center">

        {/* Eyebrow */}
        <p className="text-gold text-xs sm:text-sm font-inter font-medium tracking-[0.25em] uppercase mb-6 opacity-90">
          Welcome, Beloved
        </p>

        {/* Main Heading */}
        <h1
          className="text-ivory font-playfair text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Fragrance of Grace
        </h1>

        {/* Supporting Heading */}
        <h2
          className="text-ivory/90 font-playfair text-lg sm:text-xl md:text-2xl font-normal italic leading-relaxed mb-6 max-w-2xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Expressing the Identity of Christ Through Sound, Worship, and Grace
        </h2>

        {/* Gold divider */}
        <div className="w-12 h-px bg-gold mb-6 opacity-80" aria-hidden="true" />

        {/* Supporting Text */}
        <p className="text-ivory/80 font-inter text-sm sm:text-base leading-relaxed max-w-xl mb-10">
          From worship songs to the Fragrance Podcast, Hilda Akpala shares Christ-centered
          messages that help believers understand who they are in Christ and carry His presence
          into every space they enter.
        </p>

        {/* Hero Email Signup Form */}
        <div className="w-full max-w-lg">
          <div
            className="rounded-2xl px-6 py-7 sm:px-8 sm:py-8"
            style={{
              background: 'rgba(250, 246, 238, 0.10)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(201, 162, 39, 0.25)',
            }}
          >
            <h3
              className="text-ivory font-playfair text-xl sm:text-2xl font-medium mb-2 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Receive prayers + messages in your inbox
            </h3>
            <p className="text-ivory/60 text-xs font-inter text-center mb-5 tracking-wide">
              Christ-centered prayers, reflections, and ministry updates — straight to you.
            </p>
            <EmailSignupForm theme="dark" />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
          <div className="w-px h-8 bg-gold animate-pulse" />
          <span className="text-ivory text-xs font-inter tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
