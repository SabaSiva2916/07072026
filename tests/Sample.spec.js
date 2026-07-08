import { test, chromium, firefox } from "@playwright/test";
import data from "../tests/test_data/Login.json" with { type: "json" };

data.forEach((logindata) => {
  test(`Adacting browser open ${logindata.username}`, async () => {
    const browser = await chromium.launch(); //launches the browser
    const context = await browser.newContext(); // represent incongito mode of the browser
    const page = await context.newPage(); //Opens a new page in the browser
    //To launch the application
    await page.goto("https://adactinhotelapp.com/");
    await page.locator("#username").fill(logindata.username);
    await page.locator("#password").fill(logindata.password);
    await page.locator("#login").click();
    const title = await page.title();
    console.log("Title of the page ", title);
    const url = await page.url();
    console.log("Url ", url);
    await page.waitForTimeout(2000);
    let s = "javascript";
    let output = "";
    for (let i = s.length() - 1; i >= 0; i--) {
      output = output + s.charAt(i);
    }
    console.log(output);

    await browser.close();
  });
});
