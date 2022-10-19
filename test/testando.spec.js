const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const assert = require('chai').assert;

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
    
  it('Pesquisar webdriver - Com clique', done => {
    driver.get('https://www.google.com')
    .then(() => driver.findElement(By.name('q')).sendKeys('webdriver'))
    .then(() => driver.sleep(5000))
    .then(() => driver.findElement(By.name('btnK')).click())
    // .then(() => driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER))
    .then(() => driver.sleep(5000))
    .then(() => driver.getTitle())
    .then(title => {
      assert.equal(title, 'webdriver - Pesquisa Google');
    })
    .then(done)
    .catch(err => done(err));
  })

  it('Pesquisar Iterasys - Com Enter', done => {
    driver.get('https://www.google.com')
    .then(() => driver.findElement(By.name('q')).sendKeys('Iterasys'))
    .then(() => driver.sleep(5000))
    .then(() => driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER))
    .then(() => driver.sleep(5000))
    .then(() => driver.getTitle())
    .then(title => {
      assert.equal(title, 'Iterasys - Pesquisa Google');
    })
    .then(done)
    .catch(err => done(err));
  })
})


