import React, { useReducer } from "react"
import ProductsReducer from './ProductsReducer'
import ProductContext from "./ProductsContext"
import { getAllProducts } from "../../../axios/Products"
import { getAllCategories } from "../../../axios/Categories"

const ProductsState = (props) => {
  const initialState = {
    products : [],
    categories : [],
    categorieSelected: null,
    productSelected : null
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
    dispatch({
      type : "GET_CATEGORIES",
      payload : categoriesData
    })
  }

  const setCategorieSelected = (categorieId ) => {

    const categorieSelected = state.categories.find(categorie => (
      categorie.categoriaId == categorieId
    ))

    dispatch({
      type:"SET_CATEGORIE_SELECTED",
      payload:categorieSelected
    })
  }

  const setProductSelected = (product) => {
    dispatch({
      type:"SET_PRODUCT_SELECTED",
      payload:product
    })
  }

  return(
    <ProductContext.Provider value={{ 
        products : state.products,
        categories : state.categories,
        getProducts,
        getCategories,
        setCategorieSelected,
        setProductSelected
       }}>
          {props.children}
    </ProductContext.Provider>
  
  )
}

export default ProductsState