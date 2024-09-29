//Launching site
import { checkOutAct } from "../Actions/checkOutAct.cy";
import { loginactions } from "../Actions/loginactions.cy";
import { myaccountact } from "../Actions/myaccountact.cy";
import { quickOrderAct } from "../Actions/quickOrderAct.cy";

describe ('Suite name',()=>{
    
    beforeEach('before each',()=>{
        cy.viewport(1080, 780);
    })

    it('test name',()=>{
  
      //launching  the site
      cy.visit('https://lululemon-uat.intershop.software/INTERSHOP/web/WFS/Lululemon-USB2B-Site/en_US/-/USD/ViewUserAccount-LogoutUser')
      cy.wait(8000);
      cy.viewport(1080, 780);
      loginactions.actusername();
      loginactions.actpassword();
      loginactions.actloginbutton();
      myaccountact.dropdown();
      quickOrderAct.quickOrderact();
      quickOrderAct.skuInputFieldAct();
      quickOrderAct.skuInputAutoSugAct();
      quickOrderAct.skuInputQtyAct();
      quickOrderAct.addToCartButtonAct();
      cy.wait(8000)
      quickOrderAct.checkOutButtonLabelAct();
      cy.wait(8000)
      checkOutAct.invoiceAddressAct();
      checkOutAct.continueCheckOutAct();
      cy.wait(8000)
      checkOutAct.selectShippingMethodByRadioAct();
      checkOutAct.continueCheckOutAct();
      cy.wait(8000)
      checkOutAct.continueCheckOutAct();
      cy.wait(8000)
      checkOutAct.agreeCheckBoxAct()
      checkOutAct.orderSubmitBtnAct()
      cy.wait(8000)
      checkOutAct.getOrderNumberAct();
    })
  
  })

