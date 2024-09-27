import { expect } from '@playwright/test';
import { test } from '../../fixtures/combinedFixtures';
test.describe('Garage tests', () => {

    test.describe('Garage tests with POM and fixtures from user', () => {

        test('@smoke Add [Audi] [A8] car to the garage', async ({ garagePageAsUser, pageSmall }) => {
            await garagePageAsUser.selectBrand('Audi');
            await garagePageAsUser.selectModel('A8');
            await garagePageAsUser.enterMileage('222');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Audi A8');
        });

        test('Add [BMW] [X5] car to the garage', async ({ garagePageAsUser, pageSmall }) => {
            await garagePageAsUser.selectBrand('BMW');
            await garagePageAsUser.selectModel('X5');
            await garagePageAsUser.enterMileage('1222');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('BMW X5');
        })

        test('Add [Ford] [Fiesta] car to the garage', async ({ garagePageAsUser, pageSmall }) => {
            await garagePageAsUser.selectBrand('Ford');
            await garagePageAsUser.selectModel('Fiesta');
            await garagePageAsUser.enterMileage('1222');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Ford Fiesta');
        })

        test('Add [Ford] [Focus] car to the garage', async ({ garagePageAsUser, pageBig }) => {
            await garagePageAsUser.selectBrand('Ford');
            await garagePageAsUser.selectModel('Focus');
            await garagePageAsUser.enterMileage('1222');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Ford Focus');
        })

        test('Add [Porsche] [911] car to the garage', async ({ garagePageAsUser, pageBig }) => {
            await garagePageAsUser.selectBrand('Porsche');
            await garagePageAsUser.selectModel('911');
            await garagePageAsUser.enterMileage('1222');
            await garagePageAsUser.clickAddButton();
            await expect(garagePageAsUser.firstCarName).toHaveText('Porsche 911');
        })

    });



    test.describe('Garage tests with POM and fixtures from guest', () => {

        test('@smoke Add [Audi] [A8] car to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Audi');
            await garagePageAsGuest.selectModel('A8');
            await garagePageAsGuest.enterMileage('222');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Audi A8');
        });

        test('Add [BMW] [X5] car to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('BMW');
            await garagePageAsGuest.selectModel('X5');
            await garagePageAsGuest.enterMileage('1222');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('BMW X5');
        })

        test('Add [Ford] [Fiesta] car to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Ford');
            await garagePageAsGuest.selectModel('Fiesta');
            await garagePageAsGuest.enterMileage('1222');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Ford Fiesta');
        })

        test('Add [Ford] [Focus] car to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Ford');
            await garagePageAsGuest.selectModel('Focus');
            await garagePageAsGuest.enterMileage('1222');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Ford Focus');
        })

        test('Add [Porsche] [911] car to the garage', async ({ garagePageAsGuest }) => {
            await garagePageAsGuest.selectBrand('Porsche');
            await garagePageAsGuest.selectModel('911');
            await garagePageAsGuest.enterMileage('1222');
            await garagePageAsGuest.clickAddButton();
            await expect(garagePageAsGuest.firstCarName).toHaveText('Porsche 911');
        })

    });

});