import { GET_CATEGORIES , GET_PRODUCTS , SET_CATEGORIE_SELECTED , SET_PRODUCT_SELECTED } from "./types"


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
    case SET_PRODUCT_SELECTED:
      return{
        ...state,
       productSelected: payload
      }
    case SET_CATEGORIE_SELECTED:
      console.log(payload)
      return{
        ...state,
        categorieSelected : payload
      }
      
    default:
    return{
      state
    }
  
  } 
} 

export default ProductsReducer
