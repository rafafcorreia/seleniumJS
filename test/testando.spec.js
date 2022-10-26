const webdriver = require('selenium-webdriver');
const HomePage = require('../pageObjects/HomePage')
const By = webdriver.By;
const assert = require('chai').assert;
require('chromedriver');

describe('Google', () => {
    let driver;

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build()
        driver.manage().setTimeouts({ implicit: 30000 });
    })

    afterEach(() => {
        driver.quit();
    })

    it('Pesquisar webdriver - Com clique', async () => {
        let tituloWebDriver;
        let cabecalho;

        await driver.get('https://www.google.com')
        await driver.findElement(By.name('q')).sendKeys('webdriver')
        await driver.findElement(By.name('btnK')).click()

        let title = await driver.getTitle()
        assert.equal(title, 'webdriver - Pesquisa Google');

        await driver.findElement(By.css('a[href^="https://chromedriver.chromium.org/"]')).click()
        tituloWebDriver = await driver.getTitle();
        cabecalho = await driver.findElement(By.css('span.Rn3Z1b')).getText();
        assert.equal(tituloWebDriver, 'ChromeDriver - WebDriver for Chrome');
        assert.equal(cabecalho, 'ChromeDriver');
    })

    it('Pesquisar Iterasys - Com Enter', async () => {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys(webdriver.Key.chord('Iterasys', webdriver.Key.ENTER));
        let title = await driver.getTitle()
        assert.equal(title, 'Iterasys - Pesquisa Google');
    })

    it.only('Comprar Passagem', async () => {
        await driver.get('https://blazedemo.com')
        await driver.sleep(2000)
        
        const homePage = new HomePage(driver);
        await homePage.selecionarOrigem('Boston')
        await homePage.selecionarDestino('Dublin')
        await homePage.driver.sleep(2000)
        
        await homePage.clicarBtnBuscar()
        await homePage.driver.sleep(2000)
    })
})


