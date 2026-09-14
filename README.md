# Playwright Automation Framework

This project contains a TypeScript Playwright framework for the Rahul Shetty Academy order flow. Existing JavaScript exercises remain under `tests/`; framework tests use the `*.framework.spec.ts` naming convention so exploratory scripts do not run in CI.

## Structure

```text
pages/       Page Object Model classes
fixtures/    Shared authenticated Playwright fixtures
test-data/   Static JSON test data
utils/       Reusable data and date helpers
tests/       Framework specs and legacy exercises
```

## Setup

1. Copy `.env.example` to `.env.dev` and set `TEST_EMAIL` and `TEST_PASSWORD`.
2. Install dependencies with `npm install`.
3. Install browsers with `npx playwright install`.

Environment files are selected with `TEST_ENV` (`dev`, `staging`, or `prod`), for example `TEST_ENV=staging npm test`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm test` | Run framework tests on all browsers |
| `npm run test:headed` | Run with visible browsers |
| `npm run test:chromium` | Run Chromium only |
| `npm run report` | Open the HTML report |
| `npm run report:allure` | Generate and open the Allure report |

The Playwright config enables Chromium, Firefox, and WebKit, retries on CI, screenshots and videos on failure, traces on first retry, HTML reporting, and Allure reporting. CI runs on push, pull request, and nightly schedule; add `TEST_EMAIL` and `TEST_PASSWORD` as repository secrets.
