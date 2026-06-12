// components/Podcast.jsx
// Image used: public/images/hilda-4.jpg

import React from 'react';
import { Youtube, Headphones, Mic, ExternalLink } from 'lucide-react';

const SPOTIFY_SHOW = "https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd";
const YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-";

const podcastEpisodes = [
  {
    id: 1,
    title: "Episode 1",
    description: "A Christ-centered conversation on identity, purpose, and the revelation of grace.",
    spotifyLink: "https://open.spotify.com/episode/0dO0HJtGZSVoTZbnmjBF59?si=4228b396504b402c",
    label: "Identity",
  },
  {
    id: 2,
    title: "Episode 2",
    description: "Walking in the fullness of who God has called you to be — grace for every season.",
    spotifyLink: "https://open.spotify.com/episode/0w2OMxjWDVvAoZVWdv8bec?si=316fe1c498834c7f",
    label: "Purpose",
  },
  {
    id: 3,
    title: "Episode 3",
    description: "Carrying the fragrance of Christ — spiritual growth and the life of a believer.",
    spotifyLink: "https://open.spotify.com/episode/3pANyTOs1USa598kNZw5VL?si=36f9b2ed64a04731",
    label: "Growth",
  },
];

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="py-14 md:py-20 lg:py-24"
      style={{ background: 'linear-gradient(180deg, #FAF6EE 0%, #F0EAD8 100%)' }}
      aria-label="The Fragrance Podcast"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
            Listen & Watch
          </p>
          <h2
            className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Fragrance Podcast
          </h2>
          <div className="section-divider" aria-hidden="true" />
          <p className="text-muted font-inter text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            A Christ-centered space for teachings and conversations about identity, purpose,
            spiritual growth, and the revelation of grace.
          </p>
        </div>

        {/* Podcast card */}
        <div className="max-w-2xl mx-auto mb-16">

          {/* Podcast card */}
          <div
            className="rounded-2xl p-8 sm:p-10 shadow-md border border-gold/15"
            style={{ background: 'linear-gradient(145deg, #0B1B33 0%, #0f2650 100%)' }}
          >
            <div className="flex items-center gap-4 mb-7">
              <div className="w-16 h-16 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                <Mic size={28} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="text-gold text-xs font-inter tracking-widest uppercase font-medium mb-1">
                  Now Streaming
                </p>
                <h3
                  className="text-ivory font-playfair text-xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Fragrance Podcast
                </h3>
                <p className="text-ivory/60 font-inter text-sm">Hosted by Hilda Akpala</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-7">
              <p className="text-ivory/70 font-inter text-xs tracking-widest uppercase mb-3 font-medium">
                Topics Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {['Identity in Christ', 'Purpose', 'Grace', 'Spiritual Growth'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full text-xs font-inter text-gold border border-gold/30 bg-gold/5"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={YOUTUBE_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gold text-white font-inter font-medium text-sm rounded tracking-wide hover:bg-yellow-500 hover:text-navy transition-all duration-200"
                aria-label="Watch Fragrance Podcast on YouTube"
              >
                <Youtube size={16} aria-hidden="true" />
                Watch on YouTube
              </a>
              <a
                href={SPOTIFY_SHOW}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-ivory font-inter font-medium text-sm rounded tracking-wide hover:bg-white/20 border border-white/20 transition-all duration-200"
                aria-label="Listen to Fragrance Podcast on Spotify"
              >
                <Headphones size={16} aria-hidden="true" />
                Listen on Spotify
              </a>
            </div>
          </div>

        </div>

        {/* Episode Cards */}
        <div className="mb-6">
          <p className="text-gold text-xs font-inter font-semibold tracking-[0.2em] uppercase mb-6 text-center">
            Latest Episodes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {podcastEpisodes.map((ep) => (
              <a
                key={ep.id}
                href={ep.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-gold/10 hover:border-gold/35 hover:shadow-md transition-all duration-300 flex flex-col gap-3"
                aria-label={`Listen to ${ep.title} on Spotify`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-inter text-gold border border-gold/30 bg-gold/5">
                    {ep.label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#1DB954]/10 flex items-center justify-center group-hover:bg-[#1DB954]/20 transition-colors">
                    <Headphones size={14} className="text-[#1DB954]" aria-hidden="true" />
                  </div>
                </div>
                <h4
                  className="font-playfair text-navy text-base font-semibold leading-snug group-hover:text-gold transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {ep.title}
                </h4>
                <p className="text-muted font-inter text-xs leading-relaxed flex-1">
                  {ep.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#1DB954] font-inter text-xs font-medium mt-auto">
                  <ExternalLink size={11} aria-hidden="true" />
                  Listen on Spotify
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* See all episodes */}
        <div className="text-center mt-8">
          <a
            href={SPOTIFY_SHOW}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-navy text-navy font-inter font-medium text-sm rounded tracking-wide hover:bg-navy hover:text-ivory transition-all duration-200"
            aria-label="See all episodes on Spotify"
          >
            <Headphones size={15} aria-hidden="true" />
            See All Episodes on Spotify
          </a>
        </div>

      </div>
    </section>
  );
}
