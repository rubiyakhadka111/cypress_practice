import forgotUsers from '../../fixtures/forgotpassword.json'
import forgetPassword from '../../pages/forgetPassword.js'
describe('Forgot Password', () =>{

     Cypress.on('uncaught:exception', () => {
    return false
  })

  forgotUsers.forEach((forgotUsers) => {

    it(`should verify forgot password for ${forgotUsers.username}`, ()=> {
        forgetPassword.visit()

       forgetPassword.forgetpw()

        cy.url().should('include', 'forgot_password')

        forgetPassword.enterUsername(forgotUsers.username)

        forgetPassword.clickEmailRadio()
        forgetPassword.typeEmail(forgotUsers.email)

       forgetPassword.clickMobileRadio()
       forgetPassword.typeMobile(forgotUsers.mobile)


    })
    it('should navigate back to login page', ()=>{
      // forgotPassword.forgetpw()
      forgetPassword.visitForgot()

    //   cy.get('button[type="button"]').should('be.enabled').click()
    forgetPassword.backto()
    })
}) })