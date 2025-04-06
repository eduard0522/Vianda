import { useContext } from 'react'
import ProductContext from '../Context/Products/ProductsContext'
import { useEffect, useState } from 'react'
import { CategorieCard } from './CategorieCard'
import ButtonBack from '../Buttons/NextBack/ButtonBack'
import ButtonNext from '../Buttons/NextBack/ButtonNext'

import { useNavigate } from 'react-router'

const CategorieCatalog = () => {
  const navigate = useNavigate()
  const { categories, getCategories, setCategorieSelected } =
    useContext(ProductContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    if (currentIndex < categories.length - 5) {
      setCurrentIndex(currentIndex + 1)
     
    }
    console.log("click")
  }

  const prevSlide = () => {
    console.log("click")
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleClickCard = (idCard) => {
    setCategorieSelected(idCard)
    navigate(`/categorias/${idCard}`)
  }

  useEffect(() => {
    getCategories()

  }, [])


  if (!categories || categories.length === 0) return null;

  return (
    <section  id='categorias'>
      <h2 className='text-center text-red-400 uppercase font-bold text-sm '>
        {' '}
        favoritas de los clientes{' '}
      </h2>
      <h3 className='text-3xl font-bold text-center'> Categorias Populares </h3>

      <div className='relative'>
        <div
          className=' absolute top-[50%] flex justify-between w-full items-center z-20'
        >
          <ButtonBack
            prevSlide={prevSlide}
          />

          <ButtonNext
           nextSlide={nextSlide} />
        </div>

        <div className='overflow-hidden'>

          <div className=' flex justify-center transition-transform duration-300 ease-in-out px-16 py-24' 
          style={{
            transform: `translateX(-${currentIndex * 20}%)`, 
            width: `${(categories.length * 20)}% `,
          }}
          >
            {categories.map((categorie, index) => (
              <div key={index} className='flex-shrink-0 items-center w-[18%] px-8'>
                <CategorieCard
                  categorie={categorie}
                  setCategorie={handleClickCard}
                  index={index}
                  />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default CategorieCatalog
