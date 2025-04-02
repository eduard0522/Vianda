import { Outlet } from 'react-router'
import './App.css'
import ProductsState from './components/Context/Products/ProductsState'
import AppRouter from '@/routes/types/PublicRoutes'
import ModalsState from './components/Context/Modals/ModalsState'


function App() {


  return (
    <ModalsState > 
      <ProductsState>
        <AppRouter >
          <Outlet />
        </AppRouter>
      </ProductsState>
    </ModalsState>
   
    
  )
}

export default App
