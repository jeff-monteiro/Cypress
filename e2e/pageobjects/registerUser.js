export const locators = {

    userRegister: {

        bankManager: ':nth-child(3) > .btn',
        addCustomer: '[ng-class="btnClass1"]',
        firstName: ':nth-child(1) > .form-control',
        lastName: ':nth-child(2) > .form-control',
        postField: ':nth-child(3) > .form-control',
        customerButton: 'form.ng-dirty > .btn'
    },

    loginNewUser: {
        loginNewCustomer: '.borderM > :nth-child(1) > .btn',
        boxSelection: '#userSelect',
        loginButton: 'form.ng-valid > .btn'
    }
    

}
