class timeline{
    elements = {
        previousMonth: () => cy.get('button[title= "Previous month"]'),
        nextMonth: () => cy.get('button[title= "Next month"]'),
        today: () => cy.get('button[title= "This month"]')
    }
    timelinePage(){
        cy.contains('p', 'Timeline', {timeout: 15000})
        .should('be.visible')
        .click()
    }
    previousButton(times = 1) {

    for (let i = 0; i < times; i++) {
        this.elements.previousMonth()
            .click({ force: true })
    }

}
    nextButton(times = 1) {

    for (let i = 0; i < times; i++) {
        this.elements.nextMonth()
            .click({ force: true })
    }

}
    todayButton(){
        this.elements.today()
        .click({force: true})
    }
}
export default new timeline()