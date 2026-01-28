import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login.page';
import users from '../../TestData/userLogin.json';

test('Valid user should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(users.valid.username, users.valid.password);

  await expect(page).toHaveURL(/dashboard/);
});

