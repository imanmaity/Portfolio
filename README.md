# Portfolio

A Next.js portfolio. Deploys to Vercel with no terminal needed.

## Put it online (one time, ~5 min)
1. Create a new **empty** repo on GitHub (e.g. `portfolio`). Don't add a README.
2. In the repo: **Add file → Upload files**, then drag in *everything from this
   folder* (the `app/` folder, `public/` if present, and all the loose files like
   `package.json`). Commit.
3. Go to **vercel.com → Add New → Project → Import** your repo → **Deploy**.
   Vercel detects Next.js automatically — no settings to change.
4. You get a live URL. Done.

## Change anything later (no terminal)
Edit a file in GitHub's web UI → **Commit**. Vercel rebuilds and redeploys in
~30 seconds. Look for the lines marked `EDIT ME`.

## Where things live
- `app/page.js` — the hero content (name, tagline, bio, links).
- `app/globals.css` — all the styling. The `:root` block at the top holds the
  colours and fonts; change one value, the whole page re-skins.
- `app/layout.js` — the browser-tab title and link-preview text.
