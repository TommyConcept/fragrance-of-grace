// pages/Ministry.jsx
// Sections: Story (My Journey), Featured Videos, Reels

import React, { useEffect } from 'react';
import Story from '../components/Story.jsx';
import FeaturedVideos from '../components/FeaturedVideos.jsx';
import Reels from '../components/Reels.jsx';

export default function Ministry() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Ministry | Fragrance of Grace – Hilda Akpala';
  }, []);

  return (
    <main>
      <Story />
      <FeaturedVideos />
      <Reels />
    </main>
  );
}
