import { locators } from './locators'

export const pageActions = {
    dataUser: {
        firstNameField(){
            cy.get(locators.userRegister.firstNameField).click()
                .type('Sherlock')
        },
        lastNameField(){
            cy.get(locators.userRegister.lastNameField).click()
                .type('Holmes')
        }, 
        postCodeField(){
            cy.get(locators.userRegister.postField).click()
                .type('NW1 6XE')  
        },
    },
    
    homePage(){
        cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    },
    
    clickBankManagerButton(){
        cy.get(locators.userRegister.bankManager).click()
    },
    
    validateTitle(){
        cy.title().should('equal', 'Protractor practice website - Banking App')
    },
    
    clickAddCustomerButton(){
        cy.get(locators.userRegister.addCustomer).click()
    },
    
    submitButton(){
        cy.get(locators.userRegister.customerButton).click()
    },
    
    clickHomeButton(){
        cy.get(locators.userRegister.homeButton).click()
    },
    
    loginCustomerButton(){
        cy.get(locators.loginNewUser.loginNewCustomer).click()
    },
    
    selectCustomer(){
        cy.get(locators.loginNewUser.boxSelection)
            .select(['Sherlock Holmes'])
    },
    
    clickLoginButton(){
        cy.get(locators.loginNewUser.loginButton).click()
    },
    
    checkUserLogged(){
        cy.get(locators.loginNewUser.userLogged)
            .should('contain', 'Sherlock Holmes')
    },
    
    clickOpenAccountButton(){
        cy.get(locators.openAccount.openAccountButton).click()
    },
    
    selectUser(){
        cy.get(locators.openAccount.selectUser).select('3', {force: true})
    },
    
    selectCurrency(){
        cy.get(locators.openAccount.typeCurrency).select(['Pound'])
    },
    
    clickProcessButton(){
        cy.get(locators.openAccount.processButton).click()
    },
    
    validateMessage(){
        cy.on('window:alert', msgCustomerAlert => {
            expect(msgCustomerAlert).to.be.equal('Account created successfully with account Number :1016', true)
        })
    }
}
