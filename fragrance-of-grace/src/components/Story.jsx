// components/Story.jsx
// Image used: public/images/hilda-3.jpg

import React from 'react';

const milestones = [
  {
    id: 1,
    period: 'Years of Preparation',
    date: 'Before 2024',
    title: 'A Season of Preparation',
    description:
      "Serving as a worship leader, writing songs and walking through seasons of formation, I finally answered God's call and that gave birth to my songs and Fragrance podcast.",
    accent: false,
  },
  {
    id: 2,
    period: 'August 21, 2024',
    date: '2024',
    title: 'My Debut Album: Give Thanks',
    description:
      "A worship song rooted in gratitude and many years of God's goodness and faithfulness.",
    accent: true,
  },
  {
    id: 3,
    period: 'February 1, 2026',
    date: '2026',
    title: 'Fragrance Debut',
    description:
      "God placed a vision in my heart to start Fragrance, a space to share on our identity in Christ and purpose after the release of the song Your Will Be Done in December 2025.",
    accent: false,
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="bg-ivory pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10 lg:pb-12"
      aria-label="Hilda's Story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10 md:mb-14">
          <div>
            <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
              The Journey
            </p>
            <h2
              className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              My Story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" aria-hidden="true" />
            <p className="text-muted font-inter text-base leading-relaxed">
              I have always known that God had a call on my life for ministry, but I was unsure of
              the direction He was leading me. Although I was inspired to write songs but fear and
              feelings of inadequacy held me back for years.
            </p>
            <p className="text-muted font-inter text-base leading-relaxed mt-4">
              My mission is to help people discover their identity in Christ and grow into all God
              has called them to become through music, biweekly podcast, daily reels and prayers.
            </p>
          </div>

          {/* Story image */}
          {/* Image: public/images/hilda-3.jpg */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-sm">
              <img
                src="/images/hilda-3.jpg"
                alt="Hilda Akpala — a ministry portrait"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
              {/* Gold border accent */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-gold/25 -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Milestone Cards — 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className={`rounded-2xl p-7 shadow-sm border transition-all duration-300 hover:shadow-md ${
                milestone.accent
                  ? 'border-gold/40 bg-gradient-to-br from-white to-gold/5'
                  : 'border-gray-100 bg-white'
              }`}
            >
              <p className="text-gold text-xs font-inter font-semibold tracking-[0.2em] uppercase mb-2">
                {milestone.period}
              </p>
              <h3
                className="font-playfair text-navy text-xl sm:text-2xl font-semibold mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {milestone.title}
              </h3>
              <p className="text-muted font-inter text-sm sm:text-base leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
