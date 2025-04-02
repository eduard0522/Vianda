import { Link } from "react-router-dom"

export const CategorieCard = ({ categorie , setCategorie }) => {
  return (
    <Link to={`categorias/${categorie.categoriaId}`} onClick={ ( ) => setCategorie(categorie.categoriaId)} >
       <div  className="flex flex-col gap-4 py-4 px-8 shadow-2xl p-2 rounded-2xl items-center justify-center hover:scale-105 hover:cursor-pointer border-2 border-transparent hover:border-Primary-400 transition-all mt-8">
         <div className="w-[160px]  mx-auto h-[160px] rounded-full bg-Primary-100  flex justify-center items-center">
            <img src={categorie.imagen} alt=""  className="w-4/5"/>
         </div>
         <h4 className="font-bold">{categorie.nombre}</h4>
       </div>
    </Link>
   
  )
}
