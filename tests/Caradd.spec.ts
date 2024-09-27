import { test, expect } from '@playwright/test';
import { GaragePage } from '../page-objects/pages/garagePage';
import { users } from '../test-data/credentials';

// Інтерфейс для структури автомобіля
interface Car {
  brand: string;
  model: string;
  mileage: number;
  logo: string;
}

// Функція для генерації тестових даних для автомобілів
function generateCarData(count: number): Car[] {
  const brands = ['BMW', 'Audi'];
  const models = ['3', 'TT'];
  
  const cars: Car[] = [];
  for (let i = 0; i < count; i++) {
    const randomBrandIndex = Math.floor(Math.random() * brands.length);
    const randomModelIndex = Math.floor(Math.random() * models.length);
    
    cars.push({
      brand: brands[randomBrandIndex],
      model: models[randomModelIndex],
      mileage: Math.floor(Math.random() * 1000),
      logo: `${brands[randomBrandIndex].toLowerCase()}.png`
    });
  }
  return cars;
}

test.describe('Garage test with MOK', () => {
  let garagePage: GaragePage;

  test.beforeEach(async ({ page }) => {
    garagePage = new GaragePage(page);
    await garagePage.openAsLoggedUser(users.mainUser.email, users.mainUser.password);
  });

  test('Add 120 cars to the garage', async ({ page }) => {
    const cars = generateCarData(120);  // Генеруємо 120 автомобілів

    // Додаємо кожен автомобіль через інтерфейс
    for (const car of cars) {
      await garagePage.addCar({
        brand: car.brand,
        model: car.model,
        mileage: car.mileage,
        logo: car.logo
      });

      // Перевірка, чи з'явився автомобіль після додавання
      const carAdded = await page.locator(`text=${car.brand} ${car.model}`).isVisible();
      expect(carAdded).toBeTruthy();  // Перевіряємо, що автомобіль доданий
    }
  });
});
