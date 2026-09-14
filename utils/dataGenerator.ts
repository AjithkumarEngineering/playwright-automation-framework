import { faker } from '@faker-js/faker';

export function uniqueEmail(): string {
  return `playwright.${faker.string.alphanumeric(8).toLowerCase()}@example.com`;
}
