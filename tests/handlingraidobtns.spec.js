import {test , expect} from '@playwright/test';
import { sign } from 'node:crypto';

test('Handling Radiobtns', async ({page})=>{

   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/", {
    waitUntil: "domcontentloaded"
    });
    // await page.waitForTimeout(7000);
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const dropdown = page.locator('select.form-control');.0
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
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
    // await page.pause();
    // const signInBtn = page.locator('#signInBtn');
    // await signInBtn.click();
});
