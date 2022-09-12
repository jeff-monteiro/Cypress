import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { pageActions } from '../pageobjects/pageActions'

Given('I navigate to the homepage', () => {
    pageActions.homePage()
})

And('Validate the title of the page', () => {
    pageActions.validateTitle()
})

When('I click on the Bank Manager Login Button', () => {
    pageActions.clickBankManagerButton()
})

And('I click on the Open Account Button', () => {
    pageActions.clickOpenAccountButton()
})

Then('I select the customer', () => {
    pageActions.selectUser()
})

And('I select the currency type', () => {
    pageActions.selectCurrency()
})

And('I click on the Process Button', () => {
    pageActions.clickProcessButton()
})

Then('I validate the message', () => {
    pageActions.validateMessage()
})