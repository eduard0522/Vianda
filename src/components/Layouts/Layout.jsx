import { BsFillCartPlusFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import Image from "../../assets/Intersect.png"
import Image2 from "../../assets/comment.png"
import ImageProduct01 from "../../assets/product-01.png"
import { MdOutlineRestaurantMenu } from "react-icons/md";

export const Layout = () => {
  return (
    <main className=" w-full">
      <nav className="flex justify-between items-center shadow-xl rounded-full px-4 ">
      <div className=" font-bold text-black cursor-pointer text-center"> <h1 className="flex text-2xl"> <span className="bg-green-400 rounded-sm px-1 text-center flex items-center justify-center text-white"> V </span> ianda </h1></div>
        <ul className="flex w-2/5 justify-between items-center">
          <li className="py-4 font-bold text-black cursor-pointer  hover:text-green-500" ><a to="/">Inicio</a></li>
          <li className="py-4 font-bold text-black cursor-pointer  hover:text-green-500" ><a to="/about">Menú</a></li>
          <li className="py-4 font-bold text-black cursor-pointer  hover:text-green-500" ><a to="/contact">Servicios</a></li>
        </ul>

        <div className="flex gap-10">
          <GoSearch className="text-black text-2xl cursor-pointer  hover:text-green-500"/>
          <BsFillCartPlusFill  className="text-black text-2xl cursor-pointer  hover:text-green-500 "/> 
          <div className="bg-green-500 px-4 py-1 rounded-full flex items-center justify-center gap-2 cursor-pointer  hover:bg-green-600"> < FiPhoneCall className="text-white text-center "/> 
              <h2 className="font-semibold text-white cursor-pointer"> Contactar </h2>
          </div>
        </div>
      </nav>

      <section className="flex items-center justify-evenly">
  
        <div className=" flex flex-col justify-center items-center w-2/5">
          <h2 className="text-4xl font-bold "> 
            Comprar tu comida también debe ser una experiencia asombrosa. 
            <span 
                className="text-4xl text-green-500 font-bold flex"> ¡Déjanos sorprenderte! 
            </span>  
          </h2>

          <p className="pt-4"> ¿Prefieres disfrutar de nuestra cocina desde la comodidad de tu hogar? <br />
            Descubre por qué somos el favorito de los amantes de la buena comida. <br /> ¡Haz tu pedido ahora y déjanos consentirte! 
          </p>

          <div className="flex gap-8 items-center justify-center">
            <div 
              className=" mt-8 bg-[#41c74e] px-4 py-4 rounded-full flex  items-center justify-center gap-2 cursor-pointer hover:bg-green-600 w-[180px] shadow-xl"> 
              <FiPhoneCall className="text-white text-center "/> 
              <h2 className="font-bold text-white cursor-pointer"> Ordena ahora </h2>
            </div>
            <button className="text-xl font-bold flex py-4 px-4 items-center justify-center mt-8 shadow-xl rounded-full cursor-pointer hover:bg-slate-50"> Menú <span> <MdOutlineRestaurantMenu className="text-2xl"/> </span> </button>
          </div>
          
        </div>

        <div className="w-2/5 relative">
            <img src={Image} alt="Imagen de una persona comiendo" className="h-auto" />
            <img src={Image2} alt="Imagen en referencia a un pensamiento" className="absolute inset-0 m-auto h-auto -translate-x-[60%] -translate-y-[70%]"  />
        </div>
      </section>


      <section>
        <h2 className="text-2xl font-bold text-center my-4"> ¿ Que quieres pedir hoy ? </h2>
        <h3 className="font-bold text-2xl my-4"> Nuestros productos </h3>

        <div className=" flex gap-8 flex-wrap justify-evenly">
          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

                  <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

                  <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

                  <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

                  <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

                  <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>          


          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 w-[300px] shadow-2xl p-4 rounded-xl">
            <img src={ImageProduct01} alt=""  className="rounded-xl"/>
            <h4 className="font-bold">Haburguesa especial</h4>
            <p className="text-sm">La mejor hamburguesa que te puedes comer.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl"> <span className="font-bold text-[#fc291a]">$</span> 18.000 </span>
              <button className="shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2"> Agregar </button>
            </div>
          </div>

        </div>
      </section>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </main>
  )
}