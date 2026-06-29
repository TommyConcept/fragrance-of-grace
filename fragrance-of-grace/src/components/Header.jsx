// components/Header.jsx
// 5-page navigation using React Router NavLink.
// Logo file: public/images/logo.png — displayed on white background.

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Ministry', to: '/ministry' },
  { label: 'Podcast',  to: '/podcast' },
  { label: 'Music',    to: '/music' },
  { label: 'Connect',  to: '/connect' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-inter font-medium tracking-wide transition-colors duration-200 pb-0.5 ${
      isActive
        ? 'text-gold border-b-2 border-gold'
        : 'text-navy/70 hover:text-gold border-b-2 border-transparent'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `font-inter font-medium py-3 px-2 border-b border-gray-100 transition-colors text-base block ${
      isActive ? 'text-gold' : 'text-navy hover:text-gold'
    }`;

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
          <NavLink
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Fragrance of Grace — Home"
          >
            <div className="bg-white rounded p-1 shadow-sm border border-gold/20">
              <img
                src="/images/logo.png"
                alt="Fragrance of Grace logo"
                className="h-12 w-12 object-contain"
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
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/connect"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-navy text-ivory text-sm font-inter font-medium rounded tracking-wide hover:bg-gold hover:text-white transition-all duration-200"
            >
              Receive Prayers
            </NavLink>

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
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={mobileLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/connect"
            className="mt-3 inline-flex justify-center items-center px-5 py-3 bg-navy text-ivory text-sm font-inter font-medium rounded tracking-wide hover:bg-gold transition-all duration-200"
          >
            Receive Prayers
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
