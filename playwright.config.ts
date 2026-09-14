import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000,
  },

  reporter: [
    ['list'],
    ['html', { open: 'failures-only', outputFolder: 'playwright-report' }],
  ],

  use: {
    headless: false,               // runs headed (browser window visible)

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});