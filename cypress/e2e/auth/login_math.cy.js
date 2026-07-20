import users from '../../fixtures/user.json'
import LoginPage from '../../pages/LoginPage'

describe('Random login', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })
    it('Login using a random valid user', () =>{
        const validUsers = users.filter(username => username.type == 'valid')
        const randomIndex = Math.floor(Math.random() * validUsers.length)
        const randomUser = validUsers[randomIndex]

        cy.log(`Logging in as: ${randomUser.username}`)

        LoginPage.visit()
        LoginPage.enterUsername(randomUser.username)
        LoginPage.enterPassword(randomUser.password)
        LoginPage.clickLogin()

    })
})