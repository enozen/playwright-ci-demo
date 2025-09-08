import { test, expect } from '@playwright/test';
test.describe('Azure DevOps Landing Page Validation', () => {
  test('should load the main page and display the primary heading', async ({ page }) => {
    await page.goto('https://azure.microsoft.com/en-us/products/devops');
    await expect(page).toHaveTitle(/Azure DevOps/);
    await expect(page.getByRole('heading', { name: 'Azure DevOps' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Start free' })).toBeVisible();
  });
});
