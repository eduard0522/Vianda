

const ListItem = ({text, link}) => {
  return (
    <li className="py-4 font-bold text-black cursor-pointer  hover:text-green-500" ><a to={link}> {text} </a></li>
  )
}

export default ListItem