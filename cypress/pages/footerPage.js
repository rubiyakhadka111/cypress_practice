class footerPage{

    elements= {
        facebook: () => cy.get('a[href="https://www.facebook.com/wlink.np"]'),
        instagram: () => cy.get('a[href="https://www.instagram.com/wlinkcommunications/'),
        twitter: () => cy.get('a[href="https://x.com/WLinkComm'),
        youtube: () => cy.get('a[href="https://www.youtube.com/c/WorldLinkCommunications'),
    }
    clickFacebook(){
        this.elements.facebook()
        // .should('be.visible')
        .click({force: true})
    }
    clickInsta(){
        this.elements.instagram()
        .click()
    }
    clickTwitter(){
        this.elements.twitter()
        .click()
    }
    clickYoutube(){
        this.elements.youtube()
        .click()
    }
}
export default new footerPage()