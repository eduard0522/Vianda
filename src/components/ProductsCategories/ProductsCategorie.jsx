import { useContext, useEffect } from 'react'
import ProductContext from '../Context/Products/ProductsContext'
import { ProductCard } from '../ProductCatalog/ProductCard'
import { useParams, Link } from 'react-router-dom'

const ProductsCategorie = () => {
  const { products, getProducts, getCategories, categorieSelected } =
    useContext(ProductContext)
  const { categorieId } = useParams()
  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  const numberId = Number(categorieId)
  const productsCategorie = products.filter(
    (product) => product.idCategoria === numberId
  )

  return (
    <div className='flex flex-col items-center'>
       { categorieSelected.nombre ? <h2 className='mt-24 font-bold text-2xl'> { categorieSelected.nombre} </h2> : <h2 className='my-24 font-bold text-2xl'>  Categoria </h2>} 
      <div className=' flex gap-8 flex-wrap justify-evenly mt-24'>
        {productsCategorie.length > 0 ? (
          productsCategorie.map((product) => (
            <ProductCard key={product.nombre} product={product} />
          ))
        ) : (
          <div className='flex flex-col items-center'>
            <p className='font-bold text-2xl'>
              {' '}
              Aún no hay productos en esta categoria !!{' '}
            </p>
            <Link to='/#categorias'>
              <button className='py-2 px-2 bg-Primary-600 text-white rounded-xl inline-block mt-24 mx-auto font-bold hover:bg-Primary-800 transition-all hover:scale-105'>
                {' '}
                Seleccionar otra categoría{' '}
              </button>
            </Link>
          </div>
        )}
      </div>
      <Link to='/#categorias'>
        <button className='py-2 px-4 bg-Primary-600 text-white rounded-xl inline-block mt-24 mx-auto font-bold hover:bg-Primary-800 transition-all hover:scale-105'>
            {' '}
              Todas las categorías{' '}
        </button>
      </Link>

    </div>
  )
}

export default ProductsCategorie
