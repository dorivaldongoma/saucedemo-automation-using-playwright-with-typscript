import {type Page, expect} from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.page.locator("[name='user-name']").fill(username);
        await this.page.locator("[name='password']").fill(password);
        await this.page.locator("[name='login-button']").click();
    }

    async getErrorMessage(errorText: string) {
        await expect(this.page.getByText(errorText)).toBeVisible();
    }
}