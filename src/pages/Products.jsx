import { Layout } from "../components/Layouts/Layout"
import ProductCatalog from "../components/ProductCatalog/ProductCatalog"

const Products = () => {
  return(
    <Layout>
        <h2 className="text-2xl font-bold mt-24"> Nuestos productos </h2>
        <ProductCatalog />
    </Layout>
  )
}

export default Products
