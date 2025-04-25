import Axios from "../../axios/Axios"

export const createOrderHelper = async (products, user , total ) => {
  if( !products || products.length <= 0 || !user || !total){
    return false
  }
  try {
    const order = {
      "state": "PENDIENTE",
      "paymentMethod": "EFECTIVO",
      "total": total,
      "address": user.address,
      "customerId": user.id,
      "detallesPedido": products.map((product) => 
        {
          return {
            "menuId": product.idMenu,
            "quantity": product.cantidad,
            "price":product.precio
          }
        })
    }
  
    const response = await Axios.post(
      "/orders/create", 
      order , 
      {
        headers : {
          "Content-Type" : "application/json"
        }
    })
  
    if(response && response.data){
      return true
    }
    return false
  } catch (error) {
    console.log(error)
    return false
  }
  
}