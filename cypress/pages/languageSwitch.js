class languageSwitch{

    elements ={
        engImage: () => cy.get('img[src="/images/np.png"]'),
        nepaImage: () => cy.get('img[src="/images/uk.png"]')
    }
    visit(){
        cy.visit('/eservice-login')
    }
    ukImage(){
        this.elements.engImage()
        .should('be.visible')
      .click()
    }
    nepImage(){
        this.elements.nepaImage()
        .should('be.visible')
        .click()
    }
}
export default new languageSwitch()