-- ============================================================
--  Migration 002 — Facebook/Instagram links on episodes, and
--  a reels table the admin can manage.
--
--  Run this once in the Supabase SQL Editor if you already ran
--  schema.sql. Safe to re-run: nothing is dropped or overwritten.
--  (A fresh install from schema.sql already includes all of this.)
-- ============================================================

-- ─── Episodes: two more places to share an episode ───
alter table public.podcast_episodes add column if not exists facebook_url  text;
alter table public.podcast_episodes add column if not exists instagram_url text;

-- ─── Reels ───
create table if not exists public.reels (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  description   text not null default '',
  thumbnail_url text,
  link          text,
  platform      text not null default 'YouTube',
  sort_order    integer not null default 0,
  created_at    timestamptz not null default now()
);

alter table public.reels enable row level security;

drop policy if exists "public read reels" on public.reels;
drop policy if exists "admin write reels" on public.reels;

create policy "public read reels" on public.reels
  for select using (true);
create policy "admin write reels" on public.reels
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Seed with the reels currently on the site, only while the table is empty.
insert into public.reels (title, description, thumbnail_url, link, platform, sort_order)
select * from (values
  ('You Do Not Need To Be Perfect',
   'God isn''t waiting for you to become perfect before He uses you.',
   '/images/reel-1.jpg',
   'https://youtube.com/shorts/nH0i9KdqZgw?si=xo4APbIrsv5Qz0ZI', 'YouTube', 10),
  ('God Can Redirect Your Path!',
   'Even if you''ve made mistakes, God can still redirect your path.',
   '/images/reel-2.jpg',
   'https://youtube.com/shorts/I-9tJz2owzo?si=jE_H8f7Nb17X5YNm', 'YouTube', 20),
  ('Walk By Faith, Not Fear!',
   'Fear will always ask ''what if'' — choose to walk by faith instead.',
   '/images/reel-3.jpg',
   'https://youtube.com/shorts/zI0eKhvAjKw?si=32Ogdl7EpxPAdP75', 'YouTube', 30)
) as seed
where not exists (select 1 from public.reels);
