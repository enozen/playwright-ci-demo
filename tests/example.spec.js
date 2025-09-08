test('should interact with form elements', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.fill('#userName', 'John Doe');
  await page.fill('#userEmail', 'john@example.com');
  await page.click('#submit');
  await expect(page.locator('#output')).toBeVisible();
});
