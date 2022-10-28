import { Given, When, Then } from "@cucumber/cucumber"
import { assert } from 'chai';
import HomePage = require("../../pageObjects/HomePage");

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
});

Then('carrega pagina de reservas', async function () {
    let title = await this.homePage.getTitle()
    assert.equal(title, 'BlazeDemo - reserve');
});