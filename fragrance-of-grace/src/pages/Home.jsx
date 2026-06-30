// pages/Home.jsx
// Sections: Hero, About (includes Mission strip)

import React, { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Home | Fragrance of Grace – Hilda Akpala';
  }, []);

  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
