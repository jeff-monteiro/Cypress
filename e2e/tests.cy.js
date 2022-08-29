
describe('Should visit the page and register a new user',  () => {
    before(() => {
        cy.visit(' http://www.way2automation.com/angularjs-protractor/banking/#/login')
    })

    it('Add a new customer', () => {
        cy.get(':nth-child(3) > .btn').click()
        
        cy.get('[ng-class="btnClass1"]').click()
        cy.get(':nth-child(1) > .form-control')
            .type('New user')
            .should('have.value', 'New user')

        cy.get(':nth-child(2) > .form-control')
            .type('Registered')
            .should('have.value', 'Registered')

        cy.get(':nth-child(3) > .form-control')
            .type(60422500)
            .should('have.value', '60422500')

        cy.get('form.ng-dirty > .btn')
            .click()
    })
})