/// <reference types="cypress" />

describe('Work with basic elements', () => {

    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it.only('TextsFields', () => {
        cy.get('#formNome')
            .type('Jefferson Monteiro')
            .should('have.value', 'Jefferson Monteiro')
        
        cy.get('#elementosForm\\:sugestoes').type('textos e mais textos')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('????')
        
        cy.get('#formSobrenome')
            .type('Test12345{backspace}{backspace}')
            .should('have.value', 'Test123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })
})