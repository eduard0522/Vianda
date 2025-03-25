import React, { useReducer } from "react"
import ProductsReducer from './ProductsReducer'
import ProductContext from "./ProductsContext"
import { getAllProducts } from "../../../axios/Products"
import { getAllCategories } from "../../../axios/Categories"

const ProductsState = (props) => {
  const initialState = {
    products : [],
    categories : []
  }


  const [ state , dispatch ] = useReducer(ProductsReducer , initialState)

  const getProducts = async () => {
   const productsData = await getAllProducts()
    dispatch({
      type:"GET_PRODUCTS",
      payload: productsData
    })
  }


  const getCategories = async () => {
    const categoriesData = await getAllCategories()
    console.log( "categorieDATE", categoriesData)
    dispatch({
      type : "GET_CATEGORIES",
      payload : categoriesData
    })

  }

  return(
    <ProductContext.Provider value={{ 
        products : state.products,
        categories : state.categories,
        getProducts,
        getCategories
       }}>
          {props.children}
    </ProductContext.Provider>
  
  )
}

export default ProductsState