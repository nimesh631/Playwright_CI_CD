const { test, expect } = require('@playwright/test');

test('login flow simulation', async ({ page }) => {
  
  // go to a demo login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // fill username
  await page.fill('#username', 'tomsmith');

  // fill password
  await page.fill('#password', 'SuperSecretPassword!');

  // click login
  await page.click('button[type="submit"]');

  // assertion
  await expect(page.locator('#flash')).toContainText('You log into a secure area!');
});