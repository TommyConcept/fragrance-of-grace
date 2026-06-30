// pages/PodcastPage.jsx
// Sections: Fragrance Podcast (full section with episode cards)

import React, { useEffect } from 'react';
import Podcast from '../components/Podcast.jsx';

export default function PodcastPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Podcast | Fragrance of Grace – Hilda Akpala';
  }, []);

  return (
    <main>
      <Podcast />
    </main>
  );
}
