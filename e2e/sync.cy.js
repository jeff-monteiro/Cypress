
describe('Waitings...', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Must wait element to available', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Works')
    })

    it.only('Must do retries', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Its working')
    })
    
})