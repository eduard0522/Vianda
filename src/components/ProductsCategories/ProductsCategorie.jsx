import { useContext, useEffect } from "react"
import ProductContext from "../Context/Products/ProductsContext"
import { ProductCard } from "../ProductCatalog/ProductCard"

const ProductsCategorie = () => {
  const { products, getProducts , getCategories, categories } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return(
    <div className=" flex gap-8 flex-wrap justify-evenly" >
      {products
        .filter((product) =>
           categories.some((categorie) => product.idCategoria === categorie.categoriaId)
        )
      .map((product) => <ProductCard key={product.nombre} product={product} />)}
    </div>
  )
}

export default ProductsCategorie