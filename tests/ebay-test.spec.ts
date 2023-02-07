import { test, expect, Locator } from '@playwright/test';

test('Ebay Website Button Test', async ({page})=>{
  const button = 'input[value="Search"]';
  
  await page.goto('https://www.ebay.co.uk/n/all-categories/')
  await expect(page.locator(button)).toBeVisible();
  await page.locator(button).click
})
 
//=======================

import { test, expect, Locator } from '@playwright/test';

test('Google Search Website Button Test', async ({page})=>{
  await page.goto('https://www.google.com/')
  const gbutton = page.getByText('Gmail');
  await expect(gbutton).toBeVisible();

  await expect(gbutton).toContainText('Gmail');

  await gbutton.click();
  await expect(gbutton).toBeHidden()

});


