import { CHANGE_STATE_MODAL_SHOPPING_CART } from "./types"


export const ModalReducer = ( state , action ) => {
  const {payload , type} = action
    switch(type){
      case CHANGE_STATE_MODAL_SHOPPING_CART:
        return{
          ...state,
          modalShoppingCart: payload
        }
      default:
        return{
          state
      }
    }
  
} 