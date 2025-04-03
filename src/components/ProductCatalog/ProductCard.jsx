import { useContext } from 'react'
import ShoppingCartContext from '../Context/ShoppingCart/shoppingCartContext'

import { FaStar } from 'react-icons/fa'

export const ProductCard = ({ product }) => {
  const { products, insertProduct } = useContext(ShoppingCartContext)
  const handleClick = () => {
    insertProduct(product)
    console.log(products)
  }

  return (
    <div className='relative flex flex-col gap-4 py-4 w-[250px] shadow-2xl p-4 rounded-xl h-[280px] justify-evenly overflow-hidden'>
      <div className='w-8 h-8 absolute right-0 top-0 bg-Primary-600 rounded-bl-xl flex items-center justify-center'>
        <FaStar className=' text-white text-xl' />
      </div>

      <div className='w-4/5 m-auto h-[180px] tr'>
        <img src={product.imagen} alt='' className='rounded-xl' />
      </div>
      <h4 className='font-bold'>{product.nombre}</h4>

      <div className='flex justify-between items-center'>
        <span className='font-bold text-xl'>
          {' '}
          <span className='font-bold text-[#fc291a]'>$</span> {product.precio}
        </span>
        <button
          className='shadow-xl  rounded-full  py-2 font-semibold text-green-500 w-1/2 hover:bg-green-500 hover:text-white'
          onClick={handleClick}
        >
          {' '}
          Agregar{' '}
        </button>
      </div>
    </div>
  )
}
