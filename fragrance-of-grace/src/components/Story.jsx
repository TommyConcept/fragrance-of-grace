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
      'For many years, I knew God had a call on my life, but I was unsure of the direction He was leading me. Serving as a worship leader, writing songs, and walking through seasons of inner formation — I carried a vision that fear and feelings of inadequacy had not yet released.',
    accent: false,
  },
  {
    id: 2,
    period: 'August 21, 2024',
    date: '2024',
    title: 'Releasing Give Thanks',
    description:
      'I finally answered the call I had carried for years and released my debut album, Give Thanks — a worship offering rooted in gratitude and the goodness of God. A milestone of courage, obedience, and faith.',
    accent: true,
  },
  {
    id: 3,
    period: 'December 2025',
    date: '2025',
    title: 'Your Will Be Done & the Fragrance Podcast',
    description:
      "I released Your Will Be Done — a song of surrender — in December 2025. Soon after, God placed a new vision in my heart: the Fragrance Podcast, a space to share on identity in Christ, purpose, and the revelation of His grace.",
    accent: false,
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="bg-ivory py-14 md:py-20 lg:py-24"
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
              I have always known that God had a call on my life for ministry, but for many years I
              was unsure of the direction He was leading me. Though I was inspired to write songs,
              fear and feelings of inadequacy held me back.
            </p>
            <p className="text-muted font-inter text-base leading-relaxed mt-4">
              Through music and the podcast, my mission is to help people discover their identity
              in Christ and grow into all God has called them to become.
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — visible on desktop */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold/20"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 md:gap-10">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <div
                      className={`bg-white rounded-2xl p-7 shadow-sm border transition-all duration-300 hover:shadow-md ${
                        milestone.accent
                          ? 'border-gold/40 bg-gradient-to-br from-white to-gold/5'
                          : 'border-gray-100'
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
                  </div>

                  {/* Center dot */}
                  <div
                    className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold bg-white shadow flex-shrink-0 z-10"
                    aria-hidden="true"
                  >
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
