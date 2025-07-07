import { test, expect } from "@playwright/test";

test("Go to page and verify the title", async ({ page }) => {
  await page.goto("https://www.yatra.com/");
  const expectedPageTitle =
    "Flight, Cheap Air Tickets , Hotels, Holiday, Trains Package Booking - Yatra.com";
  const actualTitle = await page.title();
  console.log(expectedPageTitle);
  console.log(actualTitle);
  expect(actualTitle).toBe(expectedPageTitle);
  // page.close();
});

test("HomePage Test ", async ({ page }) => {
  await page.goto("https://www.yatra.com/");
  const input = await page.locator('p[title="New Delhi"]');
  await input.click();
  const fromField = await page.locator(
    "//input[@id='input-with-icon-adornment']"
  );
  await fromField.fill("Patna");
  await page.getByText("Patna, (PAT)").click();

  const input2 = await page.locator('p[title="Mumbai"]');
  await input2.click();
  const toField = await page.locator(
    "//input[@id='input-with-icon-adornment']"
  );
  await toField.fill("Chennnai");
  await page.getByText("Chennai, (MAA)").click();

  //selecting the departure-date
  const departureDateCalender = await page.locator(
    '//div[@class="css-w7k25o"]'
  );
  await departureDateCalender.click();

  const departureDate = await page.locator(
    '//div[@aria-label="Choose Friday, July 18th, 2025"]'
  );
  await departureDate.click();

  // selecting the return-date
  const returnDateCalender = await page.locator('//span[@class="css-xf2jy5"]');
  await returnDateCalender.click();
  const returnDate = page.locator(
    '//div[@aria-label="Choose Friday, July 25th, 2025"]'
  );
  await returnDate.click();

  //Clicking this button
  await page.locator('//button[contains(., "Search")]').click();

  //Asserting open page

  await page.waitForTimeout(10000);

  //   await page.waitForURL(
  //     "https://flight.yatra.com/air-search-ui/dom2/trigger?flex=0&viewName=normal&source=fresco-flights&type=R&class=Economy&ADT=1&CHD=0&INF=0&noOfSegments=1&origin=PAT&originCountry=IN&destination=MAA&destinationCountry=IN&flight_depart_date=18/07/2025&arrivalDate=25/07/2025"
  //   );

  const expectedTitle = "Challenge Validation";
  const pageTitle = await page.title();
  console.log("Current page's title:", pageTitle);
  expect(pageTitle).toBe(expectedTitle);
});
