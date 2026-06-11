// components/Mission.jsx

import React from 'react';

export default function Mission() {
  return (
    <section
      id="mission"
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #0B1B33 0%, #0f2444 50%, #0B1B33 100%)' }}
      aria-label="My Mission"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section label */}
        <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium opacity-80">
          The Calling
        </p>

        <h2
          className="font-playfair text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          My Mission
        </h2>

        <div className="w-12 h-px bg-gold mx-auto mb-8 opacity-70" aria-hidden="true" />

        <p className="text-ivory/85 font-inter text-lg sm:text-xl leading-relaxed mb-5 max-w-2xl mx-auto">
          To help people understand who they are in Christ and to carry His presence like a
          fragrance into every space they enter.
        </p>

        <p className="text-ivory/60 font-inter text-base leading-relaxed mb-14 max-w-xl mx-auto">
          Whether you came here through a song, a podcast episode, or a social media post, my
          prayer is that you encounter grace, truth, and transformation.
        </p>

        {/* Scripture Card */}
        <div
          className="max-w-xl mx-auto rounded-2xl px-8 py-10 text-left relative overflow-hidden"
          style={{
            background: '#FAF6EE',
            borderLeft: '4px solid #C9A227',
          }}
          role="blockquote"
          aria-label="Scripture that defines Hilda's ministry"
        >
          {/* Decorative quotation mark */}
          <span
            className="absolute top-3 right-6 text-gold/15 font-playfair text-8xl leading-none select-none"
            aria-hidden="true"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            "
          </span>

          <p className="text-gold text-xs font-inter font-semibold tracking-[0.2em] uppercase mb-3">
            Scripture that defines me
          </p>
          <p className="text-gold font-inter text-sm font-medium mb-4 tracking-wide">
            2 Corinthians 2:15
          </p>
          <p
            className="text-navy font-playfair text-xl sm:text-2xl font-medium italic leading-relaxed"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            "For we are to God the fragrance of Christ among those who are being saved and among
            those who are perishing."
          </p>
        </div>

      </div>
    </section>
  );
}
