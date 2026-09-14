import orderData from '../test-data/products.json';
import { test } from '../fixtures/test';
import { todayIsoDate } from '../utils/date';

test.describe('Order placement', () => {
  test('places an order for a product', async ({ productsPage, cartPage, checkoutPage }) => {
    test.info().annotations.push({ type: 'execution-date', description: todayIsoDate() });
    await productsPage.addProduct(orderData.order.productName);
    await productsPage.openCart();
    await cartPage.expectProduct(orderData.order.productName);
    await cartPage.checkout();
    await checkoutPage.selectCountry(orderData.order.country);
    await checkoutPage.placeOrder();
    await checkoutPage.expectOrderConfirmation();
  });
});
