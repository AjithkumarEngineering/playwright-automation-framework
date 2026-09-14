import { test, expect } from '@playwright/test';

//below code used tp written by automatic codegen playwright

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill(process.env.PRACTICE_USERNAME ?? '');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill(process.env.PRACTICE_PASSWORD ?? '');
  await page.locator('span').nth(4).click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('combobox').selectOption('consult');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState();
  await expect(page.locator('app-card-list')).toContainText('iphone X');
});