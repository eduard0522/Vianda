import { Layout } from "../components/Layouts/Layout"
import CategorieCatalog from "../components/CategoriesCatalog/CategoriesCatalog"
import HeroIndex from "../components/HeroIndex/HeroIndex"
import SpecialDishes from "../components/SpecialDishes/SpecialDishes"
import AboutMe from "../components/AboutMe/AboutMe"

const Index  = () => {
  return(
    <Layout>
      <HeroIndex />
      <CategorieCatalog />
      <SpecialDishes />
      <AboutMe />
    </Layout>
  )
}

export default Index  