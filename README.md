# Portfolio — Jason Gundayao

A single-page developer portfolio built with **React 19**, **Material UI 9** and **Vite**.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Where to edit things

| What | Where |
| --- | --- |
| All copy — name, headline, credentials, skills, projects, jobs | `src/data/profile.js` |
| Colours, fonts, spacing, component defaults | `src/theme.js` |
| Section layout | `src/components/*.jsx` |
| Brand icons for skill tags | `extract-icons.cjs` → `src/components/brandIcons.js` |

Everything the site *says* lives in `src/data/profile.js`, so copy edits never
mean going through components.

## Updating the live site

The site is published with GitHub Pages. Every push to `main` runs
`.github/workflows/deploy.yml`, which builds the site and deploys it — the
change is live about a minute later at

    https://jason050928.github.io/my-portfolio/

So updating the site is:

```bash
# edit src/data/profile.js (or drop a new CV into public/), then
git add -A
git commit -m "Update projects"
git push
```

Progress shows under the repository's **Actions** tab. If the very first run
fails on the Pages step, open **Settings → Pages** and set **Source** to
**GitHub Actions**, then re-run the workflow.

Things that live outside `profile.js`:

- **CV** — `public/Jason-Gundayao-CV.pdf`. Overwrite it to update the download.
- **Project screenshots** — `public/images/projects/`, see below.
- **Hero photo** — put an image in `public/images/` and set `profile.heroImage`.
- **Contact form endpoint** — add a repository secret named
  `VITE_CONTACT_ENDPOINT` (Settings → Secrets → Actions); the workflow passes
  it to the build.

The workflow works out the base path from the repository name, so renaming
the repo to `jason050928.github.io` would serve the site from the root URL
with no other change.

## Contact form

The form validates in the browser and then sends one of two ways:

- **With a form backend** — create a form at [Formspree](https://formspree.io)
  (or Basin, Web3Forms, …), copy `.env.example` to `.env`, and set
  `VITE_CONTACT_ENDPOINT` to your endpoint. Submissions POST as JSON and the
  visitor gets a success toast.
- **Without one** — the form falls back to opening the visitor's email client
  with the message pre-filled. This needs no setup and no server.

`.env` is gitignored, so your endpoint stays out of version control. Remember to
set `VITE_CONTACT_ENDPOINT` in your host's environment variables too (Vercel,
Netlify, etc.) — Vite inlines `VITE_*` values at build time.

## Notes

- **Theme** — nav, hero, contact and footer are always dark; the body follows
  the OS preference on first visit and remembers the visitor's toggle in
  `localStorage`.
- **Animations** — sections fade in on scroll via `IntersectionObserver`
  (`src/components/Reveal.jsx`). All of it is disabled under
  `prefers-reduced-motion`.
## Project screenshots

Each project card shows a real screenshot of that site's homepage, from
`public/images/projects/`. The screenshot and the title link out to the live
site; "Read case study" expands the full write-up.

Two of the five are captured. Three fall back to a branded placeholder (globe
icon + domain) because their `image` is left empty:

| Site | Status |
| --- | --- |
| averi.ai | captured |
| furniture.com | captured |
| trulia.com | **no capture** — "Press & Hold" bot wall for headless browsers |
| rentberry.com | **no capture** — Cloudflare blocks headless browsers |
| fentonand.co | **no capture** — never fires `load`; retry with `scripts/capture.mjs` |

### Capturing a screenshot

Screenshots are 1200×500 JPEGs — the top 600px of a 1440×900 viewport, scaled
down. That crop is deliberate: it cuts the cookie banners that sit lower on the
page. `scripts/capture.mjs` does the whole job over the Chrome DevTools
Protocol:

```bash
node scripts/capture.mjs https://example.com/ public/images/projects/NAME.jpg 12000
```

The third argument is how long to wait, in milliseconds, before the shot. It
waits a fixed time rather than for the `load` event, because some sites (Fenton
among them) never fire one and a plain `chrome --screenshot` hangs forever on
them.

Always open the result before committing it. Two things go wrong: sites that
animate their hero text in get caught mid-animation on a short wait (Averi
needs ~15s), and bot walls screenshot just as happily as real pages do. Capture
to a scratch path first if you are replacing an image you already like.

## Skill icons

The Skills section is four capability cards, each with a row of technology
tags. A tag gets its brand mark when one exists:

- `src/components/brandIcons.js` is **generated**, holding the official
  Simple Icons glyphs (CC0) for every tag that has one. Do not hand-edit it.
  To add a brand, put its Simple Icons key in `extract-icons.cjs` and re-run:

  ```bash
  node extract-icons.cjs src/components/brandIcons.js
  ```

  `simple-icons` is a devDependency, so this never ships to the browser — only
  the extracted paths do.

- Tags without a mark (REST APIs, CI/CD, Architecture, …) render as plain
  text chips. Nothing to configure.

Two marks need calling out:

| Mark | Why |
| --- | --- |
| AWS | Simple Icons dropped Amazon over trademark, so it is hand-drawn in `techIcons.jsx`. |
| Next.js | Its official mark is pure black, so `extract-icons.cjs` recolours it to a neutral slate that reads on both themes. |
