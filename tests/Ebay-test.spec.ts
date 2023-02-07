import { test, expect, Locator } from '@playwright/test';

test('Google Search Website Button Test', async ({page})=>{
  await page.goto('https://www.google.com/')
  const gbutton = page.getByText('Gmail');
  await expect(gbutton).toBeVisible();

  await expect(gbutton).toContainText('Gmail');

  await gbutton.click();
  await expect(gbutton).toBeHidden()

});



