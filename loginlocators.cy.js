export class loginlocators{
    static username()
{
return cy.get('#ShopLoginForm_Login')

}

static password()
{
return cy.get('#ShopLoginForm_Password')

}

static loginbutton()
{
return cy.get('[name="login"]')

}

}

