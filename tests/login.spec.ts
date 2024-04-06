import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
});

test.describe('Login tests', async () =>{

    test('CT1 - The user login with valid username and password', async ({ page }) => {
        await page.locator("[name='user-name']").fill('standard_user');
        await page.locator("[name='password']").fill('secret_sauce');

        await page.locator("[name='login-button']").click();

        const productsPageTitle = page.locator(".header_secondary_container > span.title");
        await expect(productsPageTitle).toContainText("Products");
    })

    test('CT2 - The user login with valid username and invalid password', async ({ page }) => {
        await page.locator("[name='user-name']").fill('standard_user');
        await page.locator("[name='password']").fill('1234');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        await expect(errorMessage).toBeVisible();
    })
})