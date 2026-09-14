import { expect, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  private readonly emailInput;
  private readonly passwordInput;
  private readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    this.loginButton = page.locator('#login');
  }

  async open(): Promise<void> {
    await this.page.goto('/client', { waitUntil: 'domcontentloaded' });
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page.locator('.card-body b').first()).toBeVisible();
  }
}
