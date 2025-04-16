import { Outlet } from 'react-router'
import './App.css'
import ProductsState from './components/Context/Products/ProductsState'
import AppRouter from '@/routes/types/PublicRoutes'
import ModalsState from './components/Context/Modals/ModalsState'
import ShoppingCartState from './components/Context/ShoppingCart/ShoppingCartState'
import UserState from './components/Context/User/UserState'

function App() {


  return (
    <ModalsState > 
      <UserState>
        <ShoppingCartState>
          <ProductsState>
            <AppRouter >
              <Outlet />
            </AppRouter>
          </ProductsState>
        </ShoppingCartState>
      </UserState>
    </ModalsState>
    
  )
}

export default App
