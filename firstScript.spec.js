//const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const service = new chrome.ServiceBuilder('./chromedriver.exe');
//const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

const {By, Builder} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");

//const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
options.addArguments('--profile-directory=Profile 1')
options.addArguments("user-data-dir=C:\\Users\\szeszi-pc\\AppData\\Local\\Google\\Chrome\\User Data\\");


suite(function (env) {
  describe('First script', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').setChromeService(service).setChromeOptions(options).build();     
    });

    after(async () => await driver.quit());
    // after(async function () {
    //   await driver.quit();
    // });

    it('First Selenium script', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

      let title = await driver.getTitle();
      assert.equal("Web form", title);

      //await driver.manage().setTimeouts({implicit: 2000});
      

      let textBox = await driver.findElement(By.name('my-text'));
      let submitButton = await driver.findElement(By.css('button'));

      await textBox.sendKeys('Selenium');
      //await driver.manage().setTimeouts({implicit: 2000});
      await submitButton.click();

      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
      assert.equal("Received!", value);
      //await driver.manage().setTimeouts({implicit: 2000});
    });
    
  });
});