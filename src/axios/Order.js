import Axios from "./Axios";

export const getOrdersById = async () => {
  try {
    const response = await Axios.get(`/orders/all`)
    console.log(response)
    return response.data
  } catch (e) {
    console.log(e)
    return[ "no data"]
  }

}


export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await Axios.put(`/orders/status/${orderId}`, {
      status: newStatus
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Orden actualizada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el estado de la orden:', error.response?.data || error.message);
    throw error;
  }


};

export const deleteOrder = async (orderId) => {
  try {
    const response = await Axios.delete(`/orders/delete/${orderId}`, {
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(response){
      console.log('Orden eliminada:', response.data);
      return response
    }
  } catch (error) {
    console.error('Error al eliminar la orden:', error.response?.data || error.message);
    throw error;
  }
}
