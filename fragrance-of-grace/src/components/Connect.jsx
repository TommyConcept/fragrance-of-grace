// components/Connect.jsx

import React from 'react';
import { Youtube, Instagram, MessageCircle, Headphones } from 'lucide-react';
import EmailSignupForm from './EmailSignupForm.jsx';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hildaakpalaworship/',
    icon: Instagram,
    color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent hover:text-white',
    textColor: 'text-purple-600',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/playlist?list=PL3SqgwWGnc4gU6Kw3FfP32AF9TgqgJn5-',
    icon: Youtube,
    color: 'hover:bg-red-600 hover:border-transparent hover:text-white',
    textColor: 'text-red-600',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/12403617229',
    icon: MessageCircle,
    color: 'hover:bg-[#25D366] hover:border-transparent hover:text-white',
    textColor: 'text-green-600',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd',
    icon: Headphones,
    color: 'hover:bg-[#1DB954] hover:border-transparent hover:text-white',
    textColor: 'text-[#1DB954]',
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-14 md:py-20 lg:py-24"
      style={{ background: 'linear-gradient(160deg, #0B1B33 0%, #0f2444 60%, #1a2e50 100%)' }}
      aria-label="Stay Connected with Fragrance of Grace"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Header */}
        <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium opacity-80">
          Community
        </p>
        <h2
          className="font-playfair text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Stay Connected, Beloved
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-6 opacity-70" aria-hidden="true" />
        <p className="text-ivory/70 font-inter text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Follow Fragrance of Grace for Christ-centered messages, podcast episodes, worship,
          prayers, and reflections that point you back to your identity in Christ.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-14" role="list" aria-label="Social media links">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 text-ivory bg-white/5 font-inter text-sm font-medium transition-all duration-200 ${social.color}`}
                role="listitem"
                aria-label={`Follow Hilda Akpala on ${social.label}`}
              >
                <Icon size={16} aria-hidden="true" />
                {social.label}
              </a>
            );
          })}
        </div>

        {/* Email Signup */}
        <div
          className="rounded-2xl px-6 sm:px-10 py-10 border border-gold/20"
          style={{ background: 'rgba(250, 246, 238, 0.08)', border: '1px solid rgba(201,162,39,0.2)' }}
        >
          <h3
            className="font-playfair text-ivory text-2xl sm:text-3xl font-semibold mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Receive prayers + messages in your inbox
          </h3>
          <p className="text-ivory/55 font-inter text-sm mb-7 leading-relaxed">
            Join the Fragrance of Grace prayer list, Christ-centered devotionals, reflections,
            and personal words straight to your inbox.
          </p>
          <EmailSignupForm theme="dark" />
        </div>

      </div>
    </section>
  );
}
