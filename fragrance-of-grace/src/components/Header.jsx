// components/Header.jsx
// Logo file: public/images/logo.png
// The logo is displayed on a white background as provided.

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Videos', href: '#videos' },
  { label: 'Music', href: '#music' },
  { label: 'Connect', href: '#connect' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gold/10'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Brand Name */}
          {/* Logo file location: public/images/logo.png */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
            aria-label="Fragrance of Grace – Home"
          >
            {/* Logo displayed on white background — do not remove background */}
            <div className="bg-white rounded p-1 shadow-sm border border-gold/20">
              <img
                src="/images/logo.png"
                alt="Fragrance of Grace logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="font-playfair text-navy text-lg leading-tight block font-medium"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Fragrance of Grace
              </span>
              <span className="text-muted text-xs tracking-widest uppercase font-inter">
                Identity in Christ
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-navy/70 hover:text-gold text-sm font-inter font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#connect"
              onClick={(e) => { e.preventDefault(); handleNavClick('#connect'); }}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-navy text-ivory text-sm font-inter font-medium rounded tracking-wide hover:bg-gold hover:text-white transition-all duration-200 border border-transparent hover:border-gold"
            >
              Receive Prayers
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gold/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-navy font-inter font-medium py-3 px-2 border-b border-gray-100 hover:text-gold transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => { e.preventDefault(); handleNavClick('#connect'); }}
            className="mt-3 inline-flex justify-center items-center px-5 py-3 bg-navy text-ivory text-sm font-inter font-medium rounded tracking-wide hover:bg-gold transition-all duration-200"
          >
            Receive Prayers
          </a>
        </nav>
      </div>
    </header>
  );
}
