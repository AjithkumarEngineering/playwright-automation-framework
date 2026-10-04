import { test } from '@playwright/test';
import { LoginPage } from '../pages/InventoryPage';
import { InventoryPage } from '../pages/InventoryPage';

test('login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addProductToCart();
  await inventoryPage.verifyCartCount('1');
});