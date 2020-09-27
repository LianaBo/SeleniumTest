
const {Builder, By, Key, until, } = require('selenium-webdriver');



(async function example() {
  let driver = new Builder().forBrowser('chrome').build();
  let link = 'http://suninjuly.github.io/file_input.html';
  try {
    driver.get(link);

    await driver.findElement(By.name('firstname')).sendKeys('Liana');
    await driver.findElement(By.name('lastname')).sendKeys('Kaanhf');
    await driver.findElement(By.name('email')).sendKeys('test@mail.ru');
    
    //загрузка файла в браузер

    let fiilePath = '/home/liana/Документы/file.txt';
    let fileInput = await driver.findElement(By.css("input[type ='file']")).sendKeys(fiilePath);

    
    let button = await driver.findElement(By.css('button'));
    button.click();

  } 
  
  finally {

     driver.sleep(30);  
     //driver.quit();
  }
})();
 