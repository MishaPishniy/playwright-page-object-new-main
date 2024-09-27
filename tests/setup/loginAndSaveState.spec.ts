import { test, expect } from '@playwright/test';
import { GaragePage } from '../../page-objects/pages/garagePage';
import { users } from '../../test-data/credentials';


test.describe('Garage tests with POM', () => {
    let garagePage: GaragePage;

    test('Login As User1 and save state', async ({ page }) => {
        garagePage = new GaragePage(page);
        await page.goto('/');
        await garagePage.openAsLoggedUser(users.mainUser.email, users.mainUser.password);
        await page.context().storageState({
            path: './test-data/states/userOneState.json'
        })
    })

    test('Login As User2 and save state', async ({ page }) => {
        garagePage = new GaragePage(page);
        await page.goto('/');
        await garagePage.openAsLoggedUser(users.user2.email, users.user2.password);
        await page.context().storageState({
            path: './test-data/states/userTwoState.json'
        })
    })

})

