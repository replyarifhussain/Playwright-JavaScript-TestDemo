import BasePage from './basePage'
import { baseUrl } from '../config'
import fs from 'fs'
import {
	loginLogo,
} from '../pageobjects/homePage'


const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class HomePage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}
	// async loginPageLogo() {
	// 	return await this.verifyElementAttribute(loginLogo, testData.notVisibleText)
	// }
}
export default HomePage
