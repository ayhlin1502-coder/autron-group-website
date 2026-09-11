import { expect, test } from "playwright/test";

const routes = [
  "/",
  "/about",
  "/autron-trade",
  "/auzcare",
  "/autrongo",
  "/quarter-innovations",
  "/global-network",
  "/contact",
  "/en",
  "/en/about",
  "/en/autron-trade",
  "/en/contact"
];

for (const width of [320, 375, 768]) {
  test.describe(`responsive layout at ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } });

    for (const route of routes) {
      test(`${route} does not create horizontal page overflow`, async ({ page }) => {
        await page.goto(route);
        await expect(page.locator("body")).toBeVisible();

        const dimensions = await page.evaluate(() => ({
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth
        }));

        expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
      });
    }
  });
}
