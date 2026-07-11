export function createInquiryHref(title: string, locale: 'he' | 'en'): string {
  const subject = locale === 'he' ? `בירור לגבי יצירה: ${title}` : `Artwork inquiry: ${title}`;
  const body = locale === 'he'
    ? `שלום, אשמח לקבל פרטים לגבי היצירה "${title}".`
    : `Hello, I would like more details about "${title}".`;

  return `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
