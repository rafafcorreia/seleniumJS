import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { assert } from 'chai';
import HomePage = require("../../pageObjects/HomePage");
import { Builder } from "selenium-webdriver";
require("chromedriver")

Before(async function () {
    this.driver = await new Builder()
        .forBrowser('chrome')
        // .setChromeOptions(options)
        .build()
    this.driver.manage().setTimeouts({ implicit: 30000 });
    this.driver.manage().window().maximize();
    
});

After(async function () {
    await this.driver.quit()
})

Given('acesso o BlazeDemo', async function () {
    await this.driver.get('https://blazedemo.com')
    this.homePage = new HomePage(this.driver)
});


When('seleciono origem como {string}', async function (texto: string) {
    await this.homePage.selecionarOrigem(texto)
});


When('seleciono destino como {string}', async function (texto: string) {
    await this.homePage.selecionarDestino(texto)
});

When('clico em buscar passagens', async function () {
    await this.homePage.clicarBtnBuscar()
    await this.driver.sleep(3000)
});

Then('carrega pagina de reservas', async function () {
    let title = await this.homePage.getTitle()
    assert.equal(title, 'BlazeDemo - reserve');
});