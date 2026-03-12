import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../config/env';

test('Login with User 1', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login(env.user1.username, env.user1.password);

});

test('Login with User 2', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login(env.user2.username, env.user2.password);

});

test('Login with User 3', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login(env.user3.username, env.user3.password);

});