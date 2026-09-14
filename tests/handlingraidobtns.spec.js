import {test , expect} from '@playwright/test';

test('Handling Radiobtns', async ({page})=>{

   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/", {
    waitUntil: "domcontentloaded"
    });
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const dropdown = page.locator('select.form-control');
    await userName.fill(process.env.PRACTICE_USERNAME ?? '');
    await password.fill(process.env.PRACTICE_PASSWORD ?? '');
    await dropdown.selectOption("Consultant");
    await page.locator('.radiotextsty').nth(1).click();
    console.log(await page.locator('.radiotextsty').nth(1).isChecked());
    await expect(page.locator('.radiotextsty').nth(1)).toBeChecked();
    await page.locator('#okayBtn').click();
    await page.locator('#terms').click();
    // console.log(await page.locator('#terms').isChecked());
    await expect(page.locator('#terms')).toBeChecked();
    // expect(await page.locator('#terms').isChecked()).toBeTruthy();
    console.log(await page.locator('#terms').uncheck());
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    // const signInBtn = page.locator('#signInBtn');
    // await signInBtn.click();
});
