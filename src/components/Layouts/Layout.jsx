
import Footer from "../Footer/Footer"
import NavHeader from "../Nav/NavHeader"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export const Layout = ({children}) => {
  
  return (
    <>
      <NavHeader />
        <main className=" w-full p-8">
          <ShoppingCart />
            { children }
         <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
        <Footer />
    </>
   
  )
}