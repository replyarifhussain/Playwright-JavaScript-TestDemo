import { test as fixture } from '@playwright/test'
import HomePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import LoginPage from '../pages/loginPage'

const test = fixture.extend({
	homePage: async ({ page }, use) => {
		await use(new HomePage(page))
	},
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
})
export default test
