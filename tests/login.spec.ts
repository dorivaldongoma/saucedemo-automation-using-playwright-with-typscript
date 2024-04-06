import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
});

const errorMessages = [
    'Epic sadface: Username and password do not match any user in this service',
    'Epic sadface: Password is required',
    'Epic sadface: Username is required',
];

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

        const errorMessage = page.getByText(errorMessages[0]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT3 - The user login with valid username and empty password', async ({ page }) => {
        await page.locator("[name='user-name']").fill('standard_user');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[1]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT4 - The user login with invalid username and valid password', async ({ page }) => {
        await page.locator("[name='user-name']").fill('1234');
        await page.locator("[name='password']").fill('secret_sauce');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[0]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT5 - The user login with invalid username and password', async ({ page }) => {
        await page.locator("[name='user-name']").fill('1234');
        await page.locator("[name='password']").fill('1234');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[0]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT6 - The user login with invalid username and empty password', async ({ page }) => {
        await page.locator("[name='user-name']").fill('1234');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[1]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT7 - The user login with empty username and valid password', async ({ page }) => {
        await page.locator("[name='password']").fill('secret_sauce');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[2]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT8 - The user login with empty username and invalid password', async ({ page }) => {
        await page.locator("[name='password']").fill('1234');

        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[2]);
        await expect(errorMessage).toBeVisible();
    })

    test('CT9 - The user login with empty username and password', async ({ page }) => {
        await page.locator("[name='login-button']").click();

        const errorMessage = page.getByText(errorMessages[2]);
        await expect(errorMessage).toBeVisible();
    })

})