import { test } from '@playwright/test';
import { env } from '../config/env';

test('Open portal using env config', async ({ page }) => {

  await page.goto(env.baseURL!);

});