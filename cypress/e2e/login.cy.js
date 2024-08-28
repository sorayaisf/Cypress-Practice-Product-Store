const homePage = require('../support/pages/home-page/homePage')

describe("Login", () =>{
      
    it("login with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.login('soraya@test.com', '12345')
      })

    it("login with unregistered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.login('random', '12345')
        homePage.verifyLoginWithUnregisterErrorMessageAppears()
     })

    it("login with invalid password", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.login('soraya@test.com', '333')
        homePage.verifyLoginWithInvalidPassword()
    })

    it("login with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.login('', '')
        homePage.verifyLoginWithEmptyData()
    })



})