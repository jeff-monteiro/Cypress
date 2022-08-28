describe('Cypress basic access', () => {
    it('Should visit a page and make assert on title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contains', 'Campo')

        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .should('contains', 'Treinamento')
    })
})