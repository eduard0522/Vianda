import { Link } from "react-router-dom"
import { useContext } from "react"

import { GoSearch } from "react-icons/go"
import { BsFillCartPlusFill } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"

import ListItem from "./ListItem"
import Logo from "./Logo.jsx"
import ModalContext from "../Context/Modals/ModalContext"
import ShoppingCartContext from "../Context/ShoppingCart/shoppingCartContext.jsx"

const NavHeader = () => {
  const { changeStateShoppinCart } = useContext(ModalContext)
  const { products } = useContext(ShoppingCartContext)

  return(
    <nav className="fixed top-3 left-4  right-4 flex justify-between items-center shadow-xl rounded-full px-4 z-20 bg-white">
      <div className=" font-bold text-black cursor-pointer text-center">
        <Logo />
        </div>
        <ul className="flex w-2/5 justify-between items-center">
          <ListItem text="Inicio" link="/" />
          <ListItem text = "Menú" link="/menu"/>
         <ListItem text = "Servicios" link="/services" />
        </ul>

        <div className="flex gap-10">
          <GoSearch className="text-black text-2xl cursor-pointer  hover:text-green-500"/>
          <div className="relative">
          { products.length > 0 ? <span className="text-white absolute -top-4 right-0  bg-Primary-700 rounded-full text-xs w-4 h-4 text-center ">  { products.length}</span> : ""} 
          
          <BsFillCartPlusFill  className={`text-black text-2xl cursor-pointer  ${products.length > 0 ? 'text-green-500' : 'text-black'} hover:text-green-500`} onClick={changeStateShoppinCart}/> 
          </div>

          <div className="bg-Primary-600 px-4 py-1 rounded-full flex items-center justify-center gap-2 cursor-pointer  hover:bg-Primary-800"> <     FiPhoneCall className="text-white text-center "/> 
             <Link to="https://web.whatsapp.com/">  <h2 className="font-semibold text-white cursor-pointer"> Contactar </h2>  </Link> 
          </div>
        </div>
    </nav>
  )
}


export default NavHeader