import {test , expect} from '@playwright/test';

test('Handling Radiobtns', async ({page})=>{

   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/", {
    waitUntil: "domcontentloaded"
    });
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const dropdown = page.locator('select.form-control');
    const documentLink = page.locator("[href*='documents-request']");
    await userName.fill(process.env.PRACTICE_USERNAME ?? '');
    await password.fill(process.env.PRACTICE_PASSWORD ?? '');
    await dropdown.selectOption("Consultant");
    await page.locator('.radiotextsty').nth(1).click();
    console.log(await page.locator('.radiotextsty').nth(1).isChecked(), "Radio button clicked");
    await expect(page.locator('.radiotextsty').nth(1)).toBeChecked();
    await page.locator('#okayBtn').click();
    await page.locator('#terms').click();
    console.log(await page.locator('#terms').isChecked(), "Checkbox Clicked successfully");
    await expect(page.locator('#terms')).toBeChecked();
    expect(await page.locator('#terms').isChecked()).toBeTruthy();
    await expect(documentLink).toHaveAttribute('class',"blinkingText");
    console.log(await page.locator('#terms').uncheck());
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    const signInBtn = page.locator('#signInBtn');
    await signInBtn.click();

});
