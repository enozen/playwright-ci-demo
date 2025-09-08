import { test, expect } from '@playwright/test';

test.describe('Webseiten-Grundfunktionen', () => {
  test('sollte Zitate anzeigen und die Navigation ermöglichen', async ({ page }) => {
    await page.goto('http://quotes.toscrape.com/');
    await expect(page).toHaveTitle('Quotes to Scrape');
    await expect(page.locator('.quote').first()).toBeVisible();
    await page.locator('li.next a').click();
    await expect(page).toHaveURL('http://quotes.toscrape.com/page/2/');
  });
});
