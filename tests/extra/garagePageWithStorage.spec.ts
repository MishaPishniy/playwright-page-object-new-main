import { test, expect, Page, chromium } from '@playwright/test';
import { GaragePage } from '../../page-objects/pages/garagePage';

test.describe('Using test.use', () => {
    test.describe('Garage tests with POM As User1', () => {
        let garagePage: GaragePage;
        test.use({ storageState: './test-data/states/userOneState.json' })

        test.beforeEach(async ({ page }) => {
            garagePage = new GaragePage(page);
            await garagePage.open();
            await garagePage.clickAddCarButton();
        })

        test.afterEach(async () => {
            await garagePage.removeLastCar();
        })

        test('@smoke Add [Audi] [A8] car to the garage', async ({ page }) => {

            await garagePage.selectBrand('Audi');
            await garagePage.selectModel('A8');
            await garagePage.enterMileage('222');
            await garagePage.clickAddButton();
            await expect(garagePage.firstCarName).toHaveText('Audi A8');
        });

        test('Add [BMW] [X5] car to the garage', async () => {
            await garagePage.selectBrand('BMW');
            await garagePage.selectModel('X5');
            await garagePage.enterMileage('1222');
            await garagePage.clickAddButton();
            await expect(garagePage.firstCarName).toHaveText('BMW X5');
        })

        test('Add [Ford] [Fiesta] car to the garage', async () => {
            await garagePage.selectBrand('Ford');
            await garagePage.selectModel('Fiesta');
            await garagePage.enterMileage('1222');
            await garagePage.clickAddButton();
            await expect(garagePage.firstCarName).toHaveText('Ford Fiesta');
        })

        test('Add [Ford] [Focus] car to the garage', async () => {
            await garagePage.selectBrand('Ford');
            await garagePage.selectModel('Focus');
            await garagePage.enterMileage('1222');
            await garagePage.clickAddButton();
            await expect(garagePage.firstCarName).toHaveText('Ford Focus');
        })

        test('Add [Porsche] [911] car to the garage', async () => {
            await garagePage.selectBrand('Porsche');
            await garagePage.selectModel('911');
            await garagePage.enterMileage('1222');
            await garagePage.clickAddButton();
            await expect(garagePage.firstCarName).toHaveText('Porsche 911');
        })

    });




    test.describe('Garage tests with POM As User2', () => {
        let garagePage: GaragePage;
        test.use({ storageState: './test-data/states/userTwoState.json' })

        test.beforeEach(async ({ page }) => {
            garagePage = new GaragePage(page);
            await garagePage.open();
            await garagePage.clickAddCarButton();
        })

        test.afterEach(async () => {
            await garagePage.removeLastCar();
        })


        test('Add [Porsche] [911] car to the garage2', async () => {
            await garagePage.selectBrand('Porsche');
            await garagePage.selectModel('911');
            await garagePage.enterMileage('1222');
            await garagePage.clickAddButton();
            await expect(garagePage.firstCarName).toHaveText('Porsche 911');
        })

    });

})

test.describe('With beforeAll', () => {
    let garagePage: GaragePage;
    let page: Page;

    test.beforeAll(async () => {
        const browser = await chromium.launch();

        const ctx = await browser.newContext({
            storageState: './test-data/states/userOneState.json'
        });

        page = await ctx.newPage();
    })


    test.beforeEach(async () => {
        garagePage = new GaragePage(page);
        await garagePage.open();
        await garagePage.clickAddCarButton();
    })

    test.afterEach(async () => {
        await garagePage.removeLastCar();
    })

    test('@smoke Add [Audi] [A8] car to the garage', async ({ page }) => {

        await garagePage.selectBrand('Audi');
        await garagePage.selectModel('A8');
        await garagePage.enterMileage('222');
        await garagePage.clickAddButton();
        await expect(garagePage.firstCarName).toHaveText('Audi A8');
    });

    test('Add [BMW] [X5] car to the garage', async () => {
        await garagePage.selectBrand('BMW');
        await garagePage.selectModel('X5');
        await garagePage.enterMileage('1222');
        await garagePage.clickAddButton();
        await expect(garagePage.firstCarName).toHaveText('BMW X5');
    })

    test('Add [Ford] [Fiesta] car to the garage', async () => {
        await garagePage.selectBrand('Ford');
        await garagePage.selectModel('Fiesta');
        await garagePage.enterMileage('1222');
        await garagePage.clickAddButton();
        await expect(garagePage.firstCarName).toHaveText('Ford Fiesta');
    })

    test('Add [Ford] [Focus] car to the garage', async () => {
        await garagePage.selectBrand('Ford');
        await garagePage.selectModel('Focus');
        await garagePage.enterMileage('1222');
        await garagePage.clickAddButton();
        await expect(garagePage.firstCarName).toHaveText('Ford Focus');
    })

    test('Add [Porsche] [911] car to the garage', async () => {
        await garagePage.selectBrand('Porsche');
        await garagePage.selectModel('911');
        await garagePage.enterMileage('1222');
        await garagePage.clickAddButton();
        await expect(garagePage.firstCarName).toHaveText('Porsche 911');
    })

})