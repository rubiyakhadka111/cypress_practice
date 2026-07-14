class forgetPassword{
    elements = {
usernameInput: () => cy.get('input[name="username"]'),
        passwordInput: () => cy.get('input[name="password"]'),

        emailRadio: () => cy.get('input[name="row-radio-buttons-group"][value="email"]'),
        mobileRadio: () => cy.get('input[name="row-radio-buttons-group"][value="mobile"]')
    }
    visit() {
        cy.visit('/eservice-login')
    }
    forgetpw(){
        cy.get('a[href="/forgot_password"]')
  .should('be.visible')
  .click()
    }
    enterUsername(username){
        this.elements.usernameInput()
        .should('be.visible')
        .clear()
        .type(username)
    }
    enterPassword(password){
        this.elements.passwordInput()
        .should('be.visible')
        .clear()
        .type(password)
    }
    clickEmailRadio(){
        this.elements.emailRadio().click({ force: true })
    }
    clickMobileRadio(){
        this.elements.mobileRadio().click({ force: true })
    }
    typeEmail(email){
        cy.get('input[name="email"]')
        .should('be.visible')
        .type(email)
    }
    typeMobile(mobile){
        cy.get('input[name="mobile"]')
        .should('be.visible')
        .type(mobile)
    }
    visitForgot(){
       cy.visit('/forgot_password')
    }
    backto(){
         cy.get('button[type="button"]').should('be.enabled').click()
    }
}
export default new forgetPassword()