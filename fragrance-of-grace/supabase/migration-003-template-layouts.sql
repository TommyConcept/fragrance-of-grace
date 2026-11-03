-- ============================================================
--  Migration 003 — saved template arrangements.
--
--  Lets the Design Studio remember how a template was arranged, per
--  template and per canvas size, so an adjustment only has to be made once.
--
--  Run once in the Supabase SQL Editor. Safe to re-run.
-- ============================================================

create table if not exists public.template_layouts (
  template_id text not null,
  size_id     text not null,
  layout      jsonb not null,
  updated_at  timestamptz not null default now(),
  primary key (template_id, size_id)
);

alter table public.template_layouts enable row level security;

drop policy if exists "public read template layouts"  on public.template_layouts;
drop policy if exists "admin write template layouts"  on public.template_layouts;

-- The studio sits behind the admin login, but reading is harmless and keeps
-- the policy shape consistent with every other table.
create policy "public read template layouts" on public.template_layouts
  for select using (true);
create policy "admin write template layouts" on public.template_layouts
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
