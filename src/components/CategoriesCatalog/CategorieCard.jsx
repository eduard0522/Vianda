export const CategorieCard = ({ categorie }) => {
  return (
    <div  className="flex flex-col gap-4 py-4 w-[200px] shadow-2xl p-4 rounded-xl  justify-evenly items-center hover:scale-105 hover:cursor-pointer border-2 border-transparent hover:border-green-400">
      <div className="w-[180px]  m-auto h-[180px] rounded-full bg-green-200  flex justify-center items-center">

        <img src={categorie.imagen} alt=""  className="w-4/5"/>
      </div>

      <h4 className="font-bold">{categorie.nombre}</h4>
      
      </div>
  )
}
