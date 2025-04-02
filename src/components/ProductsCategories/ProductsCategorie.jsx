import { useContext, useEffect } from "react"
import ProductContext from "../Context/Products/ProductsContext"
import { ProductCard } from "../ProductCatalog/ProductCard"
import { useParams ,  Link } from "react-router-dom"

const ProductsCategorie = () => {
  const { products, getProducts , getCategories } = useContext(ProductContext)
  const { categorieId } = useParams()

  console.log(categorieId)
  useEffect(() => { 
    getProducts()
    getCategories()
  }, [])

  const productsCategorie = products.filter((product) => ( product.idCategoria == categorieId ))

  return(
    <div className=" flex gap-8 flex-wrap justify-evenly mt-24" >
       { productsCategorie.length > 0 ? (
        productsCategorie.map((product) => <ProductCard key={product.nombre} product={ product}  />)
      ) 
      : ( <div className="flex flex-col items-center"> 
             <p className="font-bold text-2xl"> Aún no hay productos en esta categoria !!  </p>
              <Link to="/">
                  <button className="py-2 px-2 bg-Primary-600 text-white rounded-xl inline-block mt-24 mx-auto font-bold hover:bg-Primary-800 transition-all hover:scale-105"> Seleccionar otra categoría </button>
              </Link>
      </div>   ) }  
    </div> 
     
    )
}

export default ProductsCategorie