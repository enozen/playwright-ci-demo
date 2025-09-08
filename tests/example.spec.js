import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {
  test('Basic Google search functionality', async ({ page }) => {
    // Navigate to Google
    await page.goto('https://www.google.com');
    
    // Wait for and accept cookies if needed (for EU users)
    try {
      await page.click('button:has-text("Accept all")', { timeout: 3000 });
    } catch {
      // Cookie banner might not appear, continue
    }
    
    // Check title
    await expect(page).toHaveTitle(/Google/);
    
    // Find search box (Google uses 'q' name for search)
    const searchBox = page.locator('input[name="q"], textarea[name="q"]');
    await expect(searchBox).toBeVisible();
    
    // Type search query
    await searchBox.fill('Playwright automation');
    
    // Press Enter or click search button
    await page.keyboard.press('Enter');
    
    // Wait for results page
    await page.waitForURL('**/search?**');
    
    // Verify search results appear
    await expect(page.locator('#search')).toBeVisible();
    
    // Check that results contain our search term
    const results = page.locator('#search .g');
    await expect(results.first()).toBeVisible();
  });
});
