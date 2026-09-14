
//syntax for the playwright
// test('First Playwright test', function()
// {
    //step 1 -open browser
     //step 2 enter u/pswd
      //step 1 -Click
// });
// test('First Playwright test',async ()=>
// {

// });
const {test, expect} = require('@playwright/test');
test('example_1 Playwright test',async ({browser,page})=>
{
    // const context=browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://online.standardlife.com/secure/customer-authentication-client/customer/login");

    //get the titile - assertion
    console.log(await page.title());
    //to validate the titile
    // await expect (page).toHaveTitle("Standard Life UK Online Servicing");
    await page.locator('#userid').fill(process.env.STANDARDLIFE_USERNAME ?? '');
    await page.locator("[type='password']").fill(process.env.PRACTICE_PASSWORD ?? '');
    await page.locator('#submit').click();

});

test('example_2 Playwright test',async ({browser,page})=>
{
    // const context=browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //get the titile - assertion 
    console.log(await page.title());
    //to validate the titile
    // await expect (page).toHaveTitle("Standard Life UK Online Servicing");
    await page.locator('#username').fill(process.env.PRACTICE_USERNAME ?? '');
    await page.locator("[type='password']").fill(process.env.PRACTICE_PASSWORD ?? '');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

});

test('Browser context- validating error login',async ({browser})=>
{
    const context = await browser.newContext(); 
    const page = await context.newPage();
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //get the titile - assertion
    console.log(await page.title());
    //to validate the titile
    // await expect (page).toHaveTitle("Standard Life UK Online Servicing");
    await userName.fill(process.env.PRACTICE_USERNAME ?? '');
    await password.fill(process.env.PRACTICE_PASSWORD ?? '');
    await signInBtn.click();
    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(2).textContent());
    const allTtiles = await cardTitles.allTextContents();
    console.log(allTtiles);
});


test('practices to get titiles', async ({browser})=>
{
    const context= await browser.newContext();
    const page =  await context.newPage();
    const login = await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    const username = await page.locator('//*[@id="userEmail"]').fill(process.env.TEST_EMAIL ?? '');
    const pswd= await page.locator('//*[@id="userPassword"]').fill(process.env.TEST_PASSWORD ?? '');
    const loginbtn=await page.locator('//*[@id="login"]').click();
    const getpageTtiles = await page.locator("//p[text()='Automation Practice']").textContent();
    await console.log(getpageTtiles);
    const getTtiles=await page.locator("//div[contains(@class, 'card-body')]").first().textContent();
    const allTtiles = await page.locator("//div[contains(@class, 'card-body')]").first().allTextContents();
    await console.log(getTtiles);
    await console.log(allTtiles);
    await context.close();
    
});
