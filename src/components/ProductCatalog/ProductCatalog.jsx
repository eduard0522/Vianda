import { useContext } from "react"
import ProductContext from "../Context/Products/ProductsContext"
import { useEffect } from "react"

import { ProductCard } from "./ProductCard"

const ProductCatalog = ( )  => {
  
  const { products, getProducts, getCategories } = useContext(ProductContext)

  useEffect(() => {
      getProducts()
      getCategories()
  },[])

  if(!products || products?.length < 0){
    return(
      <div className="py-8"> 
        <h2 className="font-bold text-2xl text-center">  <span className="text-Primary-600"> Upss ! </span>En este momento no tenemos productos para mostrar  </h2>
      </div>
    )
  }

  return (
    <div className="flex gap-8 flex-wrap justify-between mt-24">
        {
          products.map( (product) => (
            <ProductCard key={product.nombre}  product={product} />
          ))
        }
    </div>

  )
}

export default ProductCatalog