const BasePage = require('./BasePage')
const By = require('selenium-webdriver').By;
/* const byDropdownOrigem = By.name('fromPort');
const byDropdownDestino = By.name('toPort');
const btnBuscar = By.css('input.btn.btn-primary'); */

class HomePage extends BasePage {

    constructor(driver) {
        super(driver)
        this.byDropdownOrigem = By.name('fromPort');
        this.byDropdownDestino = By.name('toPort');
        this.btnBuscar = By.css('input.btn.btn-primary');
    }

    async selecionarOrigem(origem) {
        let dropdownOrigem = await this.driver.findElement(this.byDropdownOrigem)
        await dropdownOrigem.findElement(By.css(`[value="${origem}"]`)).click()
    }

    async selecionarDestino(destino) {
        let dropdownDestino = await this.driver.findElement(this.byDropdownDestino)
        await dropdownDestino.findElement(By.css(`[value="${destino}"]`)).click()
    }

    async clicarBtnBuscar() {
        await this.driver.findElement(this.btnBuscar).click()
    }
}

module.exports = HomePage;