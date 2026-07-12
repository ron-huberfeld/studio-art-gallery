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
  await expect(page.getByRole('link', { name: 'צלחת מנדלה טורקיז' })).toBeVisible();
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

test('English gallery links to artwork detail with inquiry context', async ({ page }) => {
  await page.goto('/studio-art-gallery/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  await page.getByRole('link', { name: 'Turquoise Mandala Plate' }).click();
  await expect(page).toHaveURL('/studio-art-gallery/en/artworks/turquoise-mandala-plate/');
  await expect(page.getByRole('heading', { name: 'Turquoise Mandala Plate' })).toBeVisible();
  await expect(page.locator('link[rel="alternate"][hreflang="he"]')).toHaveAttribute('href', 'https://ron-huberfeld.github.io/studio-art-gallery/he/artworks/turquoise-mandala-plate/');
  await expect(page.getByRole('link', { name: 'Inquire about this artwork' })).toHaveAttribute(
    'href',
    expect.stringContaining('subject=Artwork%20inquiry%3A%20Turquoise%20Mandala%20Plate')
  );
});
