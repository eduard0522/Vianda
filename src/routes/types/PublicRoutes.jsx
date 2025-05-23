import {BrowserRouter , Routes, Route} from "react-router-dom"
import CategorieCatalog from "@/components/CategoriesCatalog/CategoriesCatalog"
import IndexPage from "../../pages/Index"
import Products from "../../pages/Products"
import ProductCategory from "../../pages/ProductCategory"
import RegisterPage from "../../pages/Register"
import LoginPage from "../../pages/Login"
import OrderDetailPage from "../../pages/OderDetails"
import NotFound from "../../pages/NotFound"
import AuthValidator from "../../Auth/AuthValidator"
import OrderPage from "../../pages/OrderPage"

const AppRouter = () =>{ 
  return(
    <BrowserRouter >
      <Routes>
          <Route  path="/"  element={ < IndexPage />}/>
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/register" element={ <RegisterPage />} />
          <Route path="/categorias"  element = { <CategorieCatalog /> }/>
          <Route  path="/categorias/:categorieId" element = { < ProductCategory /> }/>
          <Route  path="/menu" element = { < Products /> }/>
          <Route element ={ <AuthValidator />}>
            <Route path="/ordenes" element= { <OrderPage />} />
          </Route>
          <Route path="*" element = { <NotFound /> } /> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter