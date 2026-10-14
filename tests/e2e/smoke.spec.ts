import { test, expect } from "@playwright/test";

test.describe("AR Tech Frontend Smoke Tests", () => {
  test("homepage renders main branding and primary navigation links", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/AR Tech/);
    await expect(page.locator("text=AR TECH")).toBeVisible();
    await expect(page.locator("text=Capabilities Engineered for Scale")).toBeVisible();
  });

  test("services page displays engineering capabilities", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText(/Technical Capabilities/);
  });

  test("contact page displays lead submission form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("text=Initiate a Project Inquiry")).toBeVisible();
  });
});
