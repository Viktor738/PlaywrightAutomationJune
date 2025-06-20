import {chromium, test as it} from '@playwright/test';

it.describe('HW FORM PAGE TYPE', () => {
    it('Fill all fields', async ({page}) => {
        await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        //await page.pause()
        await page.locator('[name="username"]').fill('Nick')
        await page.locator('[name="password"]').fill('test1234')
        await page.locator('[name="comments"]').fill('This is a test comment')
        await page.locator('[name="filename"]').setInputFiles('./loader_files/pasv.png')
        await page.locator('input[type="checkbox"][value="cb3"]').check()
        await page.locator('input[type="radio"][value="rd2"]').check()
        await page.selectOption('select[name="multipleselect[]"]', {label: 'Selection Item 1'})
        await page.selectOption('select[name="dropdown"]', {label: 'Drop Down Item 5'})
        await page.pause()
        await page.getByRole('button', {name: "submit"}).click()
        await page.pause()
      })

      it.describe('HW FORM TEST PAGE 2', () => {
        it.skip('Fill all fields', async ({page}) => {
            await page.goto("https://demoqa.com/automation-practice-form#google_vignette")
            await page.locator('#firstName').fill('Pitt')
            await page.locator('#lastName').fill('Tod')
            await page.locator('[class="mr-sm-2 form-control"]').fill('qwerty@gmail.com')
            await page.locator('label[for="gender-radio-1"]').click()
            await page.locator('[id="userNumber"]').fill('1234567890')
            await page.locator('#dateOfBirthInput').click()
            await page.selectOption('.react-datepicker__month-select', 'June')
            await page.selectOption('.react-datepicker__year-select', '1984')
            await page.click('.react-datepicker__day--005')
            await page.locator('#subjectsInput').fill('Note why not .')
            await page.click('.subjects-auto-complete__option >> text="Note why not"')
            await page.locator('label(for"hobbies-checkbox-1")').check()
            await page.setInputFiles('#uploadPicture', './loader_files/pasv.png')
            await page.locator('#currentAddress').fill('1234 Test St, Test City, NC 12345')
            await page.click('#submit')
            await page.pause() //NOT WORKING
            //await page.locator()
        })
      })
    })