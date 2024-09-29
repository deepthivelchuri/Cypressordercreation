export class checkOutLoc{

    static invoiceAddressLoc(){
        return cy.get('.filter-option')
    }

    static continueCheckoutBtnloc(){
        return cy.xpath("//*[contains(text(),'Continue Checkout')]")
    }

    static agreeCheckBoxLoc(){
        return cy.xpath("//*[@id='terms-conditions-agree']")
    }

    static orderSubmitBtnLoc(){
        return cy.xpath("//button[1][contains(text(),'Submit Order')]")
    }

    static getOrderNumberLoc(){
        return cy.xpath("//*[contains(text(),'Your order number is:')]/following::strong[1]")
    }
        
    }