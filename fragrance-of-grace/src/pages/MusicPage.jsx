// pages/MusicPage.jsx
// Sections: Worship & Music (all songs + streaming platforms)

import React, { useEffect } from 'react';
import Music from '../components/Music.jsx';

export default function MusicPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Music | Fragrance of Grace – Hilda Akpala';
  }, []);

  return (
    <main>
      <Music />
    </main>
  );
}
