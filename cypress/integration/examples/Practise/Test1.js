///<reference types ="cypress"/>
///<reference types ="cypress-iframe"/>
import 'cypress-iframe'
describe('My second Test', () => {
    it('test webelements!', () => {
        //https://rahulshettyacademy.com/angularpractice/
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        cy.get('#checkBoxOption2').check()
        cy.get('#checkBoxOption2').uncheck()
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
        cy.get('#checkBoxOption2').should('not.be.checked')
        cy.get('#checkBoxOption1').should('be.checked')
        cy.get('#checkBoxOption3').should('be.checked').and('have.value', 'option3')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')
        cy.get('#autocomplete').type('uni')
        cy.get('.ui-menu-item').each(($e1, index, list) => {
            if ($e1.text() == 'United States (USA)') {
                $e1.click()
            }
        })
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('input[type="radio"').check(['radio1', 'radio3'])

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str1) => {
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')

        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        cy.go('back')

        cy.get('tr td:nth-child(2)').each(($e1, index, list) => {
            var text = $e1.text()
            if (text.includes('python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')

                })
            }

        })
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')

        /* cy.get('#openwindow').then(function(hree1f) {
             const url = hree1f.prop('href')
             cy.visit(url)




         })*/
        // cy.get('#openwindow').invoke('removeAttr', 'target').click()
        //  cy.go('back')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('.nav-outer.clearfix li a').eq(2).click()

    })


})