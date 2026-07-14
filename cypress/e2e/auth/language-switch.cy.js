import languageSwitch from "../../pages/languageSwitch"
describe('Language switch', () => {
     Cypress.on('uncaught:exception', () => {
    return false
  })

 it('should switch language to Nepali', () => {

  languageSwitch.visit()

  languageSwitch.ukImage()

    cy.contains('लगइन').should('be.visible')
  })
it('Should switch language to English', () =>{
    languageSwitch.visit()

    languageSwitch.nepImage()
    
    cy.contains('Login').should('be.visible')
})

  })