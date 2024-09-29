import { checkOutLoc } from "../Locators/checkOutLoc.cy"
export class checkOutAct{

      static invoiceAddressAct(){

        checkOutLoc.invoiceAddressLoc().click()
      
       cy.xpath("//*[@class='dropdown-menu inner']/li/a/span[1]").each(($el, index, $list) => {
         //   $el is a wrapped jQuery element
            cy.wrap($el).invoke('text').then((t)=>{
            if(t.includes("DC Move, 478 S King St")){
               cy.wrap($el).click()
               return false;
           }
           
         })
            
       })

        
    }

    static continueCheckOutAct(){
      checkOutLoc.continueCheckoutBtnloc().click()
    }

    static selectShippingMethodByRadioAct(){
      cy.xpath("//*[@type='radio']/following-sibling::span").each(($el, index, $list) => {
        //   $el is a wrapped jQuery element
           cy.wrap($el).invoke('text').then((t)=>{
           if(t.includes("Expedited (3 Business Days):")){
              cy.wrap($el).click()
              return false;
          }
          
        })
           
      })

    }


    static agreeCheckBoxAct(){
      checkOutLoc.agreeCheckBoxLoc().click()
    }

    static orderSubmitBtnAct(){
      checkOutLoc.orderSubmitBtnLoc().click()
    }

    static getOrderNumberAct(){
     checkOutLoc.getOrderNumberLoc().then((t)=>{
      console.log("Order number is: "+t.text());
     })
     
    }
    

}