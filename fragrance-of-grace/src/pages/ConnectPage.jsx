// pages/ConnectPage.jsx
// Sections: Community (Join), Stay Connected, Email Signup

import React, { useEffect } from 'react';
import Community from '../components/Community.jsx';
import Connect from '../components/Connect.jsx';

export default function ConnectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Connect | Fragrance of Grace – Hilda Akpala';
  }, []);

  return (
    <main>
      <Community />
      <Connect />
    </main>
  );
}
