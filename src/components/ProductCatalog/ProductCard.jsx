
export const ProductCard = ({ product }) => {
  return (
    <div  className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl h-[400px] justify-evenly">
      <div className="w-4/5 m-auto h-[180px] tr">
        <img src={product.imagen} alt=""  className="rounded-xl"/>
      </div>
      <h4 className="font-bold">{product.nombre}</h4>
      <p className="text-sm  line-clamp-3 " > {product.descripcion} </p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> {product.precio}</span>
        <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2 hover:bg-green-500 hover:text-white"> Agregar </button>
      </div>
     </div>
  )
}



