// components/Music.jsx
// Worship songs: Give Thanks, Your Will Be Done
// Update youtubeEmbed URLs in src/data/musicLinks.js with real video IDs

import React, { useState } from 'react';
import { Youtube, Music as MusicNote, ExternalLink } from 'lucide-react';
import { musicLinks } from '../data/musicLinks.js';

function MusicCard({ song }) {
  const [videoVisible, setVideoVisible] = useState(false);

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold/10 hover:shadow-md hover:border-gold/25 transition-all duration-300">
      {/* Video embed area */}
      <div className="relative aspect-video bg-navy/90 overflow-hidden">
        {!videoVisible ? (
          /* Album art / thumbnail with play overlay */
          <div
            className="absolute inset-0 cursor-pointer group"
            onClick={() => setVideoVisible(true)}
            role="button"
            tabIndex={0}
            aria-label={`Play ${song.title} on YouTube`}
            onKeyDown={(e) => e.key === 'Enter' && setVideoVisible(true)}
          >
            <img
              src={song.albumArt}
              alt={`${song.title} by Hilda Akpala`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Youtube size={24} className="text-white ml-1" />
              </div>
            </div>
            <p className="absolute bottom-3 left-3 text-ivory/70 font-inter text-xs">
              Click to play
            </p>
          </div>
        ) : (
          /* Actual YouTube embed */
          <iframe
            src={`${song.youtubeEmbed}&autoplay=1`}
            title={`${song.title} by Hilda Akpala`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />
        )}
      </div>

      {/* Card content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-gold text-xs font-inter font-medium tracking-widest uppercase mb-1">
              Worship Release
            </p>
            <h3
              className="font-playfair text-navy text-xl sm:text-2xl font-semibold leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {song.title}
            </h3>
          </div>
          <MusicNote size={20} className="text-gold/50 flex-shrink-0 mt-1" aria-hidden="true" />
        </div>

        <p className="text-muted font-inter text-sm leading-relaxed mb-5">
          {song.description}
        </p>

        {/* Streaming links */}
        <div className="flex flex-wrap gap-2">
          <a
            href={song.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-navy text-ivory rounded text-xs font-inter font-medium hover:bg-gold hover:text-white transition-all"
            aria-label={`Watch ${song.title} on YouTube`}
          >
            <Youtube size={13} aria-hidden="true" />
            YouTube
          </a>
          {song.spotifyLink && song.spotifyLink !== '#' && (
            <a
              href={song.spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1DB954] text-white rounded text-xs font-inter font-medium hover:opacity-90 transition-opacity"
              aria-label={`Stream ${song.title} on Spotify`}
            >
              <ExternalLink size={12} aria-hidden="true" />
              Spotify
            </a>
          )}
          {song.spotifyLink === '#' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 text-muted rounded text-xs font-inter">
              <ExternalLink size={12} aria-hidden="true" />
              Spotify — coming soon
            </span>
          )}
          {song.appleMusicLink && song.appleMusicLink !== '#' && (
            <a
              href={song.appleMusicLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-800 text-white rounded text-xs font-inter font-medium hover:opacity-90 transition-opacity"
              aria-label={`Listen to ${song.title} on Apple Music`}
            >
              <MusicNote size={12} aria-hidden="true" />
              Apple Music
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Music() {
  return (
    <section
      id="music"
      className="bg-ivory py-20 md:py-28 lg:py-32"
      aria-label="Worship and Music by Hilda Akpala"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
            Listen
          </p>
          <h2
            className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Worship & Music
          </h2>
          <div className="section-divider" aria-hidden="true" />
          <p className="text-muted font-inter text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6">
            Through worship, Hilda Akpala expresses faith, surrender, thanksgiving, and personal
            encounters with God.
          </p>
        </div>

        {/* Music Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {musicLinks.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>

        {/* See all music CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-ivory font-inter font-medium text-sm rounded tracking-wide hover:bg-gold hover:text-white transition-all duration-200"
            aria-label="View all music on YouTube"
          >
            <Youtube size={16} aria-hidden="true" />
            View All Music on YouTube
          </a>
        </div>

      </div>
    </section>
  );
}
