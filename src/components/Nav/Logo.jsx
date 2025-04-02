import { Link } from "react-router"


const Logo = () => {
  return(
    <Link to="/"> 
      <h2 className="flex text-2xl"> 
        <span className="bg-Primary-600 rounded-sm px-1 text-center flex items-center justify-center text-white"> V </span> ianda
      </h2>
    </Link>
  )
}

export default Logo 