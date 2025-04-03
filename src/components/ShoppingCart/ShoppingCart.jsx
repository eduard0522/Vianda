import { useContext } from "react"
import ModalContext from "../Context/Modals/ModalContext"
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoCloseCircle, IoRemoveCircle, IoAddCircle } from "react-icons/io5";


import ShoppingCartContext from "../Context/ShoppingCart/shoppingCartContext";

const ShoppingCart = () => {
  const { modalShoppingCart, changeStateShoppinCart }  = useContext(ModalContext)
  const { products } = useContext(ShoppingCartContext) 

  let total = 0
  return (
       
      <dialog className="fixed max-h-[80vh] top-0 left-0 bottom-0 right-0 bg-[#00000061] z-10" open={modalShoppingCart}>
        <section className="w-2/6 bg-white shadow-2xl fixed bottom-0 right-0 h-[35rem] z-10 rounded-xl text-center">
        <div className="absolute top-4 right-4" onClick={changeStateShoppinCart}>  
          <IoCloseCircle className="text-2xl text-Primary-700 cursor-pointer hover:text-Primary-800"
          /> 
        </div>
          <h2 className="font-bold text-center text-2xl pt-4"
            > Mi pedido 
          </h2>

          {
            products.length == 0 ? (
              <div>
                  <p className="font-bold text-xl text-center mt-24">
                    Aún no tienes productos agregados
                  </p>
  
                  <button  onClick={changeStateShoppinCart}
                      className="py-2 px-8 bg-Primary-700 text-white rounded-xl mt-24 mx-auto font-bold hover:bg-Primary-800       transition-all hover:scale-105"
                  > Agregar
            
                  </button>
              </div>
            ) : ( 
              <div className="mt-12 px-8 flex flex-col gap-y-4 justify-between">
                  {products.map((product) => {
                    total = total + product.precio
                   return ( 
                  <div  key={product.nombre}> 
                    <div className="flex items-center justify-between">
                      <img src={product.imagen} alt={product.nombre} className="w-16"/>
                      <h3 className="font-bold text-lg"> { product.nombre }</h3>
                      <RiDeleteBin2Line  className="text-3xl cursor-pointer hover:text-red-500"/>
                    </div>
                    <div className="flex justify-between gap-8">
                      <p className="font-bold text-xl "> $  { product.precio }</p>
                      <div className="flex gap-4 items-center">
                        <IoAddCircle className="text-3xl text-Primary-700 font-bold  cursor-pointer hover:text-Primary-800"/>
                        <span className="font-bold text-2xl"> 1 </span>
                        <IoRemoveCircle  className="text-3xl text-Primary-700  cursor-pointer hover:text-Primary-800 "/>
                      </div>

                     </div>
                    <hr />

                  </div>
                  
                  ) })
                }
                <div className="flex justify-between bt-1 border-t-gray-300">
                  <span className="font-bold text-Primary-800 text-2xl"> $  { total }  </span>
                  
                  <button
                      className="py-2 px-8 bg-Primary-700 text-white rounded-xl  font-bold hover:bg-Primary-800  transition-all hover:scale-105"
                  > Generar pedido
                  </button>
                </div>
              </div>
            )
          }
         
            
        </section>
      </dialog>
  )
}

export default ShoppingCart