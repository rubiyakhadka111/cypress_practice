  import users from '../../fixtures/user.json'
import LoginPage from '../../pages/LoginPage.js'

  describe('Worldlink Customer Portal - Login Tests', () => {

    Cypress.on('uncaught:exception', () => {
      return false
    })

    
    users.filter(user => user.type === 'valid').forEach((user) =>  {

      it(`should login successfully with ${user.username}`, () => {

        LoginPage.visit()
        LoginPage.login(user.username, user.password)
        // LoginPage.clickLogin()

        // cy.url().should('not.include', 'eservice-login')
      })
    })

    users.filter(user => user.type === 'invalid').forEach((user) => {

       it(`should not login successfully with ${user.username}`, () => {

        LoginPage.visit()
        LoginPage.login(user.username, user.password)
        LoginPage.clickLogin()

          cy.contains('Invalid')
        .should('be.visible')
        
        cy.wait(5000)
        cy.url().should('include', 'eservice-login')
      })

    })
     users.filter(user => user.type === 'missing').forEach((user) => {
        it('should show "Fields Missing" message', () => {
          LoginPage.visit()

          if (user.username !== '') {
  LoginPage.enterUsername(user.username)
}

if (user.password !== '') {
  LoginPage.enterPassword(user.password)
}

        LoginPage.clickLogin()

        cy.contains('Missing')
        .should('be.visible')
        })
     })
  })