"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const HomePage = require("../../pageObjects/HomePage");
(0, cucumber_1.Given)('acesso o BlazeDemo', async function () {
    await this.driver.get('https://blazedemo.com');
    this.homePage = new HomePage(this.driver);
});
(0, cucumber_1.When)('seleciono origem como {string}', async function (texto) {
    await this.homePage.selecionarOrigem(texto);
});
(0, cucumber_1.When)('seleciono destino como {string}', async function (texto) {
    await this.homePage.selecionarDestino(texto);
});
(0, cucumber_1.When)('clico em buscar passagens', async function () {
    await this.homePage.clicarBtnBuscar();
});
(0, cucumber_1.Then)('carrega pagina de reservas', async function () {
    let title = await this.homePage.getTitle();
    chai_1.assert.equal(title, 'BlazeDemo - reserve');
});
