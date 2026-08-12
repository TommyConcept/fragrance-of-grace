// pages/ShopPage.jsx
// Section: eBooks & Merch (Coming Soon)

import React, { useEffect } from 'react';
import Shop from '../components/Shop.jsx';

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'eBook & Merch | Fragrance of Grace – Hilda Akpala';
  }, []);

  return (
    <main>
      <Shop />
    </main>
  );
}
