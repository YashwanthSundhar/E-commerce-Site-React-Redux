
import { compose } from "redux"
import { ADD_TO_CART } from "./SiteAction"
import { REMOVE_FROM_CART } from "./SiteAction"

const InitalCartState ={
    CartItems:0,
    Amount:0,
    CartSummary:[]
}

const CartOverview = (state = InitalCartState, action) =>{
    const TotalSum = action.PayloadPrice * parseInt(action.payloadQuantity)
    const CartListItems ={
        ProductId:action.payloadId,
        Productname: action.payloadProductName,
        UserPurchaseName: action.payloadUserName,
        UserID:action.payloadUserId,
        Productsize:action.PayloadSize,
        ProductQuantity:action.payloadQuantity,
        NetPrice:TotalSum,
        ProductPrice:action.payloadDefaultPriceff
    }
 
    const RemoveSum = parseInt(action.payloadAmt) * parseInt(action.payloadQty)

    switch(action.type){
        case ADD_TO_CART:
            return{

                CartSummary:[...state.CartSummary,CartListItems],
                CartItems: state.CartItems + 1,
                Amount: state.Amount + TotalSum,
               
            }
        
        case REMOVE_FROM_CART:{
             const ListCopy = [...state.CartSummary]
             const Remove =  ListCopy.filter((Item)=>
                 Item.ProductId !== action.payloadRemove,
                //  Item.NetPrice == Item.NetPrice - action.payloadAmt
                 

             )
                return{
                

                CartSummary :[...Remove],
                CartItems: state.CartItems -1,
                Amount : state.Amount - RemoveSum
               
                
            }
            
          
        }
        default:
            return state
    }
}

export default CartOverview