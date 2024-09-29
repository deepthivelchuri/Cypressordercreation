//Launching site
import { loginactions } from "../Actions/loginactions.cy";
describe ('Suite name',()=>{
    
    beforeEach('before each',()=>{
        cy.viewport(1080, 780);
    })

    it('test name',()=>{
  
      //launching  the site
      cy.visit(ecommerce URL)
      cy.wait(8000);
      cy.viewport(1080, 780);
      loginactions.actusername();
      loginactions.actpassword();
      loginactions.actloginbutton();
    })
  
  })