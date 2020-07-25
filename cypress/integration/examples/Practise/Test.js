///<reference types ="cypress"/>
describe('My First Test', () => {
    it('add to cart', () => {



        cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').as('productloc')
        cy.get('@productloc').should('have.length', 4)
        cy.get('@productloc').eq(2).contains('ADD TO CART').click()
        cy.get('@productloc').each(($e1, index, list) => {
            var vegname = $e1.find('.product-name').text()
            if (vegname.includes('Cashews')) {
                $e1.find('button').click()
            }
        })
        cy.get('strong').eq(0).then(function(items) {
            var totalitems = items.text()
            expect(totalitems).to.equal('2')
        })
        console.log('validated items count')
        cy.get('.brand.greenLogo').then(function(logo) {
            cy.log(logo.text())
            cy.get('.brand.greenLogo').should('have.text', 'GREENKART')
        })
    })
})