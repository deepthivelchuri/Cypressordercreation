export class myaccountloc{
    static selectlabel()
{
return cy.xpath("//*[@class='filter-option pull-left']")
}

static dropdownSelectValueLoc(){
    return cy.get('[data-original-index]')
}

}