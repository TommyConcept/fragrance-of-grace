// components/Community.jsx
// Invite Beloved to join the community via Instagram and WhatsApp.
//
// ─── UPDATE LINKS ───────────────────────────────────────────────────────────
// Replace the placeholder hrefs below once the real links are available:
//   - Instagram Community link
//   - WhatsApp Channel link
// ──────────────────────────────────────────────────────────────────────────

import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

// Placeholder links — replace with real Instagram community and WhatsApp channel links
const INSTAGRAM_COMMUNITY_LINK = "https://www.instagram.com/hildaakpalaworship/";
const WHATSAPP_CHANNEL_LINK = "https://whatsapp.com/channel/0029Vb7oT5U1SWt6rUaBTk3r";

export default function Community() {
  return (
    <section
      id="community"
      className="bg-ivory pt-14 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12"
      aria-label="Join the Fragrance of Grace Community"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
          Community
        </p>
        <h2
          className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Join the Community
        </h2>
        <div className="section-divider" aria-hidden="true" />
        <p className="text-muted font-inter text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Connect with other Beloved walking in identity, purpose, and grace, daily
          encouragement, prayers, and reflections delivered straight to where you already are.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={INSTAGRAM_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-navy/15 bg-white text-navy font-inter font-medium text-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent hover:text-white transition-all duration-200"
            aria-label="Join the Instagram community"
          >
            <Instagram size={18} aria-hidden="true" />
            Join Instagram Community
          </a>
          <a
            href={WHATSAPP_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-navy/15 bg-white text-navy font-inter font-medium text-sm hover:bg-[#25D366] hover:border-transparent hover:text-white transition-all duration-200"
            aria-label="Join the WhatsApp channel"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Join WhatsApp Channel
          </a>
        </div>

      </div>
    </section>
  );
}
