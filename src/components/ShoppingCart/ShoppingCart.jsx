import { useContext } from "react"
import { useNavigate } from "react-router";

import ModalContext from "../Context/Modals/ModalContext"
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoCloseCircle, IoRemoveCircle, IoAddCircle } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

import ShoppingCartContext from "../Context/ShoppingCart/shoppingCartContext";
import UserContext from "../Context/User/UserContext";
import { createOrderHelper } from "./helper";
import { AuthValidate } from "../../axios/Auth";

const ShoppingCart = () => {

  const navigate = useNavigate()
  const { modalShoppingCart, changeStateShoppinCart , Modal}  = useContext(ModalContext)
  const { products, deleteProduct, updateQuantity , clearCart  } = useContext(ShoppingCartContext) 
  const { user } = useContext(UserContext)

  const handleClickAddProducts = () => {
      navigate("/menu")
      changeStateShoppinCart()
  }
  const handleClickDelete = (productId) => {
    deleteProduct(productId)
  }
   const handleOnclickGenerateOrder = async (total) => {
    if(products && products.length > 0){
      if(AuthValidate){
      const createOder = await createOrderHelper(products , user , total)
       if(createOder){
          clearCart()
          return alert("orden creada")

       }

       return alert("Debes iniciar sesión para generar el pedido")
      }
    
    }
    return alert("error")
   }

  const handleClickUpdate= (product , action) => {
    updateQuantity(product , action)
  }

  let total = 0
  return (
       
      <dialog className="fixed max-h-[80vh] top-0  shadow-2xl left-0 bottom-0 right-0 bg-[#00000061] z-50" open={modalShoppingCart}>
        <section className="w-2/6 bg-white shadow-2xl fixed bottom-0 right-0 h-[35rem] z-10 rounded-xl px-8">
          <div className="absolute top-4 right-4" onClick={changeStateShoppinCart}>  
            <IoCloseCircle className="text-3xl text-Primary-700 cursor-pointer hover:text-Primary-800 transition-colors duration-300 ease-in-out"
            /> 
          </div>
          <h2 className="font-bold text-2xl pt-4 pb-6"
            > Tu pedido 
          </h2>
            {
              products.length == 0 ? (
                <div className="flex flex-col justify-between h-4/5">

                  <div className="flex flex-col items-center gap-8 ">
                      <p className=" text-zinc-400 font-semibold text-xl text-center mt-24">
                      Tu carrito está vacío
                    </p>
                    <HiOutlineShoppingBag  className="text-zinc-300 text-5xl"/>
  
                    <button  onClick={handleClickAddProducts}
                        className="py-2 px-8 bg-Primary-700 text-white rounded-xl mx-auto font-bold hover:bg-Primary-800  duration-300 ease-in-out  transition-all hover:scale-105"
                    > Agregar
                    </button>
                  </div>

                  <div className="flex justify-between">
                      <span className="font-bold text-2xl "> Total: </span>
                      <span className="font-bold text-Primary-700 text-2xl"> $ 0.00 </span>
                  </div>
            
                  

                </div>
              ) : ( 
                <div className="flex flex-col justify-between h-[90%]">
                  <div className="mt-8 px-8 flex flex-col gap-y-4 justify-start overflow-y-scroll h-4/5">
                    {products.map((product) => {
                      console.log(product.cantidad)
                        total = total + (product.precio * product.cantidad)
                        return ( 
                        <div  key={product.nombre}> 
                          <div className="flex items-center justify-between">
                            <img src={product.imagen} alt={product.nombre} className="w-16"/>
                            <h3 className="font-bold text-lg"> { product.nombre }</h3>
                            <RiDeleteBin2Line  className="text-3xl cursor-pointer hover:text-red-500 transition-colors duration-300 ease-in-out"  onClick={() => handleClickDelete(product.idMenu)}/>
                          </div>
                          <div className="flex justify-between gap-8">
                            <p className="font-bold text-xl "> $  { product.precio }</p>
                            <div className="flex gap-4 items-center">
                              <IoAddCircle className="text-3xl text-Primary-700 font-bold  cursor-pointer hover:text-Primary-800 transition-colors duration-300 ease-in-out" onClick={() => handleClickUpdate(product , "add")}/>
                              <span className="font-bold text-2xl"> { product.cantidad ? product.cantidad : '1'} </span>
                              <IoRemoveCircle  className="text-3xl text-Primary-700 transition-colors duration-300 ease-in-out  cursor-pointer hover:text-Primary-800 " onClick={ () => handleClickUpdate(product, "remove")}/>
                            </div>
                          </div>
                          <hr />

                        </div>
                        
                        ) 
                      })
                    }
                  </div>

                  <div className="flex justify-between bt-1 border-t-gray-300 px-8">
                      <span className="font-bold text-Primary-800 text-2xl"> $ {total} </span>
                      <button
                          onClick={() => {handleOnclickGenerateOrder(total)}}
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