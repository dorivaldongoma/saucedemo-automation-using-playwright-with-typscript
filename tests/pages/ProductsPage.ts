import {expect, type Page} from '@playwright/test';

let pageSubtitle = "Products";
export class ProductsPage {
    constructor(private page: Page) {}

    async productsPageSubtitle() {
        await expect(this.page.locator('.header_secondary_container > span.title')).toContainText(pageSubtitle);
    }
}