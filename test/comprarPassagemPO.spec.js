const HomePage = require('../pageObjects/HomePage');
const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const assert = require('chai').assert;
require('chromedriver')

const massa = require('../vendors/json/massa')

describe('Comprar Passagem via Blazedemo - Page Object', () => {

    let driver;
    const options = new chrome.Options()

    beforeEach(() => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build()
        driver.manage().setTimeouts({ implicit: 10000 });
        driver.manage().window().maximize();
    })

    afterEach(() => {
        driver.quit();
    })

    it('Comprar Passagem', async() => {
        await driver.get('https://blazedemo.com')
        
        const homePage = new HomePage(driver);
        await homePage.selecionarOrigem('Boston')
        await homePage.selecionarDestino('Dublin')
        await homePage.clicarBtnBuscar()
        assert.equal(await homePage.getTitle(), 'BlazeDemo - reserve')
        await homePage.driver.sleep(2000)
    })

    it.each(massa.array.map(elemento => [
        elemento.origem,
        elemento.destino
        ])) 
        
        ('Comprar Passagem entre %s e %s - Data Driven', async(origem, destino) => {
        await driver.get('https://blazedemo.com')
        
        const homePage = new HomePage(driver);
        await homePage.selecionarOrigem(origem)
        await homePage.selecionarDestino(destino)
        await homePage.clicarBtnBuscar()
        assert.equal(await homePage.getTitle(), 'BlazeDemo - reserve')
        await homePage.driver.sleep(2000)
    })
})