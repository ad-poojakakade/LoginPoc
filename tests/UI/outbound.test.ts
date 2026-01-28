import { test, expect } from '@playwright/test';
// import { login } from '../tests/login.test.ts';

test('login and navigate to Outbound payments', async ({ page }) => {
  await page.goto('https://portal.qat.anddone.com/'); //{ waitUntil: 'domcontentloaded'
  await page.locator('[formcontrolname="userName"]').fill('Aldry123');
  await page.locator('[formcontrolname="password"]').fill('Qwertyuiop@890');
   await page.locator('#login-btn').click();
  // let toast_message:Locator = page.locator("//div[contains(text(),'Loading')]/img");
   const errorMessage = page.locator('text= User logged in successfully. ');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(' User logged in successfully. ');
  await errorMessage.waitFor({state:'visible',timeout:30000});
  await expect(errorMessage).toBeVisible();
  await errorMessage.waitFor({state:'hidden',timeout:30000});
});
