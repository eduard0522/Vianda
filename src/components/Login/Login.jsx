import { LoginRequest } from "../../axios/Auth"
import { useState } from "react"
import { useNavigate } from "react-router"

import ImageLogin from "../../assets/Intersect.png"
import bgLogin from "../../assets/bgLogin.jpeg"


const Login  = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error , setError] = useState ();

    const handleChange = (e) => {
      setError("")
      setFormData({ 
        ...formData,
        [e.target.name]: e.target.value 
      });
    };

    const validate = () => {
      if (!formData.email || !formData.password) {
        console.log(formData.email , formData.password)
        return false;
      }
      return true
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        if (!validate()) return
        setLoading(true)
      try {
        const response = await LoginRequest(formData, setLoading)
        if (response) {
          console.log("Usuario autenticado:", response.data)
          localStorage.setItem("auth", true );
          navigate("/");
        }

          setError("Creadenciales invalidos")
          setLoading(false)
      } catch (e) {
        setLoading(false)
        setError("Ocurrió un error al iniciar sesión");
      }
    }
  
  return(
    <section className="w-full flex items-center justify-center bg-[url('../../assets/bgLogin.jpeg')] h-[100vh]" 
      style={{ backgroundImage : `url(${bgLogin})`}}
    >
      <div className="w-4/6 p-8  flex  justify-center items-center bg-[#ffffff26] backdrop-blur-sm gap-8 shadow-sm h-5/6 rounded-2xl ">
          <article className="py-8 px-12 rounded-md backdrop-blur-sm bg-[#ffffff14] shadow-md   flex flex-col gap-8">
            <h1 className="flex text-5xl font-bold"> 
              <span className="bg-Primary-600 rounded-sm px-1 text-center flex items-center justify-center  text-white"> V </span> ianda
            </h1>
            <h2 className="text-3xl font-bold"> Login </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-bold"> Correo </label>
                  <input
                   type="email" 
                   name="email" 
                   id="email"  
                   required 
                   value={formData.email}
                   onChange={handleChange}
                   className="p-1 rounded-md" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="font-bold"> Contraseña </label>
                  <input type="password"
                   name="password" 
                   id="password" 
                   required 
                   value={formData.password}
                   onChange={handleChange}
                   className="p-1 rounded-md"/>
                  <p className="text-Primary-600 font-semibold text-end hover:text-Primary-800 cursor-pointer"> Olvidé la contraseña </p>
                </div>

              <button className="w-full rounded-md bg-Primary-600 py-2 px-4 text-white font-bold hover:bg-Primary-800"  type="submit" disabled={loading}> Iniciar Sesión </button>
                
              <h3 className="font-semibold">  ¿ No tienes cuenta ? <span className="text-Primary-600 font-bold underline hover:text-Primary-800 cursor-pointer"> crear una ahora </span></h3>

              {error && <p className="text-red-600 font-semibold">{error}</p>}
              </div>
            </form>
          </article>

          <div className="w-3/6 ">
            <img src={ImageLogin} alt="Foto de una persona sosteniendo unos postres" />
          </div>
      </div>

    </section>
  )

}

export default Login