// lib/useContent.js
// Renders bundled content immediately, then quietly swaps in whatever the
// admin has saved in Supabase. No spinner and no layout shift: visitors always
// see real content on first paint, even on a slow connection.
//
// The Supabase client is imported dynamically so it never sits in the critical
// bundle — the page is already readable before it loads.

import { useEffect, useState } from 'react';

export function useContent({ table, fallback, mapRow, orderBy = 'sort_order' }) {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const { supabase, isSupabaseConfigured } = await import('./supabase.js');
        if (cancelled || !isSupabaseConfigured) return;

        const { data, error } = await supabase
          .from(table)
          .select('*')
          .order(orderBy, { ascending: true });

        // Keep the bundled content on any error or empty table, so a Supabase
        // outage degrades to the last deployed content instead of a blank page.
        if (cancelled || error || !data || data.length === 0) return;
        setItems(data.map(mapRow));
      } catch {
        // Offline, blocked, or misconfigured — the bundled content stands.
      }
    })();

    return () => { cancelled = true; };
  }, [table, orderBy]);

  return items;
}
