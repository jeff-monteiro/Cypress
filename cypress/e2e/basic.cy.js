describe('Cypress basic access', () => {
    it.only('Should visit a page and make assert on title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        //cy.title().should('be.equal', 'Campo de Treinamento')
        //cy.title().should('contains', 'Campo').debug()
        //cy.pause()

        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .and('contains', 'Treinamento')

        //TODO imprimir o log no console
        //TODO escrever o log em um campo de teste
    })

    it('Should find and interact with element', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})