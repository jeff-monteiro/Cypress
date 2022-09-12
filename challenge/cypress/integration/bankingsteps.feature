Feature: Banking Features

    I want to register a new customer and login as Bank Manager with it

    Scenario: Add a new customer
        Given I navigate to the homepage
        And Validate the title of the page
        When I click on the Bank Manager Login Button
        And I click on Add Customer button
        Then I typed dataUser
        And I click on submit button
        And I click on the home button


    Scenario: Login with a new customer
        Given I click on the home button
        And Validate the title of the page
        When I click on Customer Login Button
        And I will select the new customer
        And I click on Login Button
        Then I will check if the user is logged


    Scenario: Open Account
        Given I click on the home button
        And Validate the title of the page
        When I click on the Bank Manager Login Button
        And I click on the Open Account Button
        Then I select the customer
        And I select the currency type
	    And I click on the Process Button
	    Then I validate the message

    
    

    
    

        