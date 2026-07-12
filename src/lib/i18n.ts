export type Locale = 'he' | 'en';

export const locales: Locale[] = ['he', 'en'];

export const siteTitle = 'בין נקודות לפסיפס';
export const siteTitles: Record<Locale, string> = {
  he: 'בין נקודות לפסיפס',
  en: 'Between Dots and Mosaics'
};
export const siteDescription = 'קטלוג ליצירות אומנות בעבודת יד';

export const localeMeta: Record<Locale, { label: string; htmlLang: string; dir: 'rtl' | 'ltr' }> = {
  he: { label: 'עברית', htmlLang: 'he', dir: 'rtl' },
  en: { label: 'English', htmlLang: 'en', dir: 'ltr' }
};

export function alternateLocale(locale: Locale): Locale {
  return locale === 'he' ? 'en' : 'he';
}

export function localized<T>(values: Partial<Record<Locale, T>>, locale: Locale): T | undefined {
  return values[locale] ?? values[alternateLocale(locale)];
}

export function getSiteTitle(locale: Locale): string {
  return siteTitles[locale];
}
