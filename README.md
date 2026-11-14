# sigfridcouto.com: Astro

Personal site for Sigfrid Couto Fernández, available in 5 languages (EN, DE, FR, ES, CA).

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
npm run og       # regenerate public/og.jpg (social preview image)
```

Requires Node ≥ 22.12 (Astro 6). Astro 7 needs Node ≥ 22.23.

## Structure

- `src/i18n/config.ts`: supported locales (single source, also used by `astro.config.mjs`)
- `src/i18n/*.ts`: all copy, one file per language (`en.ts` defines the type the others must match). `{years}` is replaced at build time with the years since `site.careerStart`
- `src/pages/[lang]/index.astro`, `about.astro`: pages generated for each language
- `src/pages/index.astro`: redirects to the browser's language (falls back to `/en/`); a host-level redirect is preferable if available
- `src/pages/404.astro` + `[lang]/404.astro`: noindex 404 pages; the root one forwards to the visitor's language
- `src/components/`: Header (nav, language picker, theme toggle), Footer, Contact, Icon
- `src/styles/global.css`: design tokens (dark/light), base styles, reveal animations
