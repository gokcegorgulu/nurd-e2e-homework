import { browser, by, element } from 'protractor';
import { Alert } from 'selenium-webdriver';


export class CoffeOrder {

 navigateTo() {
  return browser.get(browser.baseUrl) as Promise<any>;
  }

 getTitle(){
    return element(by.id('coffe-title')).getText()as Promise<string>;

  }

 addAmericano(){
    
     var americanoCoffee = element(by.css('body > app-root > app-coffe-order > div > div > div > div > div > div:nth-child(1) > div > div > button'));
     return americanoCoffee.click(); 

     /*var child = element(by.cssContainingText('.coffeeType' , coffee )).getWebElement();
      return child.getDriver().findElement(by.css('button')).click(); */
 
     

  }

 addWhite(){
    var whiteCoffee = element(by.css('body > app-root > app-coffe-order > div > div > div > div > div > div:nth-child(2) > div > div > button'));
    return whiteCoffee.click();

  }

 addChai(){
    var chaiCoffee = element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > button'));
    return chaiCoffee.click();
  }

 addLatte(){
    let latteCoffee = element(by.css('body > app-root > app-coffe-order > div > div > div > div > div > div:nth-child(4) > div > div > button'));
    return latteCoffee.click();  

  } 

 disabledButton(){
    return element(by.css('#buy-button')).isEnabled() 

  }

 price(){

    return element(by.css('body > app-root > app-coffe-order > div > div > div > div > p.font-size-24.price')).getText() as Promise<string>;
  }

  pressRemoveButton(){
   return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5) > div > div > div > button')).click(); 


  }

 clickremoveButton(coffeeText){
    const container = element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5)'));
    const coffeenumber = container.all(by.tagName('div'));

    for(let i = 0; i < coffeenumber.length ; i++) {
      coffeenumber.get(i).all(by.tagName('h6')).get(0).getText().then((text) => {
        if(text.includes(coffeeText)) {
          coffeenumber.get(i).all(by.tagName('button')).get(0).click();
          return;
        }
      });
    }


  }


 clickBuyButton(){
    var buyButton  = element(by.css('body > app-root > app-coffe-order > div > div > div > div > p:nth-child(7) > button'));
    return buyButton.click();

  }



    
    
  }


  



