class CheckoutPage {
    getCheckoutButton() {
        return cy.get('.btn.btn-success')
    }
    getAmount() {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalAmount() {
        return cy.get('h3 strong')
    }
}
export default CheckoutPage;