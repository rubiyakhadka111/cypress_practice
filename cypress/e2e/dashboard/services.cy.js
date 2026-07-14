import users from '../../fixtures/validlogin.json'
import services from "../../pages/services.js";
import LoginPage from '../../pages/LoginPage.js';
describe('Services', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })
    users.forEach((user) => {
        it(`should navigate to Services pages for ${user.username}`, () => {
            LoginPage.visit()

            cy.intercept('POST', '**/v1/auth/login').as('login')

            LoginPage.enterUsername(user.username)
            LoginPage.enterPassword(user.password)
            LoginPage.clickLogin()

            cy.wait('@login')
              .its('response.statusCode')
              .should('eq', 200)

            cy.location('pathname', {timeout:1000})
            .should('eq', '/')

            services.servicePage()
            services.contactUpdate()
            services.customerLocation()
            services.closeBtn()
        })
    })

})