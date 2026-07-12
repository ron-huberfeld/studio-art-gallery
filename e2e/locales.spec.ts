import { expect, test } from '@playwright/test';

test('Hebrew gallery is the default RTL experience', async ({ page }) => {
  await page.goto('/studio-art-gallery/he/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'he');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page).toHaveTitle('בין נקודות לפסיפס');
  await expect(page.getByRole('heading', { name: 'בין נקודות לפסיפס' })).toBeVisible();
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', 'קטלוג ליצירות אומנות בעבודת יד');
  await expect(page.getByText('קטלוג ליצירות אומנות בעבודת יד')).toBeVisible();
  await expect(page.getByText('קטלוג דו־לשוני ליצירות אמנות בעבודת יד, עם מסלול בירור אישי לכל יצירה.')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/studio-art-gallery/en/');
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', 'https://ron-huberfeld.github.io/studio-art-gallery/en/');
  await expect(page.getByRole('link', { name: 'גיטרה מצופה פסיפס' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'מחבת מעוטרת בנקודות' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'צלחת מנדלה טורקיז' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'חמסה ארכיון' })).toHaveCount(0);
});

test('Hebrew gallery shows the first real artwork and public shekel price', async ({ page }) => {
  await page.goto('/studio-art-gallery/he/');

  await expect(page.getByRole('link', { name: 'גיטרה מצופה פסיפס' })).toBeVisible();
  await expect(page.getByText(/1,200/)).toBeVisible();
  await page.getByRole('link', { name: 'גיטרה מצופה פסיפס' }).click();
  await expect(page).toHaveURL('/studio-art-gallery/he/artworks/mosaic-covered-guitar/');
  await expect(page.getByRole('heading', { name: 'גיטרה מצופה פסיפס' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'בירור לגבי היצירה' })).toHaveAttribute(
    'href',
    expect.stringContaining('%D7%92%D7%99%D7%98%D7%A8%D7%94%20%D7%9E%D7%A6%D7%95%D7%A4%D7%94%20%D7%A4%D7%A1%D7%99%D7%A4%D7%A1')
  );
});

test('Hebrew gallery shows decorated dot pan artwork and public shekel price', async ({ page }) => {
  await page.goto('/studio-art-gallery/he/');

  await expect(page.getByRole('link', { name: 'מחבת מעוטרת בנקודות' })).toBeVisible();
  await expect(page.getByText(/60/)).toBeVisible();
  await page.getByRole('link', { name: 'מחבת מעוטרת בנקודות' }).click();
  await expect(page).toHaveURL('/studio-art-gallery/he/artworks/decorated-dot-pan/');
  await expect(page.getByRole('heading', { name: 'מחבת מעוטרת בנקודות' })).toBeVisible();
  await expect(page.getByAltText('מחבת מעוטרת בנקודות')).toHaveAttribute(
    'src',
    expect.stringContaining('/artworks/decorated-dot-pan.jpg')
  );
  await expect(page.getByRole('link', { name: 'בירור לגבי היצירה' })).toHaveAttribute(
    'href',
    expect.stringContaining('%D7%9E%D7%97%D7%91%D7%AA%20%D7%9E%D7%A2%D7%95%D7%98%D7%A8%D7%AA%20%D7%91%D7%A0%D7%A7%D7%95%D7%93%D7%95%D7%AA')
  );
});

test('Hebrew gallery shows dot-painted hanging mirror artwork with size and public shekel price', async ({ page }) => {
  await page.goto('/studio-art-gallery/he/');

  await expect(page.getByRole('link', { name: 'מראה לתליה מצויירת בנקודות' })).toBeVisible();
  await expect(page.getByText(/50/)).toBeVisible();
  await page.getByRole('link', { name: 'מראה לתליה מצויירת בנקודות' }).click();
  await expect(page).toHaveURL('/studio-art-gallery/he/artworks/dot-painted-hanging-mirror/');
  await expect(page.getByRole('heading', { name: 'מראה לתליה מצויירת בנקודות' })).toBeVisible();
  await expect(page.getByText(/25 ס״מ/)).toBeVisible();
  await expect(page.getByAltText('מראה לתליה מצויירת בנקודות')).toHaveAttribute(
    'src',
    expect.stringContaining('/artworks/dot-painted-hanging-mirror.jpg')
  );
  await expect(page.getByRole('link', { name: 'בירור לגבי היצירה' })).toHaveAttribute(
    'href',
    expect.stringContaining('%D7%9E%D7%A8%D7%90%D7%94%20%D7%9C%D7%AA%D7%9C%D7%99%D7%94%20%D7%9E%D7%A6%D7%95%D7%99%D7%99%D7%A8%D7%AA%20%D7%91%D7%A0%D7%A7%D7%95%D7%93%D7%95%D7%AA')
  );
});

test('English gallery links to real artwork detail with inquiry context', async ({ page }) => {
  await page.goto('/studio-art-gallery/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  await expect(page.getByRole('link', { name: 'Turquoise Mandala Plate' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Archived Hamsa' })).toHaveCount(0);
  await page.getByRole('link', { name: 'Decorated Dot Pan' }).click();
  await expect(page).toHaveURL('/studio-art-gallery/en/artworks/decorated-dot-pan/');
  await expect(page.getByRole('heading', { name: 'Decorated Dot Pan' })).toBeVisible();
  await expect(page.locator('link[rel="alternate"][hreflang="he"]')).toHaveAttribute('href', 'https://ron-huberfeld.github.io/studio-art-gallery/he/artworks/decorated-dot-pan/');
  await expect(page.getByRole('link', { name: 'Inquire about this artwork' })).toHaveAttribute(
    'href',
    expect.stringContaining('subject=Artwork%20inquiry%3A%20Decorated%20Dot%20Pan')
  );
});
