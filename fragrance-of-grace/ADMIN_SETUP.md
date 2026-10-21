# Fragrance of Grace — Admin Setup

A one-time setup, about 15 minutes. After this you manage podcast episodes,
music releases and the four featured videos yourself at
**https://www.fragranceofgrace.com/admin** — no code, no redeploy.

Everything below is free at this site's size.

---

## 1. Create the Supabase project

1. Go to **https://supabase.com** and sign up (the free plan is enough).
2. Click **New project**.
   - Name: `fragrance-of-grace`
   - Database password: choose a strong one and save it somewhere safe.
     This is *not* your admin password — you will rarely need it.
   - Region: pick the one closest to most of your audience.
3. Wait for the project to finish setting up (a minute or two).

## 2. Create the database tables

1. In the left sidebar click **SQL Editor** → **New query**.
2. Open `supabase/schema.sql` from this repository, copy the whole file,
   and paste it into the editor.
3. Click **Run**.

This creates the three tables, locks them down so only you can edit,
creates the image storage bucket, and fills them with the content that is
on the site today. Re-running it later is safe — it never overwrites your edits.

## 3. Create your admin login

1. Sidebar → **Authentication** → **Users** → **Add user** → **Create new user**.
2. Email: your real email address (used for password resets).
3. Password: the password you will type at `/admin`. Make it a strong one.
4. Tick **Auto Confirm User**, then create.

This is the only account. There is no sign-up page on the site, so nobody
else can create one.

## 4. Collect your two keys

Sidebar → **Project Settings** → **API**. You need:

- **Project URL** — looks like `https://abcdefgh.supabase.co`
- **anon public** key — a long string under "Project API keys"

The anon key is *designed* to be public and is safe in the browser. What
protects your content is step 2, which allows anyone to read but only a
signed-in admin to write.

> Never use the **service_role** key here. That one bypasses all security.

## 5. Add the settings in Vercel

Vercel → your project → **Settings** → **Environment Variables**. Add four,
for all environments (Production, Preview, Development):

| Name | Value |
|---|---|
| `VITE_SUPABASE_URL` | your Project URL from step 4 |
| `VITE_SUPABASE_ANON_KEY` | your anon public key from step 4 |
| `VITE_ADMIN_USERNAME` | `Fragranceofgrace` |
| `VITE_ADMIN_EMAIL` | the email you used in step 3 |
| `VITE_ADMIN_PASSWORD` | *optional* — see "Signing in with just a username" below |

Then **Deployments** → latest → **Redeploy**. Vite reads these at build
time, so a redeploy is required for them to take effect.

## 6. Log in

Go to **https://www.fragranceofgrace.com/admin**, enter the username
`Fragranceofgrace` and your password from step 3.

---

## Using it

Three tabs:

- **Podcast** — add a new episode, edit or remove an existing one. Upload the
  thumbnail, paste the YouTube and Spotify links, tick "Out Now" for the
  newest. "Order on page" controls position; lower numbers come first.
- **Music** — same idea for worship releases. The YouTube embed is worked out
  from the link automatically. Leave Spotify blank to show "coming soon".
- **Featured Videos** — the four slots on the Ministry page. Replace any one in
  place. There is no add or delete, because that grid is built for exactly four.

Changes are live the moment you hit save. No redeploy, no waiting.

## Signing in with just a username

By default you type a username and a password. If you would rather sign in with
the username alone, set `VITE_ADMIN_PASSWORD` in Vercel to your admin password
and redeploy. The password box then disappears.

**Know what this costs.** That password is built into the JavaScript every
visitor downloads. Anyone who goes looking through it can recover it and sign in
as you, edit your episodes, or delete them. It is a convenience setting, not a
secure one.

Two things make it less risky:

- Use a password that is used for nothing else, so recovering it gives away
  nothing but this admin area.
- Saving still requires a real signed-in session, so an automated scan cannot
  write to your content without first extracting that password.

To undo it at any time, delete the `VITE_ADMIN_PASSWORD` variable in Vercel and
redeploy. The password box comes back and nothing else changes.

## Good to know

- **The site never breaks if Supabase is down.** Every page ships with the last
  deployed content built in and shows that first, then swaps in your saved
  content when it loads. A Supabase outage means visitors see slightly older
  content, never an error.
- **Images** go to the `media` bucket. Upload landscape 16:9 (1280×720 is ideal),
  under 5MB.
- **Running locally**: copy `.env.example` to `.env.local` and fill in the same
  four values.

## If something goes wrong

- *"The admin area is not configured yet"* — the env vars are missing, or you
  added them but have not redeployed. Redeploy.
- *"That username and password do not match"* — check the username is exactly
  `Fragranceofgrace`, and that `VITE_ADMIN_EMAIL` matches the user you created
  in step 3 exactly.
- *Saving fails with a permissions error* — step 2 did not finish. Re-run
  `supabase/schema.sql`.
- *Edits save but the site looks unchanged* — hard-refresh. Your browser caches
  images aggressively (`vercel.json` sets a one-year cache on `/images/`), but
  uploaded images get fresh URLs so new visitors always see the latest.
