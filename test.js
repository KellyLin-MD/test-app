var webdriver = require ('selenium-webdriver'),

{ describe, it, after, before } = require('selenium-webdriver/testing');
    By = webdriver.By,
    untill = webdriver.untill;
    var driver;

decribe('librsry app scenarios',function(){
  this.timeout(50000);
  beforeEach(function(){
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('http://library-app.firebaseapp.com');
  });

  afterEach(function(){
    driver.quit();
  });

  it('Changes Button opacity upon email being filled out',function(){
    var submitBtn = driver.findElement(By.css('.btn-lg'));
    driver.findElement(By.css('input')).sendKeys('tj@vision-media.ca');
    driver.wait(function()
  {
    return submitBtn.getCssValue('opacity').then(function(result){
      return result ==='1';
    });
  }, 5000);
  });

    it('works with mocha',function(){
      var submitBtn = driver.findElement(By.css('.btn-lg'));
      driver.findElement(By.css('input')).sendKeys('tjca');
      submitBtn.click();
      driver.wait(untill.elementLocated(By.css('.albert-success')),5000).getText().then(function(txt){
        console.log("Albert success text is:" + txt);
      });

    });

    it('works with mocha',function(){
        driver.findElement(By.css('nav')).getText().then(function(txt){
          console.log(txt);
        });
    });
})
