class services{

    elements ={
        close: () => cy.get('button[aria-label="close"]'),
        connectedDevice: () => cy.get('button[type="button"]'),
        internetUsuage: () => cy.get('button[type="button"]'),
        selectMonth: () => cy.get('div[aria-haspopup="listbox"]'),
        monthList: () => cy.get('li')
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
    internetUsuagePage(){
        this.elements.internetUsuage()
        .contains('Internet Usage')
        .click()
    }
    select(){
        this.elements.selectMonth()
        .click({force: true})
    }
    verifyMenuCount(expectedCount){
        this.elements.monthList()
        .should('have.length', expectedCount)
    }
}
export default new services()