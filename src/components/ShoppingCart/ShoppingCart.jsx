import { useContext } from "react"
import ModalContext from "../Context/Modals/ModalContext"

import { IoCloseCircle } from "react-icons/io5";

const ShoppingCart = () => {
  const { modalShoppingCart, changeStateShoppinCart }  = useContext(ModalContext)

  return (
    modalShoppingCart ? (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#00000061] z-10">
        <section className="w-2/6 bg-white shadow-2xl fixed bottom-0 right-0 h-[40rem] z-10 rounded-xl text-center">
        <div className="absolute top-4 right-4" onClick={changeStateShoppinCart}>  
          <IoCloseCircle className="text-2xl text-Primary-700 cursor-pointer hover:text-Primary-800"
          /> 
        </div>
          <h2 className="font-bold text-center text-2xl pt-4"
            > Mi pedido 
          </h2>

          <p className="font-bold text-xl text-center mt-24">
            Aún no tienes productos agregados
          </p>

          <button  onClick={changeStateShoppinCart}
             className="py-2 px-8 bg-Primary-700 text-white rounded-xl mt-24 mx-auto font-bold hover:bg-Primary-800       transition-all hover:scale-105"
          > Agregar
          
          </button>
            
        </section>
      </div>
    ) : (
      <>
      
      </>
    )
   
    
  )
}

export default ShoppingCart