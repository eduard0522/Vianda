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

  return (
    <div className=" flex gap-8 flex-wrap justify-between mt-24">
        {
          products.map( (product) => (
            <ProductCard key={product.nombre}  product={product} />
          ))
        }
    </div>

  )
}

export default ProductCatalog