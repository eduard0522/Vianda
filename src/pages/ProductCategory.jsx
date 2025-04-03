import { Layout } from "../components/Layouts/Layout"
import ProductsCategorie from "../components/ProductsCategories/ProductsCategorie"
import ProductContext from "../components/Context/Products/ProductsContext"
import { useParams} from "react-router-dom"
import { useEffect } from "react"
import { useContext } from "react"

const ProductCategory = () => {

  const { setCategorieSelected } = useContext(ProductContext)
  const { categorieId } = useParams()

  useEffect(() => {
    const numbreId = Number(categorieId)
      setCategorieSelected( numbreId )
  }, [categorieId])
  
  return(
    
    <Layout>
        <ProductsCategorie />
    </Layout>
  )
}

export default ProductCategory