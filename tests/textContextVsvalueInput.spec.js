import {test , expect} from '@playwright/test';

test.only('Handling child windows', async ({browser})=>{
    
    const context = await browser.newContext(); 
    const page = await context.newPage();
    const userName = page.locator("#username");
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/", {
    waitUntil: "domcontentloaded"
    });
    const documentLink = page.locator("[href*='documents-request']");
    
    const [NewPage] = await Promise.all([
    
       context.waitForEvent('page'),
       documentLink.click(),

    ])
   

    const text = await NewPage.locator(".red").first().textContent();
     console.log(text);
    const arrayText= text.split("@");
    console.log(arrayText);
    const domain= arrayText[1].split(" ")[0];
    console.log(domain);
   await NewPage.close();
   await page.locator("#username").fill(domain);
   await page.pause();
   console.log(await page.locator("#username").inputValue());
  // console.log(await page.locator("#username").textContent());
    // await page.pause();
});
