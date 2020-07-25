class PurchasePage {
    getCountry() {
        return cy.get('#country')
    }
    getSuggest() {
        return cy.get('.suggestions > ul > li > a')
    }
    getPurchase() {
        return cy.get('.ng-untouched > .btn')
    }
    getAgreeTerms() {
        return cy.get('#checkbox2')
    }
    getMessagePanel() {
        return cy.get('.alert')
    }

}
export default PurchasePage;