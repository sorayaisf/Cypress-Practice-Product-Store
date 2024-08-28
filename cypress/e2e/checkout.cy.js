const homePage = require('../support/pages/home-page/homePage')
const productPage = require ('../support/pages/product-page/productPage')

describe('Checkout', () => {

    it ('add phone product to the cart and complete the checkout process', () => {
        homePage.goToHomePage()
        homePage.selectProductCategory('Phones')
        homePage.selectProduct('Nokia lumia 1520')
        productPage.clickAddtoCart(2)
        productPage.verifyProductsAreAdded()
        productPage.verifyProductInCart (['Nokia lumia 1520'])
        productPage.clickPlaceOrder()
        productPage.nameForm('Soraya')
        productPage.countryForm('Indonesia')
        productPage.cityForm('Jakarta')
        productPage.cardForm('1234 5678')
        productPage.monthForm('08')
        productPage.yearForm('2024')
        productPage.completePurchase()
    })

    it ('add laptop product to the cart and complete the checkout process', () => {
        homePage.goToHomePage()
        homePage.selectProductCategory('Laptops')
        homePage.selectProduct('Dell i7 8gb')
        productPage.clickAddtoCart(1)
        productPage.verifyProductsAreAdded()
        productPage.verifyProductInCart (['Dell i7 8gb'])
        productPage.clickPlaceOrder()
        productPage.nameForm('Naya')
        productPage.countryForm('Australia')
        productPage.cityForm('Sydney')
        productPage.cardForm('111 222')
        productPage.monthForm('10')
        productPage.yearForm('2023')
        productPage.completePurchase()
    })

    it ('add monitor product to the cart and complete the checkout process', () => {
        homePage.goToHomePage()
        homePage.selectProductCategory('Monitors')
        homePage.selectProduct('Apple monitor 24')
        productPage.clickAddtoCart(2)
        productPage.verifyProductsAreAdded()
        productPage.verifyProductInCart (['Apple monitor 24'])
        productPage.clickPlaceOrder()
        productPage.nameForm('Sakura')
        productPage.countryForm('Japan')
        productPage.cityForm('Tokyo')
        productPage.cardForm('233 787')
        productPage.monthForm('1')
        productPage.yearForm('2027')
        productPage.completePurchase()
    })

    it ('add products from different categories', () => {
        homePage.goToHomePage()
        homePage.selectProductCategory('Monitors')
        homePage.selectProduct('ASUS Full HD')
        productPage.clickAddtoCart(2)
        productPage.verifyProductsAreAdded()
        homePage.clickHomePage()
        homePage.selectProductCategory('Laptops')
        homePage.selectProduct('Sony vaio i7')
        productPage.clickAddtoCart(3)
        productPage.verifyProductsAreAdded()
        productPage.verifyProductInCart (['Sony vaio i7', 'ASUS Full HD'])
        productPage.clickPlaceOrder()
        productPage.nameForm('Andrew')
        productPage.countryForm('Canada')
        productPage.cityForm('Toronto')
        productPage.cardForm('215 222')
        productPage.monthForm('10')
        productPage.yearForm('2025')
        productPage.completePurchase()
    })

    it ('add product to the cart, remove some and complete the checkout process', () => {
        homePage.goToHomePage()
        homePage.selectProductCategory('Laptops')
        homePage.selectProduct('Dell i7 8gb')
        productPage.clickAddtoCart(2)
        productPage.verifyProductsAreAdded()
        productPage.verifyProductInCart (['Dell i7 8gb'])
        productPage.removeProductFromCart(['Dell i7 8gb'], 1)
        productPage.verifyProductCount(['Dell i7 8gb'], 1)
        productPage.clickPlaceOrder()
        productPage.nameForm('Naya')
        productPage.countryForm('Australia')
        productPage.cityForm('Sydney')
        productPage.cardForm('111 222')
        productPage.monthForm('10')
        productPage.yearForm('2023')
        productPage.completePurchase()
    })

     it ('checkout without any products in the cart', () => {
        homePage.goToHomePage()
        productPage.verifyProductsAreAdded()
        productPage.verifyProductInCart ([''])
        productPage.clickPlaceOrder()
        productPage.nameForm('Fara')
        productPage.countryForm('Autralia')
        productPage.cityForm('Sydney')
        productPage.cardForm('166 222')
        productPage.monthForm('11')
        productPage.yearForm('2022')
        productPage.completePurchase()
    })

});
  