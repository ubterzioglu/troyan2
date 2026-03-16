# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** with TypeScript and Tailwind CSS v4. Path alias `@/` maps to `./src/`.

### Routing

File-based routing under `src/app/`:

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/projeler` | `src/app/projeler/page.tsx` |
| `/hakkimizda` | `src/app/hakkimizda/page.tsx` |
| `/iletisim` | `src/app/iletisim/page.tsx` |

`src/app/layout.tsx` is the root layout — it wraps all pages with the Google Fonts setup, `Header`, and `Footer`.

### Components

Only two shared components: `src/components/Header.tsx` (client component — scroll detection, mobile menu) and `src/components/Footer.tsx` (server component).

All page data is hardcoded directly in the page files — there is no API layer, database, or CMS.

### Styling

`src/app/globals.css` is the single stylesheet. It defines:
- CSS variables for the **Industrial Luxury** color palette: cream `#f8f6f1`, charcoal `#1a1a1a`, bronze `#b87333`, concrete `#8a8a8a`
- CSS font variables for Playfair Display (headings) and DM Sans (body)
- Reusable component classes: `.btn-bronze`, `.btn-outline`, `.card-luxury`, `.section-title`
- Visual effects: `.video-overlay`, `.noise-overlay`, `.grid-overlay`, `.fade-in-up`

Tailwind v4 uses `@import "tailwindcss"` (not `@tailwind` directives) and is processed via `@tailwindcss/postcss`.

### Key Constraints

- The contact form in `/iletisim` is client-side only (`'use client'`) with no backend integration — form submission is simulated.
- Project filter buttons in `/projeler` are UI-only (non-functional).
- Public video assets are gitignored (`public/videos/`).
