import users from '../../fixtures/validlogin.json'
import LoginPage from '../../pages/LoginPage.js'

describe('Quick Login Test', () => {

  Cypress.on('uncaught:exception', () => {
    return false
  })

  users.forEach((user) => {

    it(`should login with Remember Me and logout successfully for ${user.username}`, () => {

      LoginPage.visit()

      cy.intercept('POST', '**/v1/auth/login').as('login')

      LoginPage.enterUsername(user.username)

      LoginPage.enterPassword(user.password)

      LoginPage.qlogin()

      LoginPage.clickLogin()

      cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 200)

      cy.location('pathname', { timeout: 10000 })
        .should('eq', '/')

      LoginPage.out()

      cy.location('pathname', { timeout: 10000 })
        .should('eq', '/eservice-login')

      // cy.get('.MuiBox-root.jss264').find('[role="button"]').first().click()
    })

  })

})