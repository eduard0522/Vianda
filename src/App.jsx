import { Outlet } from 'react-router'
import './App.css'
import ProductsState from './components/Context/Products/ProductsState'
import AppRouter from '@/routes/types/PublicRoutes'
import ModalsState from './components/Context/Modals/ModalsState'
import ShoppingCartState from './components/Context/ShoppingCart/ShoppingCartState'

function App() {


  return (
    <ShoppingCartState>
      <ModalsState > 
        <ProductsState>
          <AppRouter >
            <Outlet />
          </AppRouter>
        </ProductsState>
      </ModalsState>
    </ShoppingCartState>
    
  )
}

export default App
