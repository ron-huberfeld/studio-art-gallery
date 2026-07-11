import { expect, test } from '@playwright/test';

test('Hebrew gallery is the default RTL experience', async ({ page }) => {
  await page.goto('/studio-art-gallery/he/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'he');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { name: 'Atelier Gallery' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/studio-art-gallery/en/');
  await expect(page.getByRole('link', { name: 'צלחת מנדלה טורקיז' })).toBeVisible();
});

test('English gallery links to artwork detail with inquiry context', async ({ page }) => {
  await page.goto('/studio-art-gallery/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  await page.getByRole('link', { name: 'Turquoise Mandala Plate' }).click();
  await expect(page).toHaveURL('/studio-art-gallery/en/artworks/turquoise-mandala-plate/');
  await expect(page.getByRole('heading', { name: 'Turquoise Mandala Plate' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Inquire about this artwork' })).toHaveAttribute(
    'href',
    expect.stringContaining('subject=Artwork%20inquiry%3A%20Turquoise%20Mandala%20Plate')
  );
});
