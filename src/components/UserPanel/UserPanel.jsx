import { FaRegUserCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import ModalContext from "../Context/Modals/ModalContext";
import { Link, useNavigate } from "react-router";
const UserPanel = () => {
  const { userPanel, changeStateUserPanel } = useContext(ModalContext)
  const navigate = useNavigate()
  console.log(userPanel)
  const [ user ,setUser ] = useState(null)
  let User = null
  try {
    const storedUser = localStorage.getItem('user')
     User =  storedUser ? JSON.parse(storedUser).user : null
     
  } catch (error) {
    console.error('Error parsing user from localStorage:', error)
  }

  useEffect(() => {
    setUser(User)
  }, [])

  const handleClickButton = () => {
    if(user){
      localStorage.clear()
      setUser(null)
    }else{
      navigate("/login")
    }
    }
    
    const handleClickLink = () => {
      if(user){
        alert("Esta función aún no se ha implementado.")
      }else{
        navigate("/register")
      }
    }
    
  return (
    <aside className={` w-[500px] shadow-top-sides bg-white fixed z-50 right-4 bottom-0 rounded-t-xl transform transition-transform duration-700 ease-in-out ${  userPanel ? 'translate-x-0 opacity-100' : '-right-4 translate-x-full translate-y-full opacity-50' }`}>

       <div onClick={changeStateUserPanel}> <IoCloseCircle className="text-3xl text-Primary-600 absolute top-2 right-2 hover:text-Primary-800 cursor-pointer" /> </div>
        <article className="flex flex-col items-center justify-between p-8">
            <div className="flex justify-center w-full gap-4 border-b-2 border-gray-100 pb-4">
               <div className="relative cursor-pointe group cursor-pointer">
                  <FaRegUserCircle  className="text-6xl "/>
                  <BiSolidEdit  className="text-xl font-bold absolute -bottom-2 -right-2 z-10 group-hover:text-Primary-800 cursor-pointer"/>
               </div>
                <div>
                  <p className="text-2xl font-bold"> {user ? user.name : 'Usuario invitado'} </p>
                  <p className="text-lg"> {user ? user.email : 'invitado@email.com' }  </p>
                </div>
            </div>

            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Nombre </span>
              <span className=""> {user ? user.name : 'Usuario invitado'} </span>
            </div>
            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Correo </span>
              <span className=""> {user ? user.email : 'invitado@email.com'}</span>
            </div>
            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Télefono </span>
              <span className=""> {user ? user.phone : 'sin datos'}</span>
            </div>
            <div className="flex justify-between w-full py-8 border-b-2 border-gray-100 pb-4">
              <span className="text-xl font-medium"> Dirección </span>
              <span>
                {user?.address ? user.address : 'Sin dirección'}
              </span>
            </div>

            <div className="w-full flex items-center justify-center pt-8">
              <button className="text-xl bg-Primary-600 rounded-md text-white px-8 py-2 hover:bg-Primary-800" onClick={handleClickButton}>  { !user ? 'Iniciar sesión' : 'Cerrar Sesión'} </button>
            </div>
            <span className="text-Primary-700 underline font-semibold cursor-pointer hover:text-Primary-800" onClick={handleClickLink}> { !user ? 'Crear cuenta' : 'Eliminar cuenta'} </span>

        </article>
    </aside>
  )
}

export default UserPanel