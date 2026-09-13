import en from './en.json';
import vi from './vi.json';
import es from './es.json';

export type Locale = 'en' | 'vi' | 'es';
export const LOCALES: Locale[] = ['en', 'vi', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  vi: 'VI',
  es: 'ES',
};

type Dict = typeof en;

const dictionaries: Record<Locale, Dict> = { en, vi, es };

function getByPath(obj: unknown, path: string[]): unknown {
  return path.reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  return function t(key: string): string {
    const path = key.split('.');
    const value = getByPath(dict, path);
    if (typeof value === 'string') return value;
    const fallback = getByPath(dictionaries[DEFAULT_LOCALE], path);
    if (typeof fallback === 'string') return fallback;
    return key;
  };
}

export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${localePrefix(locale)}${clean}` || '/';
}

export function stripLocalePrefix(pathname: string): string {
  for (const locale of LOCALES) {
    const prefix = localePrefix(locale);
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      return pathname.slice(prefix.length) || '/';
    }
  }
  return pathname || '/';
}
