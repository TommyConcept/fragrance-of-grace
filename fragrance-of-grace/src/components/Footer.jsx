// components/Footer.jsx
// Logo file: public/images/logo.png — displayed on white background.

import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, MessageCircle, Headphones } from 'lucide-react';

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Ministry', to: '/ministry' },
  { label: 'Podcast',  to: '/podcast' },
  { label: 'Music',    to: '/music' },
  { label: 'eBook & Merch', to: '/shop' },
  { label: 'Connect',  to: '/connect' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/hildaakpalaworship/', icon: Instagram },
  { label: 'YouTube',   href: 'https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-', icon: Youtube },
  { label: 'WhatsApp',  href: 'https://wa.me/12403617229', icon: MessageCircle },
  { label: 'Spotify',   href: 'https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd', icon: Headphones },
];

export default function Footer() {
  return (
    <footer className="bg-sage border-t border-navy/10" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 mb-4 group"
              aria-label="Fragrance of Grace — Back to top"
            >
              <div className="bg-white rounded p-1.5 shadow border border-gold/20 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Fragrance of Grace logo"
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <span
                  className="text-navy font-playfair text-base font-medium block leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Fragrance of Grace
                </span>
                <span className="text-navy/50 text-xs font-inter tracking-widest uppercase">
                  Identity in Christ
                </span>
              </div>
            </Link>
            <p className="text-navy/70 font-inter text-sm leading-relaxed max-w-xs">
              Expressing the fragrance of Christ through sound, worship, and the word.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-gold text-xs font-inter font-semibold tracking-[0.2em] uppercase mb-5">
              Pages
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-navy/70 font-inter text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social column */}
          <div>
            <p className="text-gold text-xs font-inter font-semibold tracking-[0.2em] uppercase mb-5">
              Stay Connected
            </p>
            <div className="flex gap-3 mb-6" role="list" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-navy/15 flex items-center justify-center text-navy/60 hover:text-gold hover:border-gold/40 transition-all"
                    role="listitem"
                    aria-label={social.label}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <a
                href="https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy/70 font-inter text-xs hover:text-gold transition-colors"
              >
                <Youtube size={13} aria-hidden="true" />
                Fragrance Podcast on YouTube
              </a>
              <a
                href="https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy/70 font-inter text-xs hover:text-gold transition-colors"
              >
                <Headphones size={13} aria-hidden="true" />
                Fragrance Podcast on Spotify
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy/10 pt-7 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-navy/50 font-inter text-xs">
            &copy; 2026 Fragrance of Grace. All Rights Reserved.
          </p>
          <p className="text-navy/40 font-inter text-xs max-w-xl leading-relaxed">
            Music, podcast content, writings, and media on this site may not be reproduced
            without permission.
          </p>
        </div>

      </div>
    </footer>
  );
}
