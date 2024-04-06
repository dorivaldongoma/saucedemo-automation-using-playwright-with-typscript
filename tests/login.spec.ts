import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Login tests', async () =>{

    test('CT1 - The user login with valid username and password', async ({ page }) => {
        await expect(page.getByText('Swag Labs')).toBeVisible();

        await page.locator("[name='user-name']").fill('standard_user');
        await page.locator("[name='password']").fill('secret_sauce');

        await page.locator("[name='login-button']").click();

        const productsPageTitle = page.locator(".header_secondary_container > span.title");
        await expect(productsPageTitle).toContainText("Products");
    })

})