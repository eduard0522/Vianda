import { useContext } from "react"
import ProductContext from "../Context/Products/ProductsContext"
import { useEffect } from "react"
import { CategorieCard } from "./CategorieCard"


const CategorieCatalog = ( )  => {
  
  const { categories, getCategories } = useContext(ProductContext)

  useEffect(() => {
      getCategories()
  },[])

  return (
    <section className="">
      <h2 className="text-2xl font-bold text-center my-4"> ¿ Que se te antoja antoja hoy ? </h2>
      <div className=" flex gap-8 flex-wrap justify-evenly">
        {
          categories.map( (categorie) => (
            <CategorieCard key={categorie.nombre}  categorie={categorie} />
          ))
        }
      </div>
  </section>

  )
}

export default CategorieCatalog