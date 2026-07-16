class services{

    elements ={
        close: () => cy.get('button[aria-label="close"]'),
        connectedDevice: () => cy.get('button[type="button"]')
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
    connectedDevicePage(){
        this.elements.connectedDevice()
        .contains('Connected Device')
        .click()
    }
}
export default new services()