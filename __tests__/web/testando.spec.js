const { Builder, By, Key } = require('selenium-webdriver')
const assert = require('chai').assert;
const chrome = require('selenium-webdriver/chrome')
require('chromedriver');

describe('Google', () => {
    let driver;
    const options = new chrome.Options().headless()

    beforeEach(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build()
        driver.manage().setTimeouts({ implicit: 30000 });
        driver.manage().window().maximize();
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
        cabecalho = await driver.findElement(By.css('span.Rn3Z1b')).getText();
        tituloWebDriver = await driver.getTitle();
        await assert.equal(tituloWebDriver, 'ChromeDriver - WebDriver for Chrome');
        await assert.equal(cabecalho, 'ChromeDriver');
    })

    it('Pesquisar Iterasys - Com Enter', async () => {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys(Key.chord('Iterasys', Key.ENTER));
        let title = await driver.getTitle()
        assert.equal(title, 'Iterasys - Pesquisa Google');
    })
})


