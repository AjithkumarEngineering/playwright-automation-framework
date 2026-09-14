import { expect, type Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async selectCountry(country: string): Promise<void> {
    const countryInput = this.page.locator("[placeholder*='Country']");
    await countryInput.fill(country.slice(0, 3));
    const results = this.page.locator('.ta-results');
    await expect(results).toBeVisible();
    await results.getByRole('button', { name: country, exact: true }).click();
  }

  async placeOrder(): Promise<void> {
    await this.page.getByText('Place Order', { exact: true }).click();
  }

  async expectOrderConfirmation(): Promise<void> {
    await expect(this.page.locator('.hero-primary')).toContainText('Thankyou');
  }
}
