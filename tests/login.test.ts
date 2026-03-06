import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../config/env';

test.only('Login form automate', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login(env.username!, env.password!);

});
// import {chromium,test} from "@playwright/test"

// test("Login form automate", async()=>{

//     const browser= await chromium.launch({
//       //  headless:false
//     })

//   const context = await browser.newContext()  
//   const page = await context.newPage()

// await page.goto("https://www.facebook.com/")

// await page.fill("input[id='email']","pkakade@yopmail.com")
// await page.fill("input[id='pass']","Savana1#")

// await page.click("'Log in'")

// })