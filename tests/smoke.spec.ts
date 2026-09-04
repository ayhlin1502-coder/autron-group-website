import { expect, test } from "playwright/test";

const pageRoutes = [
  "/",
  "/about",
  "/autron-trade",
  "/auzcare",
  "/autrongo",
  "/quarter-innovations",
  "/global-network",
  "/contact",
  "/privacy-policy",
  "/cookie-policy"
];

for (const route of pageRoutes) {
  test(`${route} renders a single main heading`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
  });
}

test("robots and sitemap use the port 3100 local fallback", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  const sitemap = await request.get("/sitemap.xml");

  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("http://127.0.0.1:3100/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).not.toContain("/our-businesses");
});

test("desktop navigation exposes the business units and external websites", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await navigation.getByRole("button", { name: "我們的事業" }).click();

  await expect(navigation.getByRole("link", { name: "四大事業總覽" })).toHaveCount(0);
  await expect(navigation.getByRole("link", { name: "全球網絡" })).toHaveCount(0);
  await expect(navigation.getByRole("link", { name: /Autron Trade/ })).toBeVisible();
  await expect(navigation.getByRole("link", { name: /AuzCare/ })).toHaveAttribute("href", "https://auzcare.com");
  await expect(navigation.getByRole("link", { name: /AuzCare/ })).toHaveAttribute("target", "_blank");
  await expect(navigation.getByRole("link", { name: /Quarter Innovation/ })).toHaveAttribute("href", "https://quarter.com.tw");
  await expect(navigation.getByRole("link", { name: /Quarter Innovation/ })).toHaveAttribute("target", "_blank");

  await page.locator("main").click({ position: { x: 40, y: 220 } });
  await expect(navigation.getByRole("link", { name: /Autron Trade/ })).toHaveCount(0);
});

test("mobile navigation opens and expands the business menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();

  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(mobileNavigation).toBeVisible();
  await expect(mobileNavigation.getByRole("link", { name: "全球網絡" })).toHaveCount(0);
  await mobileNavigation.getByRole("button", { name: "我們的事業" }).click();
  await expect(mobileNavigation.getByRole("link", { name: "四大事業總覽" })).toHaveCount(0);
  await expect(mobileNavigation.getByRole("link", { name: /AuzCare/ })).toHaveAttribute("href", "https://auzcare.com");
  await expect(mobileNavigation.getByRole("link", { name: /Quarter Innovation/ })).toHaveAttribute("href", "https://quarter.com.tw");
});

test("about page presents the approved timeline, structure and core values", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByRole("heading", { name: /一步一腳印/ })).toBeVisible();
  await expect(page.locator("#milestones article")).toHaveCount(7);
  await expect(page.getByRole("heading", { name: "創立 Autron Trade" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "成立 Autron Go" })).toBeVisible();
  await expect(page.locator("#structure-heading")).toBeVisible();
  await expect(page.getByRole("heading", { name: "讓合作走得更遠的核心價值" })).toBeVisible();
});

test("homepage contains no empty hash links", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('a[href="#"]')).toHaveCount(0);
});

test("English language selection stays within the English route set", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.locator("header").getByRole("link", { name: "EN" }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole("navigation", { name: "Primary navigation" }).getByRole("button", { name: "Our Businesses" })).toBeVisible();
  await page.getByRole("link", { name: "Contact Us" }).first().click();
  await expect(page).toHaveURL(/\/en\/contact$/);
});

test("English pages present translated main content", async ({ page }) => {
  for (const route of ["/en", "/en/about", "/en/contact", "/en/autron-trade", "/en/auzcare", "/en/autrongo", "/en/quarter-innovations", "/en/global-network", "/en/privacy-policy", "/en/cookie-policy"]) {
    await page.goto(route);
    await expect(page.locator("main")).not.toContainText(/[\u4e00-\u9fff]/);
  }
});
