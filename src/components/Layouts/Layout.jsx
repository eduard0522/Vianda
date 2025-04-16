
import { useContext } from "react"
import Footer from "../Footer/Footer"

import NavHeader from "../Nav/NavHeader"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import UserPanel from "../UserPanel/UserPanel"
import ModalContext from "../Context/Modals/ModalContext"
import Modal from "../Modals/Modal"


export const Layout = ({children}) => {
  const {  confirmAddProduct ,changeStateConfirmAddProduct } = useContext(ModalContext)
  
  return (
    <>
      <NavHeader />
        <UserPanel />
        <main className=" w-full p-8">
          <ShoppingCart />
            { children }
         <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
        <Footer />
        <Modal isOpen={confirmAddProduct} onClose={changeStateConfirmAddProduct} text="Producto agregado éxitosamente." textButton="Agregar más" handleClick={changeStateConfirmAddProduct} />
    </>
   
  )
}