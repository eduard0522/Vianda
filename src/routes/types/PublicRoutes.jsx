import {BrowserRouter , Routes, Route} from "react-router-dom"
import CategorieCatalog from "@/components/CategoriesCatalog/CategoriesCatalog"
import IndexPage from "../../pages/Index"
import Products from "../../pages/Products"
import ProductCategory from "../../pages/ProductCategory"
import Login from "../../components/Login/Login"
import Register from "../../components/Register/Register"

const AppRouter = () =>{ 
  return(
    <BrowserRouter >
      <Routes>
          <Route  path="/"  element={ < IndexPage />}/>
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/categorias"  element = { <CategorieCatalog /> }/>
          <Route  path="/categorias/:categorieId" element = { < ProductCategory /> }/>
          <Route  path="/menu" element = { < Products /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter