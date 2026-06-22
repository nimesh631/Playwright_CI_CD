const { test, expect } = require('@playwright/test');

test('API + UI combined flow @e2e', async ({ request, page }) => {

  // STEP 1: API call
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();

  expect(user.name).toBeDefined();

  // STEP 2: UI simulation
  await page.goto('https://example.com');

  // We simulate UI check using API data
  await expect(page).toHaveTitle(/Example/);

  console.log('User from API:', user.name);
});