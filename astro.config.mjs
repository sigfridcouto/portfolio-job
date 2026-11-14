// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales } from './src/i18n/config.ts';

const site = 'https://sigfridcouto.com';

export default defineConfig({
  site,
  // Pages are emitted as `<page>/index.html`; keep URLs, canonicals and sitemap consistent.
  trailingSlash: 'always',
  // CSS is tiny (~6 KB); inlining it removes render-blocking requests
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // `/` is only a language redirect; `/404/` must never be indexed.
      filter: (page) => page !== `${site}/` && !page.includes('/404'),
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
    }),
  ],
});
