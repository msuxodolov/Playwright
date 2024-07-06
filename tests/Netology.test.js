const { test, expect } = require("@playwright/test");
const { email, password } = require("../user.js");

 test("authorization is positive", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.getByTestId('login-submit-btn').click();

  await expect(page.locator("h2")).toContainText("Моё обучение");
  await page.screenshot({ path: "screenshotSucces.png", fullPage: true });
});

 test("authorization is negative", async ({ page }) => {
   await page.goto("https://netology.ru/?modal=sign_in");
   await page.fill('[placeholder="Email"]', "Simonov@gmail.com");
   await page.getByPlaceholder('Пароль').fill('gfdgfdfg');
   await page.getByTestId('login-submit-btn').click();
 
 
   await page.getByTestId('login-error-hint').click();
   await page.screenshot({ path: "screenshotFailed.png", fullPage: true });
  });