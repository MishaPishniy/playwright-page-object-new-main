import { test, expect } from '@playwright/test';
import { GaragePage } from '../page-objects/pages/garagePage';
import { users } from '../test-data/credentials';

interface Car {
    id: number, 
    carBrandId: number, 
    carModelId: number, 
    initialMileage: number, 
    updatedMileageAt: string,
    carCreatedAt:  string,
    mileage: number, 
    brand:  string,
    model:  string,
   logo:  string
}
function generateCarData(count: number):Car[] {
  const brands = ['BMW', 'Audi'];
  const models = ['3', 'TT'];
  
  const cars:Car[] = [];
  for (let i = 0; i < count; i++) {
    const randomBrandIndex = Math.floor(Math.random() * brands.length);
    const randomModelIndex = Math.floor(Math.random() * models.length);
    
    cars.push({
      id: 176800 + i,
      carBrandId: randomBrandIndex + 1,
      carModelId: randomModelIndex + 1,
      initialMileage: Math.floor(Math.random() * 1000), 
      updatedMileageAt: new Date().toISOString(),
      carCreatedAt: new Date().toISOString(),
      mileage: Math.floor(Math.random() * 1000), 
      brand: brands[randomBrandIndex],
      model: models[randomModelIndex],
     logo: `${brands[randomBrandIndex].toLowerCase()}.png`
    });
  }
  return cars;
}

test.describe('Garage test with MOK', () => {
  let garagePage: GaragePage;

  test.beforeEach(async ({page}) => {
    garagePage = new GaragePage(page);
    await page.goto('/');
  });

  test('Verify add car', async ({page}) => {
    const testData = {
      "status": "ok",
      "data": generateCarData(120)
    };

    await page.route('**/api/cars', route => route.fulfill({
      status: 200,
      body: JSON.stringify(testData)
    }));

    await garagePage.openAsLoggedUser(users.mainUser.email, users.mainUser.password);
  });

  test('Abort request', async ({ page }) => {
    await page.route('**/api/cars', route => route.abort());
    await garagePage.openAsLoggedUser(users.mainUser.email, users.mainUser.password);
    await page.pause();
  });
});
