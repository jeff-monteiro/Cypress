import { userRegister } from './pageobjects/registerUser'


describe('Should visit the page and register a new user',  () => {
    before(() => {
        cy.visit(' http://www.way2automation.com/angularjs-protractor/banking/#/login')
    })

    it('Add a new customer', () => {

        cy.get(userRegister.bankManager).click()
        
        cy.get(userRegister.addCustomer).click()
        cy.get(userRegister.firstName)
            .type('New user')
            .should('have.value', 'New user')

        cy.get(userRegister.lastName)
            .type('Registered')
            .should('have.value', 'Registered')

        // cy.get(':nth-child(3) > .form-control')
        //     .type(60422500)
        //     .should('have.value', '60422500')

        // cy.get('form.ng-dirty > .btn')
        //     .click()
    })
})