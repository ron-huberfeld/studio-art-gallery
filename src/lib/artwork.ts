import type { Locale } from './i18n';
import { localized } from './i18n';
import { artworks } from '../data/artworks';

export type ArtworkStatus = 'available' | 'reserved' | 'sold' | 'notForSale';
export type PurchaseMode = 'inquire' | 'commission' | 'sold';

export type ArtworkCategory =
  | 'decorative-plates'
  | 'trays'
  | 'hamsa-wall-art'
  | 'boxes'
  | 'mirrors'
  | 'bottles-vases'
  | 'hanging-ornaments'
  | 'other';

export interface Artwork {
  id: string;
  slug: string;
  category: ArtworkCategory;
  status: ArtworkStatus;
  purchaseMode: PurchaseMode;
  images: string[];
  title: Partial<Record<Locale, string>>;
  description?: Partial<Record<Locale, string>>;
  colors?: string[];
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

export interface ArtworkCta {
  label: string;
  enabled: boolean;
}

export function validateArtwork(artwork: Artwork): ValidationResult {
  const errors: string[] = [];

  if (!localized(artwork.title, 'he')?.trim()) {
    errors.push(`Artwork ${artwork.id} needs at least one localized title.`);
  }

  if (!artwork.category) {
    errors.push(`Artwork ${artwork.id} needs a category.`);
  }

  if (artwork.images.length === 0) {
    errors.push(`Artwork ${artwork.id} needs at least one image.`);
  }

  if (artwork.images.length > 5) {
    errors.push(`Artwork ${artwork.id} can have at most 5 images.`);
  }

  return { ok: errors.length === 0, errors };
}

export function getArtworkCta(artwork: Artwork, locale: Locale): ArtworkCta {
  if (artwork.status === 'sold') {
    return { label: locale === 'he' ? 'נמכר' : 'Sold', enabled: false };
  }

  if (artwork.status === 'reserved') {
    return { label: locale === 'he' ? 'שמורה — צרו קשר' : 'Reserved — contact us', enabled: true };
  }

  if (artwork.status === 'notForSale') {
    return { label: locale === 'he' ? 'לתצוגה בלבד' : 'Display only', enabled: false };
  }

  if (artwork.purchaseMode === 'sold') {
    return { label: locale === 'he' ? 'נמכר' : 'Sold', enabled: false };
  }

  if (artwork.purchaseMode === 'commission') {
    return { label: locale === 'he' ? 'הזמנת יצירה דומה' : 'Commission a similar piece', enabled: true };
  }

  return { label: locale === 'he' ? 'בירור לגבי היצירה' : 'Inquire about this artwork', enabled: true };
}

export function getArtworkStatusLabel(artwork: Artwork, locale: Locale): string {
  const labels = locale === 'he'
    ? { available: 'זמין', reserved: 'שמור', sold: 'נמכר', notForSale: 'לתצוגה' }
    : { available: 'Available', reserved: 'Reserved', sold: 'Sold', notForSale: 'Display only' };

  return labels[artwork.status];
}

export function getArtworkRoute(artwork: Artwork, locale: Locale): string {
  return `/${locale}/artworks/${artwork.slug}/`;
}

export function getArtworkTitle(artwork: Artwork, locale: Locale): string {
  return localized(artwork.title, locale) ?? artwork.slug;
}

export function getArtworkDescription(artwork: Artwork, locale: Locale): string {
  return localized(artwork.description ?? {}, locale) ?? '';
}

export function listArtworks(): Artwork[] {
  return artworks;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}
