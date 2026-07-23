class referOffer{
    elements = {
        usernameEnter: () => cy.get('input[name="fname"]'),
        numberEnter: () => cy.get('input[name="fnumber"]'),
        emailEnter: () => cy.get('input[name="email"]'),

        leaflet: () => cy.get('.leaflet-container'),
        close: () => cy.get('button[aria-label="close"]'),
        search: () => cy.get('.glass')
    }
    visit(){
        cy.visit('eservice-login')
    }
    referPage(){
        cy.contains('p', 'Refer Offer', { timeout: 15000 })
        .should('be.visible')
        .click()
    }
    referButton(){
        cy.contains('button', 'Refer Now').should('be.visible').click()
    }
    enterDetails(fullname, number, email){
        this.elements.usernameEnter()
        .should('be.visible')
        .first()
        .clear()
        .type(fullname)

        this.elements.numberEnter()
        .should('be.visible')
        .clear()
        .type(number)

        this.elements.emailEnter()
        .should('be.visible')
        .clear()
        .type(email)
    }
    invalidWarn(){
        cy.contains('p', 'Please enter full name (first and last)')
          cy.contains('p', 'Please enter a valid mobile number')
          cy.contains('p', 'Please enter a valid email address')
    }
    searchLocation(location){
        this.elements.search()
        .click()
        .clear()
        .type(`${location}{enter}`)
    }
    leafletClick(){
        this.elements.leaflet()
        .should('be.visible')
        .click(240, 200)
    }
    closeClick(){
        this.elements.close()
        .click({ force: true })
    }
    termsButton(){
        cy.contains('button', 'View Terms & Condition')
        .should('be.visible')
        .click()
    }

}
export default new referOffer()