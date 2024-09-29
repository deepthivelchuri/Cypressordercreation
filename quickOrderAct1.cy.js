import { quickOrderLoc } from "../Locators/quickOrderLoc.cy"
export class quickOrderAct{

    static quickOrderact(){
        quickOrderLoc.quickOrderLabelLoc().click()
        
      }

      static skuInputFieldAct(){
        quickOrderLoc.skuInputFieldLoc().type(itemid in int)

    }

    static skuInputAutoSugAct(){
        quickOrderLoc.skuInputAutoSugLoc().click({force:true})
        
    }

    static skuInputQtyAct(){
        quickOrderLoc.skuInputQtyLoc().clear()
        cy.wait(8000)
        quickOrderLoc.skuInputQtyLoc().type('2')
    }

    static addToCartButtonAct(){
        quickOrderLoc.addToCartButtonLoc().click()
    }

    static checkOutButtonLabelAct(){
        quickOrderLoc.checkOutButtonLabelLoc().click()
    }

}