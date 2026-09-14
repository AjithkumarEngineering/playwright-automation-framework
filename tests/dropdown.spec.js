import {test , expect} from '@playwright/test';

test('Handling Dropdowns', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.waitForLoadState('domcontentloaded');
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const dropdown = page.locator('select.form-control');
    await userName.fill(process.env.PRACTICE_USERNAME ?? '');
    await password.fill(process.env.PRACTICE_PASSWORD ?? '');
    await dropdown.selectOption("Consultant");
    // const signInBtn = page.locator('#signInBtn');
    // await signInBtn.click();

});
