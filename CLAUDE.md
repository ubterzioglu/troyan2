# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** · React 19 · TypeScript · Tailwind CSS v4. Path alias `@/` maps to `./src/`.

### Routing

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/projeler` | `src/app/projeler/page.tsx` |
| `/hakkimizda` | `src/app/hakkimizda/page.tsx` |
| `/iletisim` | `src/app/iletisim/page.tsx` |

`src/app/layout.tsx` wraps all pages with Google Fonts (`Playfair_Display` → `--font-playfair`, `DM_Sans` → `--font-dm-sans`), `Header`, and `Footer`.

### Components

- `src/components/Header.tsx` — **client component**: scroll detection (`isScrolled`), mobile hamburger menu, active route highlighting via `usePathname`.
- `src/components/Footer.tsx` — **server component**: brand, nav links, services list, contact info.

All page data (projects, team, milestones, stats) is **hardcoded directly in each page file** — no API, database, or CMS.

### Styling

Single stylesheet: `src/app/globals.css`.

**Tailwind v4** uses `@import "tailwindcss"` (not `@tailwind` directives); processed via `@tailwindcss/postcss`.

Colors and fonts are registered under `@theme inline {}` so they work as Tailwind utilities:
- `bg-cream` / `bg-cream-dark` / `bg-charcoal` / `bg-charcoal-light`
- `text-bronze` / `text-bronze-light` / `text-bronze-dark` / `text-concrete`
- `font-display` (Playfair) · `font-body` (DM Sans)

Reusable CSS classes defined in globals: `.btn-bronze`, `.btn-outline`, `.card-luxury`, `.section-title`, `.section-title-left`, `.video-overlay`, `.noise-overlay`, `.grid-lines`, `.animate-fadeInUp`, `.delay-100/200/300`.

### Key Constraints

- Contact form (`/iletisim`) is `'use client'` with simulated submission — no backend.
- Project filter buttons (`/projeler`) are UI-only (non-functional).
- `public/videos/` is gitignored — video assets are not in the repo.
- Hero section streams video from an external Pexels URL (placeholder).
- Real project images have not been added yet; placeholders use grid patterns + bronze accents.
- Real contact details: **+90 532 540 05 17**, address: Karacaören Mah., Karacaören Cad. No:16/1-3, 17000 Çanakkale Merkez.

## Skills / Guidelines

Read and apply these skill files for relevant tasks:

- [Frontend Design](.claude/skills/frontend-design/SKILL.md)
- [Web Design Best Practices](.claude/skills/web-design-guidelines/SKILL.md)
- [Next.js Best Practices](.claude/skills/next-best-practices/SKILL.md)
- [SEO Audit](.claude/skills/seo-audit/SKILL.md)
- [Next.js SEO](.claude/skills/nextjs-seo/SKILL.md)
- [Debugging](.claude/skills/systematic-debugging/SKILL.md)
- [Refactoring](.claude/skills/component-refactoring/SKILL.md)
- [Complex Algorithm](.claude/skills/maestro/SKILL.md)
- [Test Driven Development](.claude/skills/test-driven-development/SKILL.md)
