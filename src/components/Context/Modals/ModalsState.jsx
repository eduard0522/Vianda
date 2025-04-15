import React,{ useReducer } from "react";

import ModalContext from "./ModalContext";

import { ModalReducer } from "./ModalsReducer";
import { CHANGE_STATE_LOGIN_FORM, CHANGE_STATE_SHOPPING_CART, CHANGE_STATE_REGISTRATION_FORM , CHANGE_STATE_USER_PANEL } from "./types";

const ModalsState = (props) => {
  const initialState = {
    modalShoppingCart : false,
    registrationForm: false,
    loginForm : false,
    userPanel : true
  }

  const [state , dispatch ] = useReducer( ModalReducer , initialState )

  const changeStateShoppinCart = () => {
    dispatch({
      type:CHANGE_STATE_SHOPPING_CART,
      payload: !state.modalShoppingCart
    })
  }

  const changeStateRegistrationForm = () => {
    dispatch({
      type:CHANGE_STATE_REGISTRATION_FORM,
      payload: !state.registrationForm
    })
  }

  const changeStateLoginForm = () => {
    dispatch({
      type:CHANGE_STATE_LOGIN_FORM,
      payload: !state.loginForm
    })
  }

  const changeStateUserPanel = () => {
    dispatch({
      type:CHANGE_STATE_USER_PANEL,
      payload: !state.userPanel
    })
  }


  return(
    <ModalContext.Provider value={{
      modalShoppingCart : state.modalShoppingCart,
      loginForm : state.loginForm,
      registrationForm : state.registrationForm,
      userPanel : state.userPanel,
      changeStateShoppinCart,
      changeStateRegistrationForm,
      changeStateLoginForm,
      changeStateUserPanel
    }}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalsState