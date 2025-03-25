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
    <section >
      <h2 className="text-2xl font-bold text-center my-4"> ¿ Que quieres pedir hoy ? </h2>
      <h3 className="font-bold text-2xl my-4"> Nuestros productos </h3>
    <div className=" flex gap-8 flex-wrap justify-evenly">
      {
        products.map( (product) => (
          <ProductCard key={product.nombre}  product={product} />
        ))
      }
    </div>
  </section>

  )
}

export default ProductCatalog