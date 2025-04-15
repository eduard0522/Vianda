
import Footer from "../Footer/Footer"
import NavHeader from "../Nav/NavHeader"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import UserPanel from "../UserPanel/UserPanel"


export const Layout = ({children}) => {
  
  return (
    <>
      <NavHeader />
        <UserPanel />
        <main className=" w-full p-8">
          <ShoppingCart />
            { children }
         <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
        <Footer />
    </>
   
  )
}