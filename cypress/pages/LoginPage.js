class LoginPage{
    //Locators
    elements = {
        usernameInput: () => cy.get('input[name="username"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button[type="submit"]'),

        quickLog: () => cy.get('.MuiCheckbox-root'),
        logOut: () => cy.get('button[title="Logout"]')
        
    }
    visit() {
        cy.visit('/eservice-login')
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
    clickLogin(){
        this.elements.loginButton()
        .should('be.enabled')   
        .click()
    }
    login(username, password){
        this.visit()

        if(username !== ''){
            this.enterUsername(username)
        }
        if (password !== ''){
            this.enterPassword(password)
        }
        this.clickLogin()
    }
    qlogin(){
        this.elements.quickLog()
          .click({ force: true})
    }
    out(){
        this.elements.logOut()
        .should('be.visible')
        .click()
    }


}
export default new LoginPage()