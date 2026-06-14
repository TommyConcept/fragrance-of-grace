// components/FeaturedVideos.jsx
// Manually managed video grid — no YouTube or Instagram API used.
// Thumbnails: public/images/video-thumbnail-1.jpg through video-thumbnail-4.jpg

import React from 'react';
import { Play, Youtube, Instagram } from 'lucide-react';
import { featuredVideos } from '../data/featuredVideos.js';

const platformIcon = (platform) => {
  switch (platform) {
    case 'YouTube':
      return <Youtube size={14} className="text-current" aria-hidden="true" />;
    case 'Instagram':
      return <Instagram size={14} className="text-current" aria-hidden="true" />;
    default:
      return <Play size={14} className="text-current" aria-hidden="true" />;
  }
};

const platformColor = (platform) => {
  switch (platform) {
    case 'YouTube':
      return 'bg-red-600/90 text-white';
    case 'Instagram':
      return 'bg-purple-600/90 text-white';
    default:
      return 'bg-navy/80 text-white';
  }
};

export default function FeaturedVideos() {
  return (
    <section
      id="videos"
      className="bg-cream py-14 md:py-20 lg:py-24"
      aria-label="Featured Messages and Videos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
            Watch
          </p>
          <h2
            className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Featured Messages & Videos
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-5 opacity-70" aria-hidden="true" />
          <p className="text-muted font-inter text-base max-w-xl mx-auto leading-relaxed">
            Christ-centered messages, worship moments, and reflections from Hilda Akpala.
          </p>
        </div>

        {/* Video Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Featured video list"
        >
          {featuredVideos.map((video) => (
            <article
              key={video.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              role="listitem"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video bg-navy/10">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for: ${video.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 bg-navy/10 group-hover:bg-navy/5 transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Play button */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
                    <Play size={22} className="text-white ml-1" />
                  </div>
                </div>

                {/* Platform badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-inter font-medium ${platformColor(video.platform)}`}
                  >
                    {platformIcon(video.platform)}
                    {video.platform}
                  </span>
                </div>

                {/* Label badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex px-2 py-1 rounded bg-gold/90 text-white text-xs font-inter font-medium">
                    {video.label}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col gap-3">
                <h3
                  className="font-playfair text-navy text-base font-semibold leading-snug group-hover:text-gold transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {video.title}
                </h3>
                <p className="text-muted font-inter text-xs leading-relaxed line-clamp-2">
                  {video.description}
                </p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-gold font-inter text-xs font-medium hover:text-navy transition-colors group/btn"
                  aria-label={`Watch video: ${video.title}`}
                >
                  <Play size={12} aria-hidden="true" className="group-hover/btn:translate-x-0.5 transition-transform" />
                  Watch Video
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold text-gold font-inter font-medium text-sm rounded tracking-wide hover:bg-gold hover:text-white transition-all duration-200"
            aria-label="See more videos on YouTube"
          >
            <Youtube size={16} aria-hidden="true" />
            See More on YouTube
          </a>
        </div>

      </div>
    </section>
  );
}
