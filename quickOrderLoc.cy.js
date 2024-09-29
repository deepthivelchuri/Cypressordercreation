export class quickOrderLoc{

static quickOrderLabelLoc(){
    return cy.get('[data-testing-id="link-quickorder"]')
}

static skuInputFieldLoc(){
    return cy.xpath("(//*[@id='jsonproductid']/following::input[@name='SKU_1']/following-sibling::ul[1]/preceding-sibling::input)[1]")
}

static skuInputAutoSugLoc(){
    let inputstr = "item id";
    return cy.xpath("//*[@class='search-suggest-results']/following::button[1]/following::span[contains(text(),'"+inputstr+"')]")
}

static skuInputQtyLoc(){
    return cy.get('.quick-order-rows-container > :nth-child(1) > .col-sm-2.form-group > .form-control')
}

static addToCartButtonLoc(){
   return cy.xpath("//*[@name='addToCart']")
}

static checkOutButtonLabelLoc(){
    return cy.xpath("//*[@class='btn btn-lg btn-block btn-primary form-progress-button']")
}



}