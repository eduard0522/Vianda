import React, { useReducer } from "react"
import ShoppingCartContext from "./shoppingCartContext"
import ShoppingCartReducer from "./shoppingCartReducer"
import { INSERT_PRODUCT , DELETE_PRODUCT , UPDATE_QUANTITY , GENERATE_ORDER , CLEAR_CART} from "./types"

const ShoppingCartState  = (props) => {
  const initialState = {
    products : [],
  }

  const [state , dispatch ] = useReducer(ShoppingCartReducer , initialState)

  const clearCart = () => {
    dispatch({
      type : CLEAR_CART,
      payload: []
    })
  }

  const insertProduct = ( product ) => {
    if( !product ) {
      return console.error("Error: Producto no enviado")}
    dispatch({
      type:INSERT_PRODUCT,
      payload: product
    })
  }

  const deleteProduct = (productId) => {
    if(!productId){
      alert("debes seleccionar el producto a eliminar")
    }
    dispatch({
      type:DELETE_PRODUCT,
      payload:productId
    })
  } 

  const updateQuantity = (productCart,action) => {
    dispatch({
      type:UPDATE_QUANTITY,
      payload: { action , productCart}
    })
  }

  const generateOrder = () => {
    dispatch({
      type: GENERATE_ORDER,
      payload : state.products
    })
  }

  return(
    <ShoppingCartContext.Provider value={{
      products : state.products,
      insertProduct ,
      deleteProduct,
      updateQuantity,
      generateOrder,
      clearCart
    }}>
      {props.children}
    </ShoppingCartContext.Provider>
  )

}


export default ShoppingCartState