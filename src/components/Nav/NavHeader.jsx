import { Link } from "react-router-dom"
import { useContext } from "react"

import { GoSearch } from "react-icons/go"
import { BsFillCartPlusFill } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"

import ListItem from "./ListItem"
import Logo from "./Logo.jsx"
import ModalContext from "../Context/Modals/ModalContext"


const NavHeader = () => {
  const { changeStateShoppinCart } = useContext(ModalContext)
  return(
    <nav className="flex justify-between items-center shadow-xl rounded-full px-4 ">
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
          <BsFillCartPlusFill  className="text-black text-2xl cursor-pointer  hover:text-green-500 " onClick={changeStateShoppinCart}/> 
          <div className="bg-Primary-600 px-4 py-1 rounded-full flex items-center justify-center gap-2 cursor-pointer  hover:bg-Primary-800"> < FiPhoneCall className="text-white text-center "/> 
             <Link to="https://web.whatsapp.com/">  <h2 className="font-semibold text-white cursor-pointer"> Contactar </h2>  </Link> 
          </div>
        </div>
    </nav>
  )
}

export default NavHeader