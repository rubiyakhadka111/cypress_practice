import footerPage from "../../pages/footerPage.js"
import LoginPage from "../../pages/LoginPage.js"
import users from "../../fixtures/validlogin.json"
import languageSwitch from "../../pages/languageSwitch.js"

describe('Footer Social Media Link', () =>{
    
    Cypress.on('uncaught:exception', () =>{
        return false
    })
    users.forEach((user) => {
    it('Should open facebook page', () => {
        LoginPage.visit()

        cy.intercept('POST', '**/v1/auth/login').as('login')
        LoginPage.enterUsername(user.username)
        LoginPage.enterPassword(user.password)
        LoginPage.clickLogin()

        cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 200)

        cy.location('pathname').should('eq', '/')

        languageSwitch.nepImage()
        languageSwitch.ukImage()

        footerPage.clickFacebook()
        footerPage.clickInsta()
        footerPage.clickTwitter()
        footerPage.clickYoutube()
    })
})
})