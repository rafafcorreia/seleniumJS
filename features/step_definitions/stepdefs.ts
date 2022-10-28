import { Given, When, Then } from "@cucumber/cucumber";
const { By, Key } = require('selenium-webdriver');
import { assert } from 'chai';


Given('que eu acesso o Google', async function () {
    await this.driver.get('https://www.google.com')
});


When('clico na barra de Busca', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.name('q')).click()
});

When('digito {string}', async function (texto: string) {
    await this.driver.findElement(By.name('q')).sendKeys(texto)
});

When('pressiono Enter', async function () {
    await this.driver.findElement(By.name('q')).sendKeys(Key.ENTER)
});

Then('aparece a pagina de resultado {string}', async function (texto: string) {
    let title = await this.driver.getTitle()
    assert.equal(title, `${texto} - Pesquisa Google`);
});