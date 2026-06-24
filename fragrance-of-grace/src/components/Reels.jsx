// components/Reels.jsx
// Daily reels from YouTube Shorts — manually managed, no API.

import React from 'react';
import { Play, Youtube } from 'lucide-react';
import { reels } from '../data/reels.js';

export default function Reels() {
  return (
    <section
      id="reels"
      className="bg-ivory pt-8 md:pt-10 lg:pt-12 pb-14 md:pb-20 lg:pb-24"
      aria-label="Daily Reels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
            Daily Encouragement
          </p>
          <h2
            className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Reels
          </h2>
          <div className="section-divider" aria-hidden="true" />
          <p className="text-muted font-inter text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6">
            Short, Christ-centered reflections to encourage You throughout the week.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              aria-label={`Watch reel: ${reel.title}`}
            >
              <div className="relative aspect-[9/16] bg-navy/80 overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={`Thumbnail for reel: ${reel.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
                    <Play size={18} className="text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-inter font-medium bg-red-600/90 text-white">
                    <Youtube size={11} aria-hidden="true" />
                    Short
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="font-playfair text-navy text-sm font-semibold leading-snug group-hover:text-gold transition-colors mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {reel.title}
                </h3>
                <p className="text-muted font-inter text-xs leading-relaxed">
                  {reel.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
