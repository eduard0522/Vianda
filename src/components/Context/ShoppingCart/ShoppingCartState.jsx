import React, { useReducer } from "react"
import ShoppingCartContext from "./shoppingCartContext"
import ShoppingCartReducer from "./shoppingCartReducer"
import { INSERT_PRODUCT } from "./types"

const ShoppingCartState  = (props) => {
  const initialState = {
    products : [],
  }

  const [state , dispatch ] = useReducer(ShoppingCartReducer , initialState)


  const insertProduct = ( product ) => {
    if( !product ) {
      return console.error("Error: Producto no enviado")}
    
    dispatch({
      type:INSERT_PRODUCT,
      payload: product
    })
  }


  return(
    <ShoppingCartContext.Provider value={{
      products : state.products,
      insertProduct 
    }}>
      {props.children}
    </ShoppingCartContext.Provider>
  )

}


export default ShoppingCartState