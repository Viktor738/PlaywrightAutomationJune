import {test as setup, expect} from '@playwright/test';

const authFile:string = "./.auth/user.json"
setup('authentication', async ({page}) => {
    // Navigate to the login page
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill('MichaelPasv')
    await page.getByRole('textbox', { name: 'Password' }).fill('m!chael12SH')
    await page.locator('#login').click();
    // Verify that the user is logged in
    await page.waitForURL('https://demoqa.com/profile');
    await expect(page.locator('[id="userName-value"]')).toHaveText('MichaelPasv');

    //Save all steps to storageState
    await page.context().storageState({path: authFile})

  
})