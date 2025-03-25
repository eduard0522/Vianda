import './App.css'
import ProductsState from './components/Context/Products/ProductsState'
import { Layout } from './components/Layouts/Layout'

function App() {


  return (
    <ProductsState>
       <Layout />
    </ProductsState>
    
  )
}

export default App
