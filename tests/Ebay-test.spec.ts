import { test, expect, Locator } from '@playwright/test';

test('Google Search Website Button Test', async ({page})=>{

  await page.goto('https://www.google.com/')
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Gmail');
})



