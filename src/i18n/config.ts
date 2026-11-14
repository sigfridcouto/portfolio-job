// Single source of truth for supported locales.
// Imported by astro.config.mjs, the i18n helpers and the root redirect page.
export const locales = ['en', 'de', 'fr', 'es', 'ca'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Open Graph locale codes (language_TERRITORY). */
export const ogLocales: Record<Locale, string> = {
  en: 'en_GB',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  ca: 'ca_ES',
};
