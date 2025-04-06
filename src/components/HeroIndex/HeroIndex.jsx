import { FiPhoneCall } from "react-icons/fi"
import Image from "../../assets/Intersect.png"
import Image2 from "../../assets/comment.png"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import { Link } from "react-router"

const HeroIndex = () => {
  return(
    <section className="flex justify-evenly">

        <div className=" flex flex-col justify-center gap-4  w-2/5">
          <h1 className="text-4xl font-bold text-start w-full text-Primary-600"> Vianda </h1>
          <h2 className="text-5xl font-bold "> 
            Comprar tu comida también debe ser una experiencia asombrosa. 
            <span 
                className="text-4xl text-Primary-600 font-bold flex pt-4"> ¡Déjanos sorprenderte! 
            </span>  
          </h2>

          <p className="pt-4"> ¿Prefieres disfrutar de nuestra cocina desde la comodidad de tu hogar? <br />
            Descubre por qué somos el favorito de los amantes de la buena comida. <br /> ¡Haz tu pedido ahora y déjanos consentirte! 
          </p>

          <div className="flex gap-8 items-center justify-center">
            <Link to="/menu">
                <div 
                  className=" mt-8 bg-Primary-600 px-4 py-4 rounded-full flex  items-center justify-center gap-2 cursor-pointer hover:bg-Primary-800 w-[180px] shadow-xl"> 
                  <FiPhoneCall className="text-white text-center "/> 
                  <h2 className="font-bold text-white cursor-pointer"> Ordena ahora </h2>
                </div>
            </Link>
            
            <Link to="/menu">
              <button className="text-xl font-bold flex py-4 px-4 items-center justify-center mt-8 shadow-xl rounded-full cursor-pointer hover:bg-slate-50"> Menú <span> <MdOutlineRestaurantMenu className="text-2xl"/> </span> </button>
            </Link>
            
          </div>
          
        </div>

        <div className="w-2/5 relative">
            <img src={Image} alt="Imagen de una persona comiendo" className="h-auto" />
            <img src={Image2} alt="Imagen en referencia a un pensamiento" className="absolute inset-0 m-auto h-auto -translate-x-[60%] -translate-y-[70%]"  />
        </div>
      </section>
  )
}
 
export default HeroIndex