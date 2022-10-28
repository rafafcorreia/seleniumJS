"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const { By, Key } = require('selenium-webdriver');
const chai_1 = require("chai");
(0, cucumber_1.Given)('que eu acesso o Google', async function () {
    await this.driver.get('https://www.google.com');
});
(0, cucumber_1.When)('clico na barra de Busca', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.name('q')).click();
});
(0, cucumber_1.When)('digito {string}', async function (texto) {
    await this.driver.findElement(By.name('q')).sendKeys(texto);
});
(0, cucumber_1.When)('pressiono Enter', async function () {
    await this.driver.findElement(By.name('q')).sendKeys(Key.ENTER);
});
(0, cucumber_1.Then)('aparece a pagina de resultado {string}', async function (texto) {
    let title = await this.driver.getTitle();
    chai_1.assert.equal(title, `${texto} - Pesquisa Google`);
});
