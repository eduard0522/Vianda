import { GET_CATEGORIES , GET_PRODUCTS } from "../types"


const ProductsReducer = (state, action) => {
  const {payload , type} = action

  switch(type) {
    case GET_PRODUCTS:
      return{
        ...state,
        products : payload
      }

    case GET_CATEGORIES:
      return{
        ...state,
        categories : payload
      }
    default:
    return{
      state
    }
  
  } 
} 

export default ProductsReducer
