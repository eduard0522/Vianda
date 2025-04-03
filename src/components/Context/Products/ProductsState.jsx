import React, { useReducer } from "react"
import ProductsReducer from './ProductsReducer'
import ProductContext from "./ProductsContext"
import { getAllProducts } from "../../../axios/Products"
import { getAllCategories } from "../../../axios/Categories"

const ProductsState = (props) => {
  const initialState = {
    products : [],
    categories : [],
    categorieSelected: {},
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
    if(!categorieId || categorieId === undefined || categorieId === null) 
     return console.log("No se especifico ninguna categoria.")

    const findCategorie = state.categories.find(categorie => (
      categorie.categoriaId === categorieId
    ))

    if(!findCategorie) return console.log("No se encontró una categoria con los datos insertados")


    console.log(findCategorie , "estate")

    dispatch({
      type:"SET_CATEGORIE_SELECTED",
      payload:findCategorie
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
        setProductSelected,
        categorieSelected : state.categorieSelected
       }}>
          {props.children}
    </ProductContext.Provider>
  
  )
}

export default ProductsState