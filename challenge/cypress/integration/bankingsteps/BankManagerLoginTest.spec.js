import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { pageActions } from '../pageobjects/pageActions'

Given('I click on the home button', () => {
    pageActions.clickHomeButton()
})

And('Validate the title of the page', () => {
    pageActions.validateTitle()
})

When('I click on Customer Login Button', () => {
    pageActions.loginCustomerButton()
})

And('I will select the new customer', () => {
    pageActions.selectCustomer()
})

And('I click on Login Button', () => {
    pageActions.clickLoginButton()
})

Then('I will check if the user is logged', () => {
    pageActions.checkUserLogged()
})

