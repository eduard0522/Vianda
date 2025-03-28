
import Footer from "../Footer/Footer"
import NavHeader from "../Nav/NavHeader"


export const Layout = ({children}) => {
  
  return (
    <>
      <NavHeader />
        <main className=" w-full">
            { children }
         <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
        <Footer />
    </>
   
  )
}