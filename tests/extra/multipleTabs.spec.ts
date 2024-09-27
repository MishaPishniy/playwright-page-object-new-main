import { test, expect } from '@playwright/test';

test.skip('Facebook link test', async ({ page, context }) => {
    await page.goto('/');

    const pagePromise = context.waitForEvent('page');
    await page.locator('.icon-facebook').click();
    const newPage = await pagePromise;
    await expect(newPage.getByText('Create new account')).toBeVisible();

    await page.bringToFront();
    await page.pause();
    await newPage.bringToFront();
    await page.pause();
    await page.bringToFront();
    await page.pause();
    await newPage.bringToFront();
    await page.pause();

})