class HomePage {
    getName() {
        return cy.get("input[name='name']:nth-child(2)")
    }
    getEmail() {
        return cy.get("input[name='email']")
    }
    getCheckBox() {
        return cy.get('#exampleCheck1')
    }
    getRadio() {
        return cy.get('#inlineRadio2')
    }
    getTwoWayBind() {
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getEntrePreneurRadio() {
        return cy.get('#inlineRadio3')
    }
    getShopButton() {
        return cy.get(':nth-child(2) > .nav-link')
    }
}
export default HomePage;