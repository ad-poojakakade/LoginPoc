import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../config/env';

test('Login form automate', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login(env.username!, env.password!);

});