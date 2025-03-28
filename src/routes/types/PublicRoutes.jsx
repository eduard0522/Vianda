import {BrowserRouter , Routes, Route} from "react-router-dom"
import CategorieCatalog from "@/components/CategoriesCatalog/CategoriesCatalog"
import IndexPage from "../../pages/Index"
import Products from "../../pages/Products"

const AppRouter = () =>{ 
  return(
    <BrowserRouter >
      <Routes>
          <Route  path="/"  element={ < IndexPage />}/>
          <Route path="/categorias"  element = { <CategorieCatalog /> }/>
          <Route  path="/categorias/1" element = { < Products /> }/>
          <Route  path="/menu" element = { < Products /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter