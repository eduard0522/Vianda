import { MdNavigateNext } from "react-icons/md"


const ButtonNext= ({nextSlide}) => {
  return(
    <div className="w-12 h-12 bg-Primary-600 rounded-full flex justify-center items-center hover:bg-Primary-800 cursor-pointer" onClick={nextSlide}>
        <MdNavigateNext size="2em" color="white"/>
    </div>
  )
}

export default ButtonNext