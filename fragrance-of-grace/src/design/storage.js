// design/storage.js
// Saved template arrangements: positions, sizes, colours and text as the
// owner last left them, per template and per canvas size.
//
// A saved arrangement replaces the built-in layout when the studio loads that
// template at that size, so an adjustment only has to be made once.

const TABLE = 'template_layouts';

async function client() {
  const { supabase, isSupabaseConfigured } = await import('../lib/supabase.js');
  return isSupabaseConfigured ? supabase : null;
}

/** The saved arrangement, or null if there is none. */
export async function loadSavedLayout(templateId, sizeId) {
  try {
    const supabase = await client();
    if (!supabase) return null;
    const { data, error } = await supabase
      .from(TABLE)
      .select('layout')
      .eq('template_id', templateId)
      .eq('size_id', sizeId)
      .maybeSingle();
    if (error || !data?.layout?.elements) return null;
    return data.layout;
  } catch {
    return null;
  }
}

/** Which sizes of a template already have a saved arrangement. */
export async function loadSavedSizes(templateId) {
  try {
    const supabase = await client();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from(TABLE)
      .select('size_id')
      .eq('template_id', templateId);
    if (error || !data) return [];
    return data.map((r) => r.size_id);
  } catch {
    return [];
  }
}

export async function saveLayout(templateId, sizeId, layout) {
  const supabase = await client();
  if (!supabase) return { error: 'Saving needs Supabase configured.' };
  const { error } = await supabase.from(TABLE).upsert(
    {
      template_id: templateId,
      size_id: sizeId,
      layout: { background: layout.background, elements: layout.elements },
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'template_id,size_id' }
  );
  return { error: error?.message ?? null };
}

/** Drops the saved arrangement so the built-in design comes back. */
export async function clearSavedLayout(templateId, sizeId) {
  const supabase = await client();
  if (!supabase) return { error: 'Supabase is not configured.' };
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq('template_id', templateId)
    .eq('size_id', sizeId);
  return { error: error?.message ?? null };
}
