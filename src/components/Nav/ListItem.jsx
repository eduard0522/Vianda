import { Link } from "react-router"


const ListItem = ({text, link}) => {
  return (
   <Link to={link}>
      <li className="py-4 font-bold text-black cursor-pointer  hover:text-Primary-700" >{ text } </li>
   </Link>
  )
}

export default ListItem