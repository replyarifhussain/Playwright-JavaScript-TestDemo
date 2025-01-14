import BasePage from './basePage'
import { baseUrl } from '../config'
import fs from 'fs'
import {
	logo,
} from  "../pageobjects/loginPage"


const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}
}
export default LoginPage
