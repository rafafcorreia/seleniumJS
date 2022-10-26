const HomePage = require('../pageObjects/HomePage');
const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const assert = require('chai').assert;
require('chromedriver')

describe('Comprar Passagem via Blazedemo - Page Object', () => {

    let driver;
    const options = new chrome.Options().headless()

    beforeEach(() => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build()
        driver.manage().setTimeouts({ implicit: 30000 });
        driver.manage().window().maximize();
    })

    afterEach(() => {
        driver.quit();
    })

    it('Comprar Passagem', async () => {
        await driver.get('https://blazedemo.com')
        
        const homePage = new HomePage(driver);
        await homePage.selecionarOrigem('Boston')
        await homePage.selecionarDestino('Dublin')
        await homePage.clicarBtnBuscar()
        assert.equal(await homePage.getTitle(), 'BlazeDemo - reserve')
    })
})