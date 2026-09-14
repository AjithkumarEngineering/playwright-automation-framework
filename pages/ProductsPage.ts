import { expect, type Page } from '@playwright/test';

export class ProductsPage {
  constructor(private readonly page: Page) {}

  private productCard(productName: string) {
    return this.page.locator('.card-body').filter({ hasText: productName });
  }

  async addProduct(productName: string): Promise<void> {
    const card = this.productCard(productName);
    await expect(card).toBeVisible();
    await card.getByRole('button', { name: 'Add To Cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.page.locator("[routerlink*='cart']").click();
  }
}
