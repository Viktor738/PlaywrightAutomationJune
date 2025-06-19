import {chromium, test as it,expect} from '@playwright/test';

it.beforeAll(() => {
    console.log('Before all tests');
})
it.describe.skip('Form Page', () => {
    it.beforeEach(() => {
        console.log('Before each tests');
    });
    it.afterEach(() => {
        console.log('After each test');
    });
    it.afterAll(() => {
        console.log('After all tests');
    });

    it('Test 1', () => {
        console.log('Test 1');
    })
    it('Test 2', () => {
        console.log('Test 2');
    })
})

it.describe('FORM PAGE TYPE', () => {
    it('Fill all fields', async ({page}) => {
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();

        await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
        await page.pause()
        await page.locator('[id="name"]').fill('Mike')
        await page.locator('[class=\'w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5\'][type="email"]')
        .pressSequentially('michael@gmail.com', { delay:100 })
        await page.locator('input[placeholder="Password"]').fill('test1234')
        await page.locator('[for="companyname"]~[placeholder="Company"]').fill('LLC Happy')
        await page.locator('label:has-text("Website") ~ input#websitename').fill('https://www.happy.com')
        await page.selectOption('select[name="country"]', {label: 'United States'})
        await page.locator('label:has-text("City") ~ input#inputCity').fill('Orlando')
        await page.getByPlaceholder('Address 1').fill('123 Happy Lane')
        await page.getByPlaceholder('Address 2').fill('232 Happy Lane')
        await page.getByRole('textbox', {name:"Zip Code"}).fill('32825')
        await page.getByRole('textbox', {name:"State"}).fill('Florida')
        await page.getByRole('button', {name:"Submit"}).click()
        await expect(page.locator('h2:has-text("Input form validations")')).toBeVisible()
        await page.pause()

})
})