import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { pageActions } from '../../pageobjects/pageActions'

And('Validate the title of the page', () => {
    pageActions.validateTitle()
})

When('I click on Customer Login Button', () => {
    pageActions.loginCustomerButton()
})

Then('I will select the new customer', () => {
    pageActions.selectCustomer()
})

And('I click on Login Button', () => {
    pageActions.clickLoginButton()
})

And('I will check if the user is logged', () => {
    pageActions.checkUserLogged()
})

