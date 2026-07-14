describe('Bill Payment Type', () => {

  it('should select Account Payment Bill', () => {

    cy.visit('/your-page')

    // Open the dropdown
    cy.get('#demo-simple-select-outlined').click()

    // Select the option
    cy.contains('li', 'Account Payment').click()

    // Verify selected value
    cy.get('#demo-simple-select-outlined')
      .should('contain', 'Account Payment')

  })

  it('should select Online Payment Bill', () => {

    cy.visit('/account-services')

    // Open the dropdown
    cy.get('#demo-simple-select-outlined').click()

    // Select the option
    cy.contains('li', 'Online Payment').click()

    // Verify selected value
    cy.get('#demo-simple-select-outlined')
      .should('contain', 'Online Payment')

  })

})