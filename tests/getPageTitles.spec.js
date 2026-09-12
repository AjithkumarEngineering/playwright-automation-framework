const {test, expect} = require('@playwright/test');

test.only ('simpleexample' , async ({page})=>
{

    const login = await page.goto("https://rahulshettyacademy.com/client");
    const username = await page.locator('//*[@id="userEmail"]').fill("ajithkumarengineering@gmail.com");
    const pswd= await page.locator('//*[@id="userPassword"]').fill("Rahulshetty@4001");
    const loginbtn=await page.locator('//*[@id="login"]').click();
    // await page.waitForLoadState('networkidle');
    //otherrmethod to get titiles
    await page.locator(".card-body b").first().waitFor();
    const allTtiles = await page.locator(".card-body b").allTextContents();
   
    await console.log(allTtiles);

});



test('practices to get titiles', async ({browser})=>
{
    const context= await browser.newContext();
    const page =  await context.newPage();
    const login = await page.goto("https://rahulshettyacademy.com/client");
    const username = await page.locator('//*[@id="userEmail"]').fill("ajithkumarengineering@gmail.com");
    const pswd= await page.locator('//*[@id="userPassword"]').fill("Rahulshetty@4001");
    const loginbtn=await page.locator('//*[@id="login"]').click();
    const getpageTtiles = await page.locator("//p[text()='Automation Practice']").textContent();
    await console.log(getpageTtiles);
    const getTtiles=await page.locator("//div[contains(@class, 'card-body')]").first().textContent();
    const allTtiles = await page.locator("//div[contains(@class, 'card-body')]").first().allTextContents();
    await console.log(getTtiles);
    await console.log(allTtiles);
    context.close();
    page.close();
    
});