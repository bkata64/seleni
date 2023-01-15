const {By,Key,Builder, DesiredCapabilities, ChromeOptions} = require("selenium-webdriver");
require("chromedriver");

async function example(){
 
    //var searchString = "Automation testing with Selenium and JavaScript";
    var searchString = "kutya";

    //To wait for browser to build and launch properly
     let driver = await new Builder().forBrowser("chrome").build();      

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://google.com");
     await new Promise(r => setTimeout(r, 2000));
     await driver.findElement(By.id("L2AGLb")).click();    
     //To send a search query by passing the value in searchString.     
     await new Promise(r => setTimeout(r, 2000));
     await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);     
     await new Promise(r => setTimeout(r, 2000));
     //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:',title);     
     await new Promise(r => setTimeout(r, 2000));
     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}

example()