import {test , expect} from '@playwright/test';
import { sign } from 'node:crypto';

test.only('Handling Dropdowns', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    page.waitForTimeout(4000);
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const dropdown = page.locator('select.form-control');
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await dropdown.selectOption("Consultant");
    await page.pause();//it will pause the page to untill select the dropdown
    // const signInBtn = page.locator('#signInBtn');
    // await signInBtn.click();

});
