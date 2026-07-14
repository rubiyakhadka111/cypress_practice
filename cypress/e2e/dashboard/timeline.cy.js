import users from '../../fixtures/validlogin.json'
import LoginPage from '../../pages/LoginPage.js'
import timeline from '../../pages/timeline.js'

describe('Timeline', () =>{
    Cypress.on('uncaught:exception', () => {
        return false
    })
    users.forEach((user)=>
    it(`should navigate to Timeline page for ${user.username}`, () =>{
        LoginPage.visit()

        

        LoginPage.enterUsername(user.username)
        
        LoginPage.enterPassword(user.password)
        
        LoginPage.clickLogin()
        
        cy.intercept('POST', '**/v1/auth/login').as('login')

        cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 200)

        cy.location('pathname', {timeout: 1000})
        .should('eq', '/')

        timeline.timelinePage()

        timeline.previousButton(20)
        timeline.todayButton()
        timeline.nextButton(20)
        timeline.todayButton()
    })
    )
})