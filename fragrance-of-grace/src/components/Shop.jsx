// components/Shop.jsx
// Coming soon section for eBooks and merch.
// Replace placeholder content once products and cover designs are ready.

import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import EmailSignupForm from './EmailSignupForm.jsx';

export default function Shop() {
  return (
    <section
      id="shop"
      className="py-14 md:py-20 lg:py-24 bg-sage"
      aria-label="eBooks and Merch Coming Soon"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-navy/60 text-xs font-inter tracking-[0.25em] uppercase mb-4 font-medium">
          Coming Soon
        </p>
        <h2
          className="font-playfair text-navy text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          eBooks & Merch
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-6 opacity-70" aria-hidden="true" />
        <p className="text-navy/75 font-inter text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          New eBooks and merch are being prepared to help Beloved grow deeper in identity,
          purpose, and grace. Join the prayer list to be the first to know when they're available.
        </p>

        {/* Anticipation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 border border-navy/10 bg-white/50 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-white/60 border border-navy/10 flex items-center justify-center mb-4">
              <BookOpen size={24} className="text-navy" aria-hidden="true" />
            </div>
            <h3
              className="font-playfair text-navy text-lg font-semibold mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              eBook
            </h3>
            <p className="text-navy/70 font-inter text-sm leading-relaxed">
              A written companion on identity, purpose, and grace, coming soon.
            </p>
          </div>

          <div className="rounded-2xl p-8 border border-navy/10 bg-white/50 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-white/60 border border-navy/10 flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-navy" aria-hidden="true" />
            </div>
            <h3
              className="font-playfair text-navy text-lg font-semibold mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Merch
            </h3>
            <p className="text-navy/70 font-inter text-sm leading-relaxed">
              Fragrance of Grace apparel and faith-inspired items, coming soon.
            </p>
          </div>
        </div>

        {/* Email Signup */}
        <div
          className="rounded-2xl px-6 sm:px-10 py-10 border border-navy/10 bg-white/60 max-w-xl mx-auto"
        >
          <h3
            className="font-playfair text-navy text-xl sm:text-2xl font-semibold mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Be the first to know
          </h3>
          <p className="text-navy/70 font-inter text-sm mb-7 leading-relaxed">
            Sign up to receive an update the moment these resources are released.
          </p>
          <EmailSignupForm theme="light" />
        </div>

      </div>
    </section>
  );
}
