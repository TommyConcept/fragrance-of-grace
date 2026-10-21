-- ============================================================
--  Fragrance of Grace — admin database schema
--  Run this once in the Supabase SQL Editor.
--  Safe to re-run: it drops and recreates policies, and seeds
--  only when a table is still empty.
-- ============================================================

-- ─────────────────────────────────────────────
--  TABLES
-- ─────────────────────────────────────────────

create table if not exists public.podcast_episodes (
  id             uuid primary key default gen_random_uuid(),
  season         integer not null default 2,
  episode_number integer,
  season_label   text,
  title          text not null,
  description    text not null default '',
  label          text not null default 'Parenting',
  thumbnail_url  text,
  youtube_url    text,
  spotify_url    text,
  rumble_url     text,
  facebook_url   text,
  instagram_url  text,
  is_new         boolean not null default false,
  sort_order     integer not null default 0,
  created_at     timestamptz not null default now()
);

create table if not exists public.music_tracks (
  id               uuid primary key default gen_random_uuid(),
  title            text not null,
  description      text not null default '',
  album_art_url    text,
  youtube_url      text,
  youtube_embed    text,
  spotify_url      text,
  apple_music_url  text,
  sort_order       integer not null default 0,
  created_at       timestamptz not null default now()
);

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

-- Exactly four fixed slots. Rows are replaced in place, never added.
create table if not exists public.featured_videos (
  slot          integer primary key check (slot between 1 and 4),
  title         text not null,
  platform      text not null default 'YouTube',
  label         text not null default 'Teaching',
  description   text not null default '',
  thumbnail_url text,
  link          text,
  updated_at    timestamptz not null default now()
);

-- ─────────────────────────────────────────────
--  ROW LEVEL SECURITY
--  Everyone may read (the public website).
--  Only a signed-in admin may write.
-- ─────────────────────────────────────────────

alter table public.podcast_episodes enable row level security;
alter table public.music_tracks     enable row level security;
alter table public.featured_videos  enable row level security;
alter table public.reels            enable row level security;

drop policy if exists "public read episodes"  on public.podcast_episodes;
drop policy if exists "admin write episodes"   on public.podcast_episodes;
drop policy if exists "public read music"      on public.music_tracks;
drop policy if exists "admin write music"      on public.music_tracks;
drop policy if exists "public read featured"   on public.featured_videos;
drop policy if exists "admin write featured"   on public.featured_videos;
drop policy if exists "public read reels"      on public.reels;
drop policy if exists "admin write reels"      on public.reels;

create policy "public read episodes" on public.podcast_episodes
  for select using (true);
create policy "admin write episodes" on public.podcast_episodes
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "public read music" on public.music_tracks
  for select using (true);
create policy "admin write music" on public.music_tracks
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "public read featured" on public.featured_videos
  for select using (true);
create policy "admin write featured" on public.featured_videos
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "public read reels" on public.reels
  for select using (true);
create policy "admin write reels" on public.reels
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────
--  STORAGE  (thumbnails and album art)
-- ─────────────────────────────────────────────

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "public read media"   on storage.objects;
drop policy if exists "admin upload media"  on storage.objects;
drop policy if exists "admin update media"  on storage.objects;
drop policy if exists "admin delete media"  on storage.objects;

create policy "public read media" on storage.objects
  for select using (bucket_id = 'media');
create policy "admin upload media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "admin update media" on storage.objects
  for update using (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "admin delete media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');

-- ─────────────────────────────────────────────
--  SEED — the site's current content.
--  Only runs while a table is still empty, so re-running
--  this file will never overwrite your later edits.
-- ─────────────────────────────────────────────

insert into public.podcast_episodes
  (season, episode_number, season_label, title, description, label, thumbnail_url, youtube_url, spotify_url, rumble_url, is_new, sort_order)
select * from (values
  (2, 1, 'Season 2 · Episode 1', 'Parenting Begins Before Birth',
   'Before you knew your child, God knew them. Before you loved them, He loved them. A powerful conversation on partnering with God through prayer as you raise the next generation.',
   'Parenting', '/images/s2-ep1.jpg', 'https://youtu.be/JN0DozxARoU',
   'https://open.spotify.com/episode/3eNEp0VQvQaIBelHo70bw5?si=FVDFf1ZlQWW899z7FttxNg',
   'https://rumble.com/v7cxybo-parenting-begins-before-birth.html', false, 10),
  (2, 2, 'Season 2 · Episode 2', 'Shaping Souls',
   'You''re not just raising children — you''re shaping souls. This episode encourages you to parent with faith, grace, and purpose as you trust God with your family''s future.',
   'Parenting', '/images/s2-ep2.jpg', 'https://youtu.be/THSnIWUx5oU',
   'https://open.spotify.com/episode/1qjb9ab4Nk661jZBL4ZfoY?si=hvCzzDd1Q9e96fqWjdBrSA',
   null, false, 20),
  (2, 5, 'Season 2 · Episode 5', 'When They Leave Home',
   'When your children grow up and no longer need your permission, letting go can feel like losing a piece of your heart. Authority becomes influence, correction becomes conversation, and control becomes trust — your assignment has changed, but your calling has not.',
   'Parenting', '/images/s2-ep5.jpg', 'https://youtu.be/sroxlPS1DU0',
   'https://open.spotify.com/episode/7efJdFFpjo9LTvV0Iq4xaw?si=FgbqgU1EQk618svaBf0keQ',
   null, true, 50),
  (2, 6, 'Season 2 · Episode 6', 'When Your Child Walks Away From God',
   'A parent''s hope for the season when the child you raised to love God begins to walk away from their faith. The seeds you planted are not forgotten, and God is not finished writing their story.',
   'Parenting', '/images/s2-ep6.jpg', 'https://youtu.be/61I1uW0Mjrs',
   'https://open.spotify.com/episode/7GGHMbyGq4nydT7pDgm40N?si=8h2EfL5kSZWB3kmO_u7p2w',
   null, true, 60),
  (1, 1, 'Season 1 · Episode 1', 'Episode 1',
   'A Christ-centered conversation on identity, purpose, and the revelation of grace.',
   'Identity', null, null,
   'https://open.spotify.com/episode/0dO0HJtGZSVoTZbnmjBF59?si=4228b396504b402c', null, false, 110),
  (1, 2, 'Season 1 · Episode 2', 'Episode 2',
   'Walking in the fullness of who God has called you to be, grace for every season.',
   'Purpose', null, null,
   'https://open.spotify.com/episode/0w2OMxjWDVvAoZVWdv8bec?si=316fe1c498834c7f', null, false, 120),
  (1, 3, 'Season 1 · Episode 3', 'Episode 3',
   'Carrying the fragrance of Christ, spiritual growth and the life of a believer.',
   'Growth', null, null,
   'https://open.spotify.com/episode/3pANyTOs1USa598kNZw5VL?si=36f9b2ed64a04731', null, false, 130)
) as seed
where not exists (select 1 from public.podcast_episodes);

insert into public.music_tracks
  (title, description, album_art_url, youtube_url, youtube_embed, spotify_url, apple_music_url, sort_order)
select * from (values
  ('Your Will Be Done',
   'A song of surrender, trust, and alignment with the heart of God. Released December 2025.',
   '/images/album-your-will-be-done.jpg',
   'https://youtu.be/Fp5mSEHjX5A?si=mtXuGdfk_eUjYJAs',
   'https://www.youtube.com/embed/Fp5mSEHjX5A',
   'https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd', '', 10),
  ('You Alone Are Worthy',
   'A worship anthem of praise, declaring that God alone is worthy of all honor and glory.',
   '/images/album-you-alone-are-worthy.jpg',
   'https://youtu.be/HoYtJo-oT6g?si=ZnZr1p7CzVwwBDbR',
   'https://www.youtube.com/embed/HoYtJo-oT6g',
   'https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd', '', 20),
  ('Sovereign God',
   'A declaration of God''s sovereignty over all creation, faith, and surrender to His will.',
   '/images/album-sovereign-god.jpg',
   'https://youtu.be/62yRaMMUSto?si=rnZ58TKXHfRLP8ie',
   'https://www.youtube.com/embed/62yRaMMUSto',
   'https://open.spotify.com/show/1MFgsxMOUVJZL2mhWwDouM?si=d68e3869453e43bd', '', 30)
) as seed
where not exists (select 1 from public.music_tracks);

insert into public.featured_videos (slot, title, platform, label, description, thumbnail_url, link)
select * from (values
  (1, 'Walking Confidently In God''s Plan', 'YouTube', 'Teaching',
   'A Christ-centered message helping Beloved walk confidently in God''s plan and calling, Fragrance Podcast Episode 10.',
   '/images/video-thumbnail-1.jpg', 'https://youtu.be/KkIMFPQ9fMg?si=AxxSfcfTPKODR-Pc'),
  (2, 'Learning To Recognize God''s Voice', 'YouTube', 'Teaching',
   'A message on tuning in to God''s voice and walking step by step in His direction, Fragrance Podcast Episode 9.',
   '/images/video-thumbnail-2.jpg', 'https://youtu.be/1AJ8nPNagLk?si=LB0rtk1t2he-o59e'),
  (3, 'Trusting God in the Middle of the Process', 'YouTube', 'Teaching',
   'A message on holding on to faith and trust in God even while you''re still in the process, Fragrance Podcast Episode 5.',
   '/images/video-thumbnail-3.jpg', 'https://youtu.be/IP_AqEDMPKk?si=9Vl5rYtjxUk6W9pp'),
  (4, 'More Message on Instagram for you', 'Instagram', 'Reflection',
   'A featured ministry reflection for the Fragrance of Grace community.',
   '/images/video-thumbnail-4.jpg', 'https://www.instagram.com/hildaakpalaworship/')
) as seed
where not exists (select 1 from public.featured_videos);

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
