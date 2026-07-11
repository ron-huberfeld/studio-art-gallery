import { describe, expect, it } from 'vitest';
import {
  getArtworkBySlug,
  getArtworkCta,
  getArtworkStatusLabel,
  getArtworkRoute,
  listArtworks,
  validateArtwork,
  type Artwork
} from '../src/lib/artwork';

const baseArtwork: Artwork = {
  id: 'sample-plate',
  slug: 'sample-plate',
  category: 'decorative-plates',
  status: 'available',
  purchaseMode: 'inquire',
  images: ['/artworks/sample-plate.svg'],
  title: {
    he: 'צלחת לדוגמה',
    en: 'Sample Plate'
  },
  colors: ['turquoise', 'gold']
};

describe('artwork catalog model', () => {
  it('requires a title, category, and at least one image', () => {
    expect(validateArtwork(baseArtwork)).toEqual({ ok: true, errors: [] });

    expect(validateArtwork({ ...baseArtwork, title: { he: '', en: '' } })).toMatchObject({
      ok: false,
      errors: expect.arrayContaining(['Artwork sample-plate needs at least one localized title.'])
    });

    expect(validateArtwork({ ...baseArtwork, images: [] })).toMatchObject({
      ok: false,
      errors: expect.arrayContaining(['Artwork sample-plate needs at least one image.'])
    });
  });

  it('rejects artwork entries with more than five images', () => {
    expect(validateArtwork({ ...baseArtwork, images: ['1.svg', '2.svg', '3.svg', '4.svg', '5.svg', '6.svg'] })).toMatchObject({
      ok: false,
      errors: expect.arrayContaining(['Artwork sample-plate can have at most 5 images.'])
    });
  });

  it('returns localized inquiry CTAs for available inquiry items', () => {
    expect(getArtworkCta(baseArtwork, 'he')).toEqual({ label: 'בירור לגבי היצירה', enabled: true });
    expect(getArtworkCta(baseArtwork, 'en')).toEqual({ label: 'Inquire about this artwork', enabled: true });
  });

  it('prevents purchase actions for sold artwork while keeping it visible', () => {
    const soldArtwork: Artwork = { ...baseArtwork, status: 'sold', purchaseMode: 'sold' };

    expect(getArtworkCta(soldArtwork, 'en')).toEqual({ label: 'Sold', enabled: false });
    expect(listArtworks()).toContainEqual(expect.objectContaining({ slug: 'turquoise-mandala-plate' }));
  });

  it('keeps artwork status authoritative when deriving CTAs and labels', () => {
    const reservedArtwork: Artwork = { ...baseArtwork, status: 'reserved', purchaseMode: 'sold' };

    expect(getArtworkCta(reservedArtwork, 'en')).toEqual({ label: 'Reserved — contact us', enabled: true });
    expect(getArtworkStatusLabel(reservedArtwork, 'he')).toBe('שמור');
  });

  it('builds bilingual artwork routes with Hebrew as the default locale', () => {
    expect(getArtworkRoute(baseArtwork, 'he')).toBe('/he/artworks/sample-plate/');
    expect(getArtworkRoute(baseArtwork, 'en')).toBe('/en/artworks/sample-plate/');
    expect(getArtworkBySlug('turquoise-mandala-plate')?.title.he).toBe('צלחת מנדלה טורקיז');
  });
});
