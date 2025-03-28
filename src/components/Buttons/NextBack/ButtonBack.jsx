import { MdNavigateNext  } from "react-icons/md"


const ButtonBack = () => {
  return(
    <div className="w-12 h-12 bg-Primary-600 rounded-full flex justify-center items-center hover:bg-Primary-800 cursor-pointer">
        <MdNavigateNext size="2em" color="white" className="rotate-180"/>
    </div>
  )
}

export default ButtonBack