import Axios from "./Axios";

export const LoginRequest = async (data , setLoading)  =>{
  try {

    const response = await Axios.post(
      "/usuarios/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Login exitoso:", response.data);
    return response
    // Ejemplo de uso después del login
    // localStorage.setItem("user", JSON.stringify(response.data));
    // navigate("/dashboard");

  } catch (err) {
    const msg =
      err.response?.data?.error ||
      err.response?.data?.message ||
      "Error al iniciar sesión";

    console.log("failesd")
    console.log(msg);
    console.log(err)
   return false
   
  } finally {
    setLoading(false);
  
  }
};
