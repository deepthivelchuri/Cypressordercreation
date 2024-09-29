import { myaccountloc } from "../Locators/myaccountloc.cy"
export class myaccountact{
    static dropdown(){

        myaccountloc.selectlabel().click() 

       cy.get('[data-original-index]').each(($el, index, $list) => {
         //   $el is a wrapped jQuery element
            cy.wrap($el).invoke('text').then((t)=>{
            const dropStr = CCaddress;
            if(t.includes(payment)){
               cy.wrap($el).click()
               
               cy.get("[class='btn btn-primary btn-block save-shipto-selection']").click()
               return false;
           }
           
         })
            
       })

        
    }


}