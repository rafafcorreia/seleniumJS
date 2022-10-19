const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const assert = require('chai').assert;
require('chromedriver');

describe('Google', () => {
    let driver;

    beforeEach(() => {
        driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build()
    })

    afterEach(() => {
        driver.quit();
    })
    
    it('Pesquisar webdriver - Com clique', async() => {
        let tituloWebDriver;
        let cabecalho;
        
        await driver.get('https://www.google.com')
        await driver.findElement(By.name('q')).sendKeys('webdriver')
        await driver.sleep(5000)
        await driver.findElement(By.name('btnK')).click()
        // await driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER)
        await driver.sleep(5000)
        let title = await driver.getTitle()
        assert.equal(title, 'webdriver - Pesquisa Google');
        
        await driver.findElement(By.css('a[href^="https://chromedriver.chromium.org/"]')).click()
        await driver.sleep(5000)
        tituloWebDriver = await driver.getTitle();
        cabecalho = await driver.findElement(By.css('span.Rn3Z1b')).getText();
        assert.equal(tituloWebDriver, 'ChromeDriver - WebDriver for Chrome');
        assert.equal(cabecalho, 'ChromeDriver');
    })

    it('Pesquisar Iterasys - Com Enter', async() => {
        await driver.get('https://www.google.com');

        await driver.findElement(By.name('q')).sendKeys('Iterasys')
        await driver.sleep(5000)
        await driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER)
        await driver.sleep(5000)
        let title = await driver.getTitle()
        assert.equal(title, 'Iterasys - Pesquisa Google');
    })
})


