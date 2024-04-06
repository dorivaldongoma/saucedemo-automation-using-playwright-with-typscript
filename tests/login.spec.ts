import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';

test.describe('Login tests', async () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
        productsPage = new ProductsPage(page);
    });

    const errorMessages = [
        'Epic sadface: Username and password do not match any user in this service',
        'Epic sadface: Password is required',
        'Epic sadface: Username is required'
    ];

    test('CT1 - The user login with valid username and password', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await productsPage.productsPageSubtitle();
    });

    test('CT2 - The user login with valid username and invalid password', async () => {
        await loginPage.login('standard_user', '1234');
        await loginPage.getErrorMessage(errorMessages[0]);
    });

    test('CT3 - The user login with valid username and empty password', async () => {
        await loginPage.login('standard_user', '');
        await loginPage.getErrorMessage(errorMessages[1]);
    });

    test('CT4 - The user login with invalid username and valid password', async () => {
        await loginPage.login('1234', 'secret_sauce');
        await loginPage.getErrorMessage(errorMessages[0]);
    });

    test('CT5 - The user login with invalid username and password', async () => {
        await loginPage.login('1234', '1234');
        await loginPage.getErrorMessage(errorMessages[0]);
    });

    test('CT6 - The user login with invalid username and empty password', async () => {
        await loginPage.login('1234', '');
        await loginPage.getErrorMessage(errorMessages[1]);
    });

    test('CT7 - The user login with empty username and valid password', async () => {
        await loginPage.login('', 'secret_sauce');
        await loginPage.getErrorMessage(errorMessages[2]);
    });

    test('CT8 - The user login with empty username and invalid password', async () => {
        await loginPage.login('', '1234');
        await loginPage.getErrorMessage(errorMessages[2]);
    });

    test('CT9 - The user login with empty username and password', async () => {
        await loginPage.login('', '');
        await loginPage.getErrorMessage(errorMessages[2]);
    });
});