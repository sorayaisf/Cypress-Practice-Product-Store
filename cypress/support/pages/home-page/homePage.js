const locators = require('../home-page/home-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class homePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }

    clickHomePage() {
        cy.xpath(locators.datatestid.imageCompanyLogo).click();
    }

    clickSignUpMenu() {
        cy.xpath('//*[@id="signin2"]').click();
    }

    clickLoginMenu() {
        cy.xpath('//*[@id="login2"]').click();
    }

    verifySignUpModalAppears() {
        cy.xpath('//*[@id="signInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    verifyLoginModalAppears() {
        cy.xpath('//*[@id="logInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillUsername(username) {
        if (username == 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com'
        }
        cy.wait(5000);
        cy.xpath('//*[@id="sign-username"]', { timeout: 1000 }).should('be.visible');
        cy.xpath('//*[@id="sign-username"]', { timeout: 5000}).type(username);
    }

    fillPassword(password) {
        cy.xpath('//*[@id="sign-password"]').type(password);
    }

    fillLoginUsername(username) {
        if (username == 'random') {
            username = faker.internet.email();
        }
        cy.wait(5000);
        cy.xpath('//*[@id="loginusername"]', { timeout: 1000 }).should('be.visible');
        cy.xpath('//*[@id="loginusername"]', { timeout: 5000}).type(username);
    }

    fillLoginPassword(password) {
        cy.xpath('//*[@id="loginpassword"]').type(password);
    }

    clickSignUpButton() {
        cy.xpath(locators.datatestid.button('Sign up')).click();
    }

    clickLoginButton() {
        cy.xpath(locators.datatestid.button('Log in')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.user_alr_exists)
    }

    verifySignUpSuccessMessageAppears() {
        this.verifyAlertAppears(staticVars.success_message.signup)
    }

    verifyLoginWithUnregisterErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message_login.user_unregister)
    }

    verifyLoginWithInvalidPassword(){
        this.verifyAlertAppears(staticVars.error_message_login.wrong_password)
    }

    verifyLoginWithEmptyData(){
        this.verifyAlertAppears(staticVars.error_message_login.empty_creds_login)
    }

    signUp(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
        this.clickSignUpButton()
    }

    login(username, password) {
        if (username != '' && password != '') {
            this.fillLoginUsername(username);
            this.fillLoginPassword(password);
            this.clickLoginButton()
        } else {
            this.clickLoginButton()
        }
    }

    //Select Product Categories
    selectProductCategory(category) {
        cy.xpath(`//*[contains(text(),"${category}")]`).click();
    }

    //Select Product Name
    selectProduct(productName) {
        cy.xpath(`//*[contains(text(),"${productName}")]`).click();
    }

}

module.exports = new homePage();
