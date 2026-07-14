class services{

    elements ={
        close: () => cy.get('button[aria-label="close"]'),
    }
    servicePage(){
        cy.contains('p', 'Services', { timeout: 15000})
        .should('be.visible')
        .click()
    }
    contactUpdate(){
        cy.contains('button', 'Contact Update')
        .should('be.visible')
        .click()
    }
    customerLocation(){
        cy.contains('h6', 'Customer Location')
        .click()
    }
    closeBtn(){
        this.elements.close()
        .first()
        .click({ force: true })
    }
}
export default new services()