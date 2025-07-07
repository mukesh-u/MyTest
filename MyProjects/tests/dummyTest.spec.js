import { test } from "playwright/test";

test("Testing dummy website for CI/CD", async ({ page }) => {
  await page.goto("http://www.example.com/");
  await page.getByText("Example Domain");
  await page.close();
});
