

import NavHeader from "../Nav/NavHeader"
import HeroIndex from "../HeroIndex/HeroIndex"
import ProductCatalog from "../ProductCatalog/ProductCatalog"
import CategorieCatalog from "../CategoriesCatalog/CategoriesCatalog"

export const Layout = () => {
  
  return (
    <main className=" w-full">
      <NavHeader />
      <HeroIndex />
      <CategorieCatalog/>
      <ProductCatalog />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </main>
  )
}