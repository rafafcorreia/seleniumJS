const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('chromedriver')
const chrome = require('selenium-webdriver/chrome')

describe('Comprar Passagem', function () {
    // this.timeout(30000)
    let driver
    let vars
    const options = new chrome.Options().headless()

    beforeEach(async function () {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build()
        driver.manage().setTimeouts({ implicit: 30000 })
        driver.manage().window().maximize()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })
    it.only('Comprar Passagem', async function () {
        await driver.get("https://www.blazedemo.com/")
        await driver.findElement(By.name("fromPort")).click()
        {
            const dropdown = await driver.findElement(By.name("fromPort"))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }
        await driver.findElement(By.name("toPort")).click()
        {
            const dropdown = await driver.findElement(By.name("toPort"))
            await dropdown.findElement(By.xpath("//option[. = 'Cairo']")).click()
        }
        await driver.findElement(By.css(".btn-primary")).click()
        await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
        await driver.findElement(By.id("cardType")).click()
        {
            const dropdown = await driver.findElement(By.id("cardType"))
            await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
        }
        await driver.findElement(By.id("rememberMe")).click()
        await driver.findElement(By.id("inputName")).click()
        await driver.findElement(By.id("inputName")).sendKeys("Juca Pato")
        await driver.findElement(By.css(".control-group:nth-child(2)")).click()
        await driver.findElement(By.css(".btn-primary")).click()
        assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
        assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
    })
})