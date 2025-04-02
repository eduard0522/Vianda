import React,{ useReducer } from "react";

import ModalContext from "./ModalContext";

import { ModalReducer } from "./ModalsReducer";

const ModalsState = (props) => {
  const initialState = {
    modalShoppingCart : true,
  }

  const [state , dispatch ] = useReducer( ModalReducer , initialState )

  const changeStateShoppinCart = () => {
    dispatch({
      type:"CHANGE_STATE_MODAL_SHOPPING_CART",
      payload: !state.modalShoppingCart
    })
  }

  return(
    <ModalContext.Provider value={{
      modalShoppingCart : state.modalShoppingCart,
      changeStateShoppinCart
    }}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalsState