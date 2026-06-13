// components/About.jsx
// Images used: public/images/hilda-1.jpg, public/images/hilda-2.jpg

import React from 'react';
import { Mic, Music, BookOpen } from 'lucide-react';

const missionCards = [
  {
    icon: Mic,
    title: 'The Fragrance Podcast',
    description:
      'Teachings and conversations about identity, purpose, grace, and spiritual growth, helping believers understand who they are in Christ.',
  },
  {
    icon: Music,
    title: 'Worship & Music',
    description:
      'Songs that express worship, faith, surrender, and personal encounters with God, sound that carries His presence.',
  },
  {
    icon: BookOpen,
    title: 'Messages & Reflections',
    description:
      'Christ-centered encouragement for believers learning to walk boldly in grace and into all God has called them to become.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-ivory py-14 md:py-20 lg:py-24"
      aria-label="About Hilda Akpala and Fragrance of Grace"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section intro */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
            About
          </p>
          <h2
            className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Welcome to Fragrance of Grace
          </h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        {/* Two-column: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Images collage */}
          <div className="relative flex justify-center">
            {/* Primary image */}
            {/* Image: public/images/hilda-about.jpg */}
            <div className="relative z-10 w-64 sm:w-72 md:w-80">
              <img
                src="/images/hilda-about.jpg"
                alt="Hilda Akpala, recording artist and host of the Fragrance Podcast"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
              {/* Gold accent border */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold/30 -z-10"
                aria-hidden="true"
              />
            </div>

            {/* Scripture pill */}
            <div
              className="absolute bottom-0 right-0 sm:-right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gold/20 max-w-48 z-20 hidden sm:block"
              aria-hidden="true"
            >
              <p className="text-gold text-xs font-inter font-medium tracking-wide uppercase mb-1">
                2 Cor. 2:15
              </p>
              <p className="text-navy text-xs font-inter italic leading-snug">
                "We are to God the fragrance of Christ..."
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-navy font-inter text-base sm:text-lg leading-relaxed">
              Welcome to Fragrance of Grace.
            </p>
            <p className="text-navy font-inter text-base sm:text-lg leading-relaxed">
              I am Hilda Akpala, a Christian recording artist, worshipper, and the host of the
              Fragrance Podcast. My life and calling are centered on one message, expressing the
              identity of Christ through songs, worship, and the revelation of His grace.
            </p>
            <p className="text-navy font-inter text-base sm:text-lg leading-relaxed">
              Fragrance is more than a concept to me - It is a spiritual expression. As fragrance
              fills a room without being seen, I believe the life of believers carry the presence
              of God wherever they go. Through music, teaching, and lessons of life, I share
              messages that point people back to their identity in Christ.
            </p>
            <p className="text-navy font-inter text-base sm:text-lg leading-relaxed">
              This platform brings together everything I do:
            </p>
            <p className="text-navy font-inter text-base sm:text-lg leading-relaxed">
              The Podcast, the music, and daily reels that encourage believers to walk boldly in
              grace.
            </p>

            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="self-start inline-flex items-center gap-2 text-gold font-inter font-medium text-sm border-b border-gold/40 pb-0.5 hover:border-gold hover:gap-3 transition-all duration-200 mt-2"
            >
              Read my story
              <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {missionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gold/10 hover:shadow-md hover:border-gold/25 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mb-5 border border-gold/20 group-hover:bg-gold/10 transition-colors">
                  <Icon size={20} className="text-gold" aria-hidden="true" />
                </div>
                <h3
                  className="font-playfair text-navy text-lg font-semibold mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-muted font-inter text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Mission statement + scripture strip — compact, merged from Mission section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-navy rounded-2xl p-8 md:p-12">
          <div>
            <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-3 font-medium opacity-80">
              My Mission
            </p>
            <p className="text-ivory/85 font-inter text-base sm:text-lg leading-relaxed">
              To help people understand who they are in Christ and to carry His presence like a
              fragrance into every space they enter.
            </p>
          </div>
          <div
            className="rounded-xl px-6 py-6 text-left"
            style={{ background: '#FAF6EE', borderLeft: '4px solid #C9A227' }}
            role="blockquote"
            aria-label="Scripture that defines Hilda's ministry"
          >
            <p className="text-gold text-xs font-inter font-semibold tracking-[0.2em] uppercase mb-2">
              2 Corinthians 2:15
            </p>
            <p
              className="text-navy font-playfair text-base sm:text-lg font-medium italic leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              "For we are to God the fragrance of Christ among those who are being saved and among
              those who are perishing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
