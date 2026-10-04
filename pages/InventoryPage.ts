import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartBtn: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart() {
    await this.addToCartBtn.click();
  }

  async verifyCartCount(expected: string) {
    await expect(this.cartBadge).toHaveText(expected);
  }
}

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async login(username: string, password: string) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.getByLabel('Username').fill(username);
  }
}