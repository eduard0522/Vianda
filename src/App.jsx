import { Outlet } from 'react-router'
import './App.css'
import ProductsState from './components/Context/Products/ProductsState'
import { Layout } from './components/Layouts/Layout'
import AppRouter from '@/routes/types/PublicRoutes'


function App() {


  return (
  
    <ProductsState>
      <AppRouter >
        <Outlet />
      </AppRouter>
    </ProductsState>
  
   
    
  )
}

export default App
