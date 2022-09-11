// Here are my locators

export const locators = {

    userRegister: {

        bankManager: ':nth-child(3) > .btn',
        addCustomer: '[ng-class="btnClass1"]',
        firstNameField: ':nth-child(1) > .form-control',
        lastNameField: ':nth-child(2) > .form-control',
        postField: ':nth-child(3) > .form-control',
        customerButton: 'form.ng-dirty > .btn',
        homeButton: '.home'
    },

    loginNewUser: {
        loginNewCustomer: '.borderM > :nth-child(1) > .btn',
        boxSelection: '#userSelect',
        loginButton: 'form.ng-valid > .btn',
        userLogged: '.borderM > :nth-child(1)'
    },

    openAccount: {
        openAccountButton: '[ng-class="btnClass2"]',
        selectUser: '#userSelect',
        typeCurrency: '#currency',
        processButton: 'form.ng-dirty > button'
    },

}
