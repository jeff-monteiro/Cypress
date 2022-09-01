import { locators } from './pageobjects/registerUser'

describe('Should visit the page and register a new user',  () => {
    before(() => {
        cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    })
    
    
    it('Add a new customer', () => {

        cy.get(locators.userRegister.bankManager).click()
        
        cy.get(locators.userRegister.addCustomer).click()
        cy.get(locators.userRegister.firstName)
            .type('New user')
            .should('have.value', 'New user')

        cy.get(locators.userRegister.lastName)
            .type('Registered')
            .should('have.value', 'Registered')

        cy.get(locators.userRegister.postField)
            .type(60422500)
            .should('have.value', '60422500')

        cy.get(locators.userRegister.customerButton).click()
        cy.get('.home').click()
        // cy.on('window:alert', msgCustomerAlert => {
        // expect(msgCustomerAlert).to.be.equal('Customer added successfully with customer id :6', true)
        
       // })
        
    })

    it('Login with the new customer', () => {
        cy.get(locators.loginNewUser.loginNewCustomer).click()
        cy.get(locators.loginNewUser.boxSelection).select(['New user Registered'])
        cy.get(locators.loginNewUser.loginButton).click()
    })
})