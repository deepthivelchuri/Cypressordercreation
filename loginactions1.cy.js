
import { loginlocators } from "../Locators/loginlocators.cy"
export class loginactions{
    static actusername()
    {
       return loginlocators.username().type(userid)
    }

    static actpassword()
{

    return loginlocators.password().type('password')
}

static actloginbutton()
{
    return loginlocators.loginbutton().click()

}

static dropdown(){
   
    cy.xpath("//*[@class='text']").each(($el, index, $list) => {
     debugger
     cy.log($el.text())
// $el is a wrapped jQuery element
if ($el.text() === 'Oregon- 1 sw Boweman DR, PO Box 1220, Beaverton Oregon 97006, United States') {
// wrap this element so we can
// use cypress commands on it
cy.wrap($el).scrollIntoView({duration:20}).click()
} 
})
}
}


