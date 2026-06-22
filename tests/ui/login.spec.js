const { test, expect } = require('@playwright/test');
const { login } = require('../../helpers/auth.helper');
const { users } = require('../../utils/testData');

test('login flow using helper', async ({ page }) => {

  await login(page, users.validUser.username, users.validUser.password);

  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');
});