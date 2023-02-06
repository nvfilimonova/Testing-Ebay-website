import { test, expect, type Page } from '@playwright/test';

test('Nataly test', async ({page})=>{
  await page.goto('https://www.ebay.co.uk/n/all-categories/')
  await page.locator('.btn btn-prim gh-spr').click
})
// Expect a title "to contain" a substring.
await expect('.btn btn-prim gh-spr').toContain('Search');