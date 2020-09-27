const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = new Builder().forBrowser('chrome').build();
  let link = 'http://suninjuly.github.io/math.html';
  try {
      driver.get(link);
 
      //проверяем есть ли атрибут 'checked' у radiobuttons peopleRule

      let peopleRadio = await driver.findElement(By.id('peopleRule'));
      let peopleChecked = peopleRadio.getAttribute('checked').then(function(el){

        if(el){
            console.log('value of people radio : ' + el);
        } 
        else {
            console.log('People radio is not selected by default');
        }
      });

      //проверяем есть ли атрибут 'checked' у radiobuttons robotsRule

      let robotsRadio = await driver.findElement(By.id('robotsRule'));
      let robotsChecked = robotsRadio.getAttribute('checked').then(function(el){

        if(el){
            console.log('value of people radio : ' + el );
        } 
        else {
            console.log('People radio is not selected by default : ' + el);
        }
      });

      //проверяем есть ли атрибут disabled у кнопки 

      let button = await driver.findElement(By.css('[type="submit"]'));
      let buttonEnabled = button.getAttribute('disabled').then(function(el){
            console.log('value of button Submit : ' + el );
      });

      //проверяем через 10 сек появился ли атрибут disabled у кнопки 
      
      driver.sleep(10000);
      
      let buttonDisabled = button.getAttribute('disabled').then(function(el){
            console.log('value of button Submit : ' + el );
      });

  } 
  
  finally {
     driver.sleep(30);  
     //driver.quit();
  }
})();
