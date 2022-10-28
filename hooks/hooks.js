const { Before, After } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
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