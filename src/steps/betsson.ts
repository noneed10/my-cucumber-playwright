import { test, expect } from '@playwright/test';

test('Bettsonscenario', async ({ page }) => {
  // Go to https://www.betsson.com/en
  await page.goto('https://www.betsson.com/en');
  // Click a[role="listitem"]:has-text("Sportsbook")
  await page.locator('a[role="listitem"]:has-text("Sportsbook")').click();
  await expect(page).toHaveURL('https://www.betsson.com/en/sportsbook');
  // Click button:has-text("Search")
  await page.locator('button:has-text("Search")').click();
  // Fill [placeholder="Search"]
  await page.locator('[placeholder="Search"]').fill('newcastle');
  // Click #mat-option-9 >> text=Newcastle
  await page.locator('#mat-option-9 >> text=Newcastle').click();
  await expect(page).toHaveURL('https://www.betsson.com/en/sportsbook/search');
  // Click .obg-more-market > .ico-chevron-right >> nth=0
  await page.locator('.obg-more-market > .ico-chevron-right').first().click();
  await expect(page).toHaveURL(
    'https://www.betsson.com/en/sportsbook/search?eventId=f-2Awa8j_4k0unNWIJNTsFVQ&eti=0',
  );
  // Click obg-selection-container[role="button"]:has-text("Newcastle+112")
  await page.locator('obg-selection-container[role="button"]:has-text("Newcastle+112")').click();
  // Click [placeholder="Stake"]
  await page.locator('[placeholder="Stake"]').click();
  // Fill [placeholder="Stake"]
  await page.locator('[placeholder="Stake"]').fill('10');
  // Click obg-m-betslip-selection >> text=+112
  await page.locator('obg-m-betslip-selection >> text=+112').click();
  // Click text=€21.20
  await page.locator('text=€21.20').click();
});
