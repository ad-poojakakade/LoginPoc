// import { test, expect } from '@playwright/test';

// test('Login to the portal', async ({ page }) => {
//   await page.goto('https://portal.qat.anddone.com/#/login');
//   await expect(page.locator('input[type="text"]')).toBeVisible();
//   await expect (page.locator('input[type="password"]')).toBeVisible();
//   await page.locator('input[type="text"]').click();
//   await page.locator('input[type="text"]').fill('Aldry123');
//   await page.locator('input[type="password"]').click();
//   await page.locator('input[type="password"]').fill('Qwertyuiop@890');
//   await page.locator('#login-btn').click();
  
// });

// test('Login with invalid id', async ({ page }) => {
//   await page.goto('https://portal.qat.anddone.com/#/login');
//   await page.locator('input[type="text"]').click();
//   await page.locator('input[type="text"]').fill('Aldry1234');
//   await page.locator('input[type="password"]').click();
//   await page.locator('input[type="password"]').fill('Qwertyuiop@8902');
//   await page.locator('#login-btn').click();
//   const errorMessage = page.locator('text=We could not log you in. Please check your credentials and try again');
//   await expect(errorMessage).toBeVisible();
//   await expect(errorMessage).toHaveText('We could not log you in. Please check your credentials and try again');

// });

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import users from '../../test-data/users.json';

test('Valid login', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('/login');
  await login.login(users.valid.username, users.valid.password);

  await expect(page).toHaveURL('/dashboard');
});



