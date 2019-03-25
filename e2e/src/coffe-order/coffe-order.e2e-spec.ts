import { CoffeOrder } from './coffe-order.po'
import { async } from '@angular/core/testing';
import { browser, by, element } from 'protractor';

describe('coffe-order', () => {

  let coffeOrder;

  beforeAll( () => {

browser.get('/');

  })

 
  

  beforeEach(() => {
    coffeOrder = new CoffeOrder();
    coffeOrder.navigateTo();
  });


  it('should display page heading as Choose your best coffee ☕',  () => {

    expect (coffeOrder.getTitle()).toEqual('Choose your best coffee ☕');
    

  });

  it('should display Price: 10₺ after adding americano to cart',  () => {
    
    coffeOrder.addAmericano();
    browser.sleep(3000);
    expect (coffeOrder.price()).toContain('Price: 10 ₺');
    browser.sleep(3000); 

    /*coffeOrder.addCoffee('Americano');
    browser.sleep(3000);
    expect (coffeOrder.price()).toContain('Price: 10 ₺');
    browser.sleep(3000); */
    
  

  });

  it('should display Price: 15₺ after adding white to cart', () => {
    coffeOrder.addWhite();
    expect (coffeOrder.price()).toContain('Price: 15 ₺');
    browser.sleep(3000);


  });

  it('should disable button if user didn\'t select a coffee yet',  () => {
    expect(coffeOrder.disabledButton()).toBe(false);
    browser.sleep(3000);
   

  });


  it('should display Price: 40 ₺ for coffe 2 white and 1 americano after adding to cart',  () => {
     coffeOrder.addWhite();
     browser.sleep(3000);
     coffeOrder.addWhite();
     browser.sleep(3000);
     coffeOrder.addAmericano();
     browser.sleep(3000);
     expect (coffeOrder.price()).toContain('Price: 40 ₺');
     browser.sleep(3000);

  });

  it('should display Price: 12 ₺ after adding 1 latte to cart',   () => {
    coffeOrder.addLatte();
    browser.sleep(3000);
    expect (coffeOrder.price()).toContain('Price: 12 ₺');
    browser.sleep(3000);
    

  });


  it('should display Price: 25 ₺ after adding  2 white and 1 americano and removing one white', () => {
    coffeOrder.addWhite();
    coffeOrder.addWhite();
    coffeOrder.addAmericano();
    coffeOrder. pressRemoveButton();
    expect (coffeOrder.price()).toContain('Price: 25 ₺');
    browser.sleep(3000);

  });

  it('should display Price: 0 ₺ after adding 2 chaitea and 1 americano and removing all items in cart', () => {
    coffeOrder.addChai();
    coffeOrder.addChai();
    coffeOrder.addAmericano();
    coffeOrder. pressRemoveButton();
    coffeOrder. pressRemoveButton();
    coffeOrder. pressRemoveButton();
    expect (coffeOrder.price()).toContain('Price: 0 ₺');
    browser.sleep(3000);



  })


  it('should display disable button after adding 2 white and 1 americano and removing all coffees',  () => {
    coffeOrder.addWhite();
    coffeOrder.addWhite();
    coffeOrder.addAmericano();
    coffeOrder. pressRemoveButton();
    coffeOrder. pressRemoveButton();
    coffeOrder. pressRemoveButton();
    expect(coffeOrder.disabledButton()).toBe(false);
    browser.sleep(3000);



  })

  it(`should display Price: 41 ₺ after adding 1 white, 1 chaitea, 1 americano
   and should disable buy button after clicking buy button and accepting alert`, () => {
    coffeOrder.addAmericano();
    coffeOrder.addChai();
    coffeOrder.addWhite();
    coffeOrder.clickBuyButton();
    browser.switchTo().alert().accept();
    expect(coffeOrder.disabledButton()).toBe(false);
    browser.sleep(3000);



  })

  it('should display Price: 38 ₺ after adding 1 latte, 1 chaitea, 1 americano', () => {
    coffeOrder.addLatte();
    coffeOrder.addChai();
    coffeOrder.addAmericano();
    expect (coffeOrder.price()).toContain('Price: 38 ₺');
    browser.sleep(3000);

  })






})
