import en from './en';
import de from './de';
import fr from './fr';
import es from './es';
import ca from './ca';
import type { Dict } from './en';
import { defaultLocale, locales, ogLocales, type Locale } from './config';

export { defaultLocale, locales, ogLocales, type Locale };

export type Page = 'home' | 'about' | 'error';

export const site = {
  name: 'Sigfrid Couto Fernández',
  email: 'sigfridcouto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sigfrid-couto-fernandez/',
  /** First year of professional experience, used to compute `{years}` in the copy. */
  careerStart: 2006,
};

/** Years of experience, computed at build time so the copy never goes stale. */
export const yearsOfExperience = new Date().getFullYear() - site.careerStart;

const raw: Record<Locale, Dict> = { en, de, fr, es, ca };
const cache = new Map<Locale, Dict>();

/** Dictionary for a locale, with `{years}` placeholders filled in. */
export function t(lang: Locale): Dict {
  const key = raw[lang] ? lang : defaultLocale;
  let dict = cache.get(key);
  if (!dict) {
    dict = JSON.parse(JSON.stringify(raw[key]).replaceAll('{years}', String(yearsOfExperience))) as Dict;
    cache.set(key, dict);
  }
  return dict;
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Canonical path of a page in a given locale (always with trailing slash). */
export function pathFor(lang: Locale, page: Page): string {
  return page === 'about' ? `/${lang}/about/` : `/${lang}/`;
}

export const localeStaticPaths = () => locales.map((lang) => ({ params: { lang } }));
