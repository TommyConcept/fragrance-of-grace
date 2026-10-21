// components/Podcast.jsx

import React from 'react';
import { Youtube, Headphones, Mic, ExternalLink } from 'lucide-react';

const SPOTIFY_SHOW = "https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd";
const YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-";

// Season 2 — new series: Shaping Souls
const season2Episodes = [
  {
    id: 1,
    season: "Season 2 · Episode 1",
    title: "Parenting Begins Before Birth",
    description: "Before you knew your child, God knew them. Before you loved them, He loved them. A powerful conversation on partnering with God through prayer as you raise the next generation.",
    label: "Parenting",
    thumbnail: "/images/s2-ep1.jpg",
    youtubeLink: "https://youtu.be/JN0DozxARoU",
    spotifyLink: "https://open.spotify.com/episode/3eNEp0VQvQaIBelHo70bw5?si=FVDFf1ZlQWW899z7FttxNg",
    rumbleLink: "https://rumble.com/v7cxybo-parenting-begins-before-birth.html",
    isNew: false,
  },
  {
    id: 2,
    season: "Season 2 · Episode 2",
    title: "Shaping Souls",
    description: "You're not just raising children — you're shaping souls. This episode encourages you to parent with faith, grace, and purpose as you trust God with your family's future.",
    label: "Parenting",
    thumbnail: "/images/s2-ep2.jpg",
    youtubeLink: "https://youtu.be/THSnIWUx5oU",
    spotifyLink: "https://open.spotify.com/episode/1qjb9ab4Nk661jZBL4ZfoY?si=hvCzzDd1Q9e96fqWjdBrSA",
    rumbleLink: null,
    isNew: false,
  },
  {
    id: 5,
    season: "Season 2 · Episode 5",
    title: "When They Leave Home",
    description: "When your children grow up and no longer need your permission, letting go can feel like losing a piece of your heart. Authority becomes influence, correction becomes conversation, and control becomes trust — your assignment has changed, but your calling has not.",
    label: "Parenting",
    thumbnail: "/images/s2-ep5.jpg",
    youtubeLink: "https://youtu.be/sroxlPS1DU0",
    spotifyLink: "https://open.spotify.com/episode/7efJdFFpjo9LTvV0Iq4xaw?si=FgbqgU1EQk618svaBf0keQ",
    rumbleLink: null,
    isNew: true,
  },
  {
    id: 6,
    season: "Season 2 · Episode 6",
    title: "When Your Child Walks Away From God",
    description: "A parent's hope for the season when the child you raised to love God begins to walk away from their faith. The seeds you planted are not forgotten, and God is not finished writing their story.",
    label: "Parenting",
    thumbnail: "/images/s2-ep6.jpg",
    youtubeLink: "https://youtu.be/61I1uW0Mjrs",
    spotifyLink: "https://open.spotify.com/episode/7GGHMbyGq4nydT7pDgm40N?si=8h2EfL5kSZWB3kmO_u7p2w",
    rumbleLink: null,
    isNew: true,
  },
];

// Season 1 — original episodes
const season1Episodes = [
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
    description: "Walking in the fullness of who God has called you to be, grace for every season.",
    spotifyLink: "https://open.spotify.com/episode/0w2OMxjWDVvAoZVWdv8bec?si=316fe1c498834c7f",
    label: "Purpose",
  },
  {
    id: 3,
    title: "Episode 3",
    description: "Carrying the fragrance of Christ, spiritual growth and the life of a believer.",
    spotifyLink: "https://open.spotify.com/episode/3pANyTOs1USa598kNZw5VL?si=36f9b2ed64a04731",
    label: "Growth",
  },
];

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24"
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
        <div className="max-w-2xl mx-auto mb-14">
          <div className="rounded-2xl p-8 sm:p-10 shadow-md border border-gold/15 bg-sage">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-16 h-16 rounded-xl bg-white/40 border border-navy/10 flex items-center justify-center flex-shrink-0">
                <Mic size={28} className="text-navy" aria-hidden="true" />
              </div>
              <div>
                <p className="text-navy/60 text-xs font-inter tracking-widest uppercase font-medium mb-1">
                  Now Streaming
                </p>
                <h3
                  className="text-navy font-playfair text-xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Fragrance Podcast
                </h3>
                <p className="text-navy/70 font-inter text-sm">Hosted by Hilda Akpala</p>
              </div>
            </div>

            <div className="border-t border-navy/10 pt-6 mb-7">
              <p className="text-navy/70 font-inter text-xs tracking-widest uppercase mb-3 font-medium">
                Topics Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {['Identity in Christ', 'Purpose', 'Grace', 'Parenting', 'Spiritual Growth'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full text-xs font-inter text-navy border border-navy/20 bg-white/40"
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
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-navy text-ivory font-inter font-medium text-sm rounded tracking-wide hover:bg-gold hover:text-navy transition-all duration-200"
              >
                <Youtube size={16} aria-hidden="true" />
                Watch on YouTube
              </a>
              <a
                href={SPOTIFY_SHOW}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white/50 text-navy font-inter font-medium text-sm rounded tracking-wide hover:bg-white border border-navy/15 transition-all duration-200"
              >
                <Headphones size={16} aria-hidden="true" />
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>

        {/* ── SEASON 2 ── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gold/20" aria-hidden="true" />
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-white text-xs font-inter font-semibold tracking-widest uppercase">
                New Series
              </span>
              <p
                className="font-playfair text-navy text-xl font-semibold mt-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Season 2 — Shaping Souls
              </p>
              <p className="text-muted font-inter text-sm mt-1">
                Faith. Parenting. Purpose. Eternity. Raising godly children for impact.
              </p>
            </div>
            <div className="flex-1 h-px bg-gold/20" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {season2Episodes.map((ep) => (
              <article
                key={ep.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gold/15 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-navy/10">
                  <img
                    src={ep.thumbnail}
                    alt={`${ep.title} — Fragrance Podcast ${ep.season}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {ep.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-gold text-white text-xs font-inter font-bold tracking-wide uppercase shadow">
                        Out Now
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded bg-navy/80 text-ivory text-xs font-inter">
                      {ep.season}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col gap-3">
                  <span className="inline-flex w-fit px-2.5 py-1 rounded-full text-xs font-inter text-gold border border-gold/30 bg-gold/5">
                    {ep.label}
                  </span>
                  <h4
                    className="font-playfair text-navy text-lg font-semibold leading-snug group-hover:text-gold transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {ep.title}
                  </h4>
                  <p className="text-muted font-inter text-sm leading-relaxed">
                    {ep.description}
                  </p>

                  {/* Platform links */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 mt-1">
                    <a
                      href={ep.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy text-ivory rounded text-xs font-inter font-medium hover:bg-gold hover:text-navy transition-all"
                      aria-label={`Watch ${ep.title} on YouTube`}
                    >
                      <Youtube size={12} aria-hidden="true" />
                      YouTube
                    </a>
                    <a
                      href={ep.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1DB954] text-white rounded text-xs font-inter font-medium hover:opacity-90 transition-opacity"
                      aria-label={`Listen to ${ep.title} on Spotify`}
                    >
                      <Headphones size={12} aria-hidden="true" />
                      Spotify
                    </a>
                    {ep.rumbleLink && (
                      <a
                        href={ep.rumbleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#85C742] text-white rounded text-xs font-inter font-medium hover:opacity-90 transition-opacity"
                        aria-label={`Watch ${ep.title} on Rumble`}
                      >
                        <ExternalLink size={12} aria-hidden="true" />
                        Rumble
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── SEASON 1 ── */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-navy/10" aria-hidden="true" />
            <p className="text-navy/50 font-inter text-xs tracking-widest uppercase font-semibold">
              Season 1 Episodes
            </p>
            <div className="flex-1 h-px bg-navy/10" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {season1Episodes.map((ep) => (
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

        {/* See all */}
        <div className="text-center mt-8">
          <a
            href={SPOTIFY_SHOW}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-navy text-navy font-inter font-medium text-sm rounded tracking-wide hover:bg-navy hover:text-ivory transition-all duration-200"
          >
            <Headphones size={15} aria-hidden="true" />
            See All Episodes on Spotify
          </a>
        </div>

      </div>
    </section>
  );
}
