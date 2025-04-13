import { IoCloseCircle } from "react-icons/io5"
import { useNavigate } from "react-router"

export const ConfirmForms = ({text,open,setOpen}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setOpen()
    navigate("/")
  }

  return(
    <dialog className=" z-30 w-full absolute top-0 bottom-0 right-0 bg-re left-0 flex  items-center justify-center rounded-md bg-[#dc2d2dbc] backdrop:backdrop-blur-sm shadow-2xl" open={open}>
      
        <div className="bg-white relative p-8 ">
        <div className="absolute top-2 right-2" onClick={setOpen}>
            <IoCloseCircle className="text-2xl text-Primary-600"/>
          </div>
          <p> { text} </p>
          <button className="text-xl bg-Primary-600 rounded-md px-4 py-2 text-white font-semibold" onClick={handleClick}> Iniciar </button>
        </div>
    </dialog>
  )
}