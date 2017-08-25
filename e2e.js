var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
driver.get('http://localhost:8080/PraiseButton/index.html');
var count = 1;
do{
	driver.findElement(By.id("container")).click();
	count++;
}
while(count <= 10);
driver.close();