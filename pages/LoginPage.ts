import { Page } from '@playwright/test';
import { env } from '../config/env';

export class LoginPage {

  constructor(private page: Page) {}

  async navigateToLogin() {
    await this.page.goto(env.baseURL!);
  }

  async login(username: string, password: string) {
    await this.page.locator('#inputUsername').fill(username);
    await this.page.locator('#inputPassword').fill(password);
    await this.page.locator('#login-btn').click();
  }

}