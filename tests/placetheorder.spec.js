import {test , expect} from '@playwright/test';

test ('ordertheproduct', async ({page})=>{
    const productName = "ZARA COAT 3";
    const cards = page.locator(".card-body");
    const products = page.locator(".card-body b");
    const login =await page.goto("https://rahulshettyacademy.com/client", {
    waitUntil: "domcontentloaded"
    });
    const username = await page.locator('//*[@id="userEmail"]').fill("ajithkumarengineering@gmail.com");
    const pswd= await page.locator('//*[@id="userPassword"]').fill("Rahulshetty@4001");
    const loginbtn=await page.locator('//*[@id="login"]').click();
    await page.locator(".card-body b").first().waitFor();
    const allTtiles = await page.locator(".card-body b").allTextContents();
    console.log(allTtiles);
    const count = await products.count()
    console.log(count);
    for (let i = 0; i < count; ++i) {
    const text = await products.nth(i).textContent();
        if (text === productName) {
            console.log(productName + " found at index " + i);
            await cards.nth(i).getByText("Add To Cart").click();
            break;
        }
    }
    console.log("Added To Cart:" +productName);
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    console.log("Added Product visible in cart:", bool);
    // await page.locator("//button[contains(., 'Cart')]/i").first().click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");//it is used to fill the country

    const countryoptions= page.locator(".ta-results");
    await countryoptions.waitFor();
    const optioncount=await countryoptions.locator("button").count();
    await countryoptions.locator("button").first().waitFor();
    console.log( await countryoptions.locator("button").allTextContents());
    console.log(optioncount);
    const countryName=" India"
    for(let i=0; i<optioncount; ++i){
        const text= await countryoptions.locator("button").nth(i).textContent();
        if(text===countryName)
        {
            await countryoptions.locator("button").nth(i).click();
            break;
        }
    }
    console.log("Successfully selected:" +countryName);
    // await page.getByText('Place Order').click();
    // const toastMsg = await page.locator('.toast-title').textContent();
    // console.log("pop Up Msg:", toastMsg);
    await page.pause();

});