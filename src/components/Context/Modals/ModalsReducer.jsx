import { CHANGE_STATE_SHOPPING_CART, CHANGE_STATE_LOGIN_FORM , CHANGE_STATE_REGISTRATION_FORM, CHANGE_STATE_USER_PANEL } from "./types"


export const ModalReducer = ( state , action ) => {
  const {payload , type} = action
    switch(type){
      case CHANGE_STATE_SHOPPING_CART:
        return{
          ...state,
          modalShoppingCart: payload
        }
      case CHANGE_STATE_REGISTRATION_FORM:
        console.log("data" , payload)
        return{
          ...state,
          registrationForm: payload
        }
      case CHANGE_STATE_LOGIN_FORM:
        return{
          ...state,
          loginForm: payload
        }
      case CHANGE_STATE_USER_PANEL:
        return{
          ...state,
          userPanel: payload
        }
      default:
        return{
          state
      }
    }
  
} 