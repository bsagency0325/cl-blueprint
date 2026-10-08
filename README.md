# Blueprint Strategies — website

Marketing site for Blueprint Strategies, built with [Astro](https://astro.build) and deployed on Netlify.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Structure

- `src/i18n/home.ts` — all home page copy, English and Spanish
- `src/components/Home.astro` — home page sections
- `src/pages/` — routes (`/`, `/es/`, legal pages, SMS opt-in, thank-you pages)
- `src/styles/global.css` — brand tokens (colors, fonts)
- `public/brand/` — logo files
- `netlify.toml` — build settings and redirects

## Branches

- `master` — live site
- `rebrand-2026` — 2026 rebrand (Astro)
- `archive/developer-2025` — original React site, kept for reference
