// components/Shop.jsx
// Coming soon section for eBooks and resources.
// Replace placeholder content once products and cover designs are ready.

import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import EmailSignupForm from './EmailSignupForm.jsx';

export default function Shop() {
  return (
    <section
      id="shop"
      className="py-14 md:py-20 lg:py-24"
      style={{ background: 'linear-gradient(160deg, #0B1B33 0%, #0f2444 60%, #1a2e50 100%)' }}
      aria-label="Resources Coming Soon"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-gold text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium opacity-80">
          Coming Soon
        </p>
        <h2
          className="font-playfair text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          eBooks & Merch
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-6 opacity-70" aria-hidden="true" />
        <p className="text-ivory/70 font-inter text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          New eBooks and merch are being prepared to help Beloved grow deeper in identity,
          purpose, and grace. Join the prayer list to be the first to know when they're available.
        </p>

        {/* Anticipation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 border border-gold/20 bg-white/5 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
              <BookOpen size={24} className="text-gold" aria-hidden="true" />
            </div>
            <h3
              className="font-playfair text-ivory text-lg font-semibold mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              eBook
            </h3>
            <p className="text-ivory/55 font-inter text-sm leading-relaxed">
              A written companion on identity, purpose, and grace, coming soon.
            </p>
          </div>

          <div className="rounded-2xl p-8 border border-gold/20 bg-white/5 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-gold" aria-hidden="true" />
            </div>
            <h3
              className="font-playfair text-ivory text-lg font-semibold mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Merch
            </h3>
            <p className="text-ivory/55 font-inter text-sm leading-relaxed">
              Fragrance of Grace apparel and faith-inspired items, coming soon.
            </p>
          </div>
        </div>

        {/* Email Signup */}
        <div
          className="rounded-2xl px-6 sm:px-10 py-10 border border-gold/20 max-w-xl mx-auto"
          style={{ background: 'rgba(250, 246, 238, 0.08)' }}
        >
          <h3
            className="font-playfair text-ivory text-xl sm:text-2xl font-semibold mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Be the first to know
          </h3>
          <p className="text-ivory/55 font-inter text-sm mb-7 leading-relaxed">
            Sign up to receive an update the moment these resources are released.
          </p>
          <EmailSignupForm theme="dark" />
        </div>

      </div>
    </section>
  );
}
