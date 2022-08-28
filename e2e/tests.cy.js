

describe('Should visit the page and register a new user',  () => {
    it('Visit page', () => {
        cy.visit(' http://www.way2automation.com/angularjs-protractor/banking/#/login')

        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass1"]').click()
    })
})