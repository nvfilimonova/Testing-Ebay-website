import { test, expect, Locator } from '@playwright/test';

test('Google Search Website Button Test', async ({page})=>{

  await page.goto('https://www.google.com/')
  await expect(page.locator('text=Gmail').first()).toBeVisible();
})



