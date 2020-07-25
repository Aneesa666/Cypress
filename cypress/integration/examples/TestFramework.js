///<reference types ="cypress"/>
///<reference types ="cypress-iframe"/>
//import { data } from 'cypress/types/jquery'
import 'cypress-iframe'
import HomePage from '../../support/pageObjects/HomePage'
import Products from '../../support/pageObjects/Products'
import PCheckoutPage from '../../support/pageObjects/CheckoutPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
import PurchasePage from '../../support/pageObjects/PurchasePage'
describe('My First Framework', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        })
    })
    it('purchase from ecomm site', function() {
        //Cypress.config('defaultCommandTimeout',8000)
        // cy.log(this.data)
        const hp = new HomePage();
        const prod = new Products();
        const cp = new CheckoutPage();
        const pp = new PurchasePage();
        cy.visit(Cypress.env('url') + "/angularpractice/")
        hp.getName().type(this.data.name)
        hp.getEmail().type(this.data.email)
        hp.getCheckBox().check()
        hp.getRadio().check()
        hp.getTwoWayBind().should('have.value', 'aneesa')
        hp.getEntrePreneurRadio().should('be.disabled')
        hp.getName().should('have.attr', 'minlength', '2')

        hp.getShopButton().click()

        this.data.productName.forEach(function(product) {
            cy.selectProduct(product)
        })


        prod.getCheckout().click()
        var sum = 0;
        cp.getAmount().each((e1, index, list) => {
            var res = e1.text()
            res = res.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function() {
            cy.log(sum)
        })
        cp.getTotalAmount().then(function(element) {
            const Amount = element.text()
            var res = Amount.split(" ")
            var total = res[1].trim()
            expect(sum).to.equal(Number(total))
        })
        cp.getCheckoutButton().click()
        pp.getCountry().type(this.data.country)
        Cypress.config('defaultCommandTimeout', 10000)
        pp.getSuggest().click()
        pp.getAgreeTerms().click({ force: true })
        pp.getPurchase().click()
        pp.getMessagePanel().then(function(element) {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })


})