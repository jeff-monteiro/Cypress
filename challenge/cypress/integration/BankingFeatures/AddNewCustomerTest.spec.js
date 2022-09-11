import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { pageActions } from '../../pageobjects/pageActions'
    

Given('I navigate to the homepage', () => {
    pageActions.homePage()
})

And('Validate the title of the page', () => {
    pageActions.validateTitle()
})

When('I click on the Bank Manager Login Button', () => {
    pageActions.clickBankManagerButton()
})

And('I click on Add Customer button', () => {
    pageActions.clickAddCustomerButton()
})

Then('I typed dataUser', () => {
    pageActions.dataUser.firstNameField()
    pageActions.dataUser.lastNameField()
    pageActions.dataUser.postCodeField()
})

And('I click on submit button', () => {
    pageActions.submitButton()
})

And('I click on the home button', () => {
    pageActions.clickHomeButton()
})




    
    
    
