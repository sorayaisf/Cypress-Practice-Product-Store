const staticVars = require('../static-variables')

class productPage {
    verifyAlertAppears(alertMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(alertMessage);
         })
    }
         //Click the 'Add to Cart' button
        clickAddtoCart(quantity){
            for (let i = 0; i < quantity; i++) {
                cy.xpath('//*[contains(text(),"Add to cart")]').click();
                this.verifyAlertAppears(staticVars.success_product_added.product_added)
            }
        }

        verifyCheckoutAlert(){
            this.verifyAlertAppears(staticVars.error_message.verifyCheckoutAlertForm)
        }
    
        //Click on the cart icon to view the cart
        verifyProductsAreAdded() {
            cy.xpath('//*[contains(@href, "cart.html")]').click();
        }
    
        verifyProductInCart(productName) {
            productName.forEach((productName) => {
                cy.xpath(`//*[contains(text(),"${productName}")]`).should('be.visible');
            })
        }
    
        //Click the 'Place Order' button
        clickPlaceOrder(){
            cy.xpath('//*[contains(text(), "Place Order")]').click();
    
        }
    
        //Fill out the checkout form
        nameForm(name) {
            cy.xpath('//*[@id="name"]').type(name);
        }
        countryForm(country) {
            cy.wait(1000);
            cy.xpath('//*[@id="country"]').type(country);
        }
        cityForm(city) {
            cy.xpath('//*[@id="city"]').type(city);
        }
        cardForm(card) {
            cy.xpath('//*[@id="card"]').type(card);
        }
        monthForm(month) {
            cy.xpath('//*[@id="month"]').type(month);
        }
        yearForm(year) {
            cy.xpath('//*[@id="year"]').type(year);
        }
    
        //Complete purchase
        completePurchase(){
            cy.xpath('//*[contains(text(),"Purchase")]').click();
            cy.xpath('//h2[contains(text(),"Thank you for your purchase!")]').should('be.visible');
            cy.wait(2000);
            cy.xpath('//*[contains(text(),"OK")]').click();
        }

        //remove product 
        removeProductFromCart(productName, quantityToRemove) {
            this.verifyProductInCart(productName);

            for(let i = 0; i < quantityToRemove; i++) {
                // cy.xpath(`//*[contains(text(),"${productName}")]//*[contains(text(),"Delete")]`).click();
                cy.xpath(`//*[contains(text(),"${productName}")]/following-sibling::*/*[contains(text(),"Delete")]`).first().click();
                cy.wait(500)
            }
        }

        verifyProductCount(productName, productCount) {
            cy.xpath(`//*[contains(text(),"${productName}")]`).should('have.length', productCount);
        }

}

module.exports = new productPage();