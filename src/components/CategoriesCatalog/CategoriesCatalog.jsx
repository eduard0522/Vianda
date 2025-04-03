import { useContext } from "react"
import ProductContext from "../Context/Products/ProductsContext"
import { useEffect } from "react"
import { CategorieCard } from "./CategorieCard"
import ButtonBack from "../Buttons/NextBack/ButtonBack"
import ButtonNext from "../Buttons/NextBack/ButtonNext"

import { useNavigate } from "react-router"


const CategorieCatalog = ( )  => {
  const navigate = useNavigate()
  const { categories, getCategories , setCategorieSelected } = useContext(ProductContext )


  const handleClickCard = (idCard) => {
    setCategorieSelected(idCard)  
    navigate(`/categorias/${idCard}`);
  }


  useEffect(() => {
       getCategories()
  }, [])

  return (
    <section className="mt-24" id="categorias">
      <h2 className="text-center text-red-400 uppercase font-bold text-sm "> favoritas de los clientes </h2>
      <h3 className="text-3xl font-bold text-center"> Categorias Populares </h3>
    
      <div className="relative">
        <div className=" absolute top-[50%] flex justify-between w-full items-center">
          <ButtonBack /> 
          <ButtonNext />
        </div>
        <div className=" flex gap-8 flex-wrap justify-evenly mt-12 px-10">
        {
          categories.map( (categorie) => (
            <CategorieCard key={categorie.nombre}  categorie={categorie} setCategorie = {handleClickCard} />
          ))
        }
        </div>
      </div>
  </section>

  )
}

export default CategorieCatalog