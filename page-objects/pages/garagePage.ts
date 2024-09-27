import { Page, Locator } from '@playwright/test';

export class GaragePage {
  readonly page: Page;
  readonly addCarButton: Locator;
  readonly brandDropdown: Locator;
  readonly modelDropdown: Locator;
  readonly mileageField: Locator;
  readonly addButton: Locator;
  readonly firstCarName: Locator;
  readonly editCarIcon: Locator;
  readonly removeCarButton: Locator;
  readonly acceptCarRemovingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addCarButton = page.locator('button:has-text("Add Car")');
    this.brandDropdown = page.locator('select[name="brand"]');
    this.modelDropdown = page.locator('select[name="model"]');
    this.mileageField = page.locator('input[name="mileage"]');
    this.addButton = page.locator('button:has-text("Add")');
    this.firstCarName = page.locator('.car-name:first-child');
    this.editCarIcon = page.locator('.edit-car-icon:first-child');
    this.removeCarButton = page.locator('.remove-car-button:first-child');
    this.acceptCarRemovingButton = page.locator('button:has-text("Yes, remove")');
  }

  // Реалізація методу для додавання автомобіля
  async addCar(car: { brand: string; model: string; mileage: number; logo: string }) {
    // Натискаємо кнопку "Додати автомобіль", щоб відкрити форму
    await this.addCarButton.click();

    // Обираємо бренд автомобіля у випадаючому меню
    await this.brandDropdown.selectOption(car.brand);

    // Обираємо модель автомобіля у випадаючому меню
    await this.modelDropdown.selectOption(car.model);

    // Вводимо пробіг автомобіля
    await this.mileageField.fill(car.mileage.toString());

    // Натискаємо кнопку "Додати" для підтвердження
    await this.addButton.click();

    // Перевіряємо, що автомобіль доданий
    await this.page.waitForSelector(`text=${car.brand} ${car.model}`);
  }

  // Метод для входу як зареєстрований користувач
  async openAsLoggedUser(email: string, password: string) {
    await this.page.goto('/login');
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button:has-text("Login")');
    await this.page.waitForSelector('.garage');
  }
}
