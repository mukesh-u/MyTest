import { chromium, test } from "playwright/test";

test("IRCTC ticket booking", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.irctc.co.in/nget/train-search");
  const title = await page.title();
  console.log(title);

  await page
    .locator('//button[@type="submit" and @class="btn btn-primary"]')
    .click();

  // from location
  const fromLocation = await page.locator(
    '//input[@role="searchbox" and @aria-controls="pr_id_1_list"]'
  );
  await fromLocation.fill("ltt");
  await page.click('//span[contains(text(), " LOKMANYATILAK T - LTT ")]');

  //to location
  const toLocation = await page.locator(
    '//input[@role="searchbox" and @aria-controls="pr_id_2_list"]'
  );
  await toLocation.fill("bsb");
  await page.click('//span[contains(text(), " VARANASI JN - BSB ")]');

  //date
  await page
    .locator(
      '//p-calendar[@aria-label="Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory."]'
    )
    .click();

  await page.locator('//td[.//a[normalize-space(text())="9"]]').click();

  //selecting class
  const classDropdown = await page.locator("span.ui-dropdown-label");
  await classDropdown.first().click();
  const option = await page.locator('//li[@aria-label="AC 3 Tier (3A)"]');
  await option.click();

  //selecting quota
  await page
    .locator("(//span[contains(@class, 'ui-dropdown-label')])[2]")
    .click();
  await page.locator('//li[@aria-label="GENERAL"]').click();

  //searching trains
  await page.locator('//button[@label="Find Trains"]').click();
});
