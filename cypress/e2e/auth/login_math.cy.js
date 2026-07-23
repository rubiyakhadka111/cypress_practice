import users from '../../fixtures/user.json'
import LoginPage from '../../pages/LoginPage'
import vusers from '../../fixtures/validlogin.json'

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

describe('practice API Response', () => {
    it('Print API response', () =>{
        users.forEach((vusers) => {

        LoginPage.visit()
        LoginPage.enterUsername(vusers.username)
        LoginPage.enterPassword(vusers.password)
        LoginPage.clickLogin()
        cy.intercept('POST', '**/v1/auth/login').as('login')
        cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 200)

        cy.intercept('GET', '**/v1/customer/profile').as('profile')
        // cy.wait('@profile').then((interception) => {

            // console.log(interception)
            // console.log(interception.response)
            // console.log(interception.response.body)
        //     console.log(interception.response.body.data.name)

        // })

        cy.wait('@profile').then(({response}) => {
        //    expect(response.statusCode).to.eq(200)
        //    expect(response.body.code).to.eq(200)
        //    expect(response.body.error).to.eq(false)
        //    expect(response.body.message).to.eq('Operation completed.')
        //    expect(response.body.response.username).to.eq('aakashduwal')

        // extract data
        const profile = response.body.response
         expect(profile.username).to.eq(vusers.username)
        })
    })
})
})