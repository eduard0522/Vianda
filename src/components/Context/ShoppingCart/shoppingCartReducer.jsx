
import { DELETE_PRODUCT, INSERT_PRODUCT, UPDATE_QUANTITY } from "./types";

const ShoppingCartReducer = (state, action) => {

  const { type , payload } = action

  switch (type) {
    case INSERT_PRODUCT: {
      
      if(!payload) return state

      const existingProduct = state.products.find(
        (product) => product.idMenu === payload.idMenu 
      )
     
      if(existingProduct){
       return{
        ...state,
        products: state.products.map( (product) => 
          product.idMenu === payload.idMenu ?
        {...product , cantidad: product.cantidad + (payload.cantidad ||1 )}
        : product
        )
       }
      }
      return {
        ...state,
        products: [...state.products, { ...payload, cantidad: payload.cantidad || 1 }],
      };
      
    }
    case DELETE_PRODUCT:
      return{
        ...state,
        products: state.products.filter(product => product.idMenu !== payload)
      }

    case UPDATE_QUANTITY:{
      const {productCart, action} = payload
      return{
        ...state,
        products: state.products.map((product) => 
          product.idMenu === productCart.idMenu 
         ?
          { ...product,
            cantidad :
            action == "add" 
            ?product.cantidad +1
            : Math.max(product.cantidad - 1, 1)
         
           } 
        :
        product 
        )
      }
    }

    default:
      return state
  }
}

export default ShoppingCartReducer