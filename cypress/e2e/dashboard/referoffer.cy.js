import users from '../../fixtures/validlogin.json'
import referUsers from '../../fixtures/referoffer.json'
import referOffer from '../../pages/referOffer'
import LoginPage from '../../pages/LoginPage'

describe('Refer Offer Test', () => {

  Cypress.on('uncaught:exception', () => {
    return false
  })
  
  users.forEach((user) => {

    it(`should navigate to Refer Offer page for ${user.username}`, () => {

      referOffer.visit()

      cy.intercept('POST', '**/v1/auth/login').as('login')

      LoginPage.enterUsername(user.username)

      LoginPage.enterPassword(user.password)

     LoginPage.clickLogin()

      cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 200)

      cy.location('pathname', { timeout: 10000 })
        .should('eq', '/')

        referOffer.referPage()

        cy.location('pathname', { timeout: 15000 })
        .should('eq', '/refer-offer')

        referOffer.referButton()

         referUsers.forEach((referUser) => {
          referOffer.enterDetails(referUser.fullname, referUser.number, referUser.email)

        if(referUser.type === 'invalid'){
          referOffer.invalidWarn()
        }
        
      })
      // referOffer.leafletClick()
      referOffer.searchLocation(user.location)
      
      //  referOffer.closeClick()

      //   referOffer.termsButton()

    })
  })
})
