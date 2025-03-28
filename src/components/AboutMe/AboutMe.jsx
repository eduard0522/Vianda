import { FiPhoneCall } from "react-icons/fi";
import { PiBowlFoodThin } from "react-icons/pi";

const AboutMe = () => {
  return (
    <section className="flex w-full justify-center items-center mt-36 gap-x-24">
      <article className="flex flex-col w-2/5 gap-8 justify-center">
          <h2 className=" text-red-400 uppercase text-sm font-bold"> Nuestra historia y servicios </h2>
          <h3 className="text-4xl font-bold mt-4"> Nuestro viaje culinario y nuestros servicios </h3>
          <p className="text-gray-500"> Arraigados en la pasión por la gastronomía, nos dedicamos a crear experiencias culinarias inolvidables, donde cada plato refleja nuestra creatividad y compromiso con la calidad. Combinamos ingredientes frescos y cuidadosamente seleccionados con técnicas innovadoras y tradicionales para ofrecer sabores únicos. Más que un restaurante, somos un espacio donde la calidez, la hospitalidad y el excelente servicio se fusionan para brindar momentos memorables a cada comensal. </p>

          <div className=" mt-8 bg-Primary-600 px-4 py-4 rounded-full flex  items-center justify-center gap-2 cursor-pointer hover:bg-Primary-800 w-[180px] shadow-xl"> 
            <FiPhoneCall className="text-white text-center "/> 
            <h2 className="font-bold text-white cursor-pointer"> Ordena ahora </h2>
          </div>
      </article>
      <div className="w-2/5  flex flex-wrap gap-12 justify-end">
        <div className="rounded-2xl bg-white shadow-2xl  p-4 flex flex-col items-center w-[240px] gap-2">
          <PiBowlFoodThin  className="text-Primary-600 text-6xl"/>
          <h4 className="text-2xl text-Primary-600 uppercase font-semibold"> Tradición </h4>
          <p className="text-center text-Primary-900"> Deleita a tus invitados con nuestros sabores y presentación </p>
        </div>

        <div className="rounded-2xl bg-white shadow-2xl  p-4 flex flex-col items-center w-[240px] gap-2">
          <PiBowlFoodThin  className="text-Primary-600 text-6xl"/>
          <h4 className="text-2xl text-Primary-600 uppercase font-semibold"> Tradición </h4>
          <p className="text-center text-Primary-900"> Deleita a tus invitados con nuestros sabores y presentación </p>
        </div>

        <div className="rounded-2xl bg-white shadow-2xl  p-4 flex flex-col items-center w-[240px] gap-2">
          <PiBowlFoodThin  className="text-Primary-600 text-6xl"/>
          <h4 className="text-2xl text-Primary-600 uppercase font-semibold"> Tradición </h4>
          <p className="text-center text-Primary-900"> Deleita a tus invitados con nuestros sabores y presentación </p>
        </div>

        <div className="rounded-2xl bg-white shadow-2xl  p-4 flex flex-col items-center w-[240px] gap-2">
          <PiBowlFoodThin  className="text-Primary-600 text-6xl"/>
          <h4 className="text-2xl text-Primary-600 uppercase font-semibold"> Tradición </h4>
          <p className="text-center text-Primary-900"> Deleita a tus invitados con nuestros sabores y presentación </p>
        </div>
      </div>
      
    </section>
  )
}

export default AboutMe