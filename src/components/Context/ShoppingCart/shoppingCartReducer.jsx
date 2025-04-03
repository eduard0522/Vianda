
import { INSERT_PRODUCT } from "./types";

const ShoppingCartReducer = (state, action) => {

  const { type , payload } = action

  switch (type) {
    case INSERT_PRODUCT:
      console.log(payload , " PRODUCTO ")
      if(!payload) return state

      return {
        ...state,
        products : [...state.products , payload]
      }
    default:
      return state
  }
}

export default ShoppingCartReducer