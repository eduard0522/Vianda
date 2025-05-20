import { useEffect } from "react"
import { AuthValidate } from "../axios/Auth"
import { Outlet, useNavigate } from "react-router"

const AuthValidator = () => {
  
  const navigate = useNavigate()
  useEffect( () => {
    const validateToken = async () => {
      try {
        const response = await AuthValidate()
        if(!response) navigate("/login")
      } catch (error) {
        console.debug(error)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      }
    } 
 validateToken()
  },[navigate])

  return <Outlet />
}

export default AuthValidator