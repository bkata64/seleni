const {By,Key,Builder} = require("selenium-webdriver");
//require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
options.addArguments('--profile-directory=Profile 1')
options.addArguments("user-data-dir=C:\\Users\\szeszi-pc\\AppData\\Local\\Google\\Chrome\\User Data\\");


async function example(){
 
    //var searchString = "Automation testing with Selenium and JavaScript";
    var searchString = "kutya";

    //To wait for browser to build and launch properly
     let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();      
     await sleep(1);
     //To fetch http://google.com from the browser with our code.
     //await driver.get("http://google.com");
         
     //To send a search query by passing the value in searchString.     
     
     await driver.findElement(By.name("q")).sendKeys(searchString); 
     await sleep(1); 
     await driver.findElement(By.name("q")).sendKeys(Key.RETURN);    
     
     //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:',title);  
     await sleep(3);
     //await new Promise(r => setTimeout(r, 2000));
     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}

async function sleep(mp) {
    await new Promise(r => setTimeout(r, mp*1000));
}

example()