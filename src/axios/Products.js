import Axios from "./Axios";




export const getAllProducts = async () => {
  const getProducts = await Axios.get('/productos')
  const list = await getProducts;
  return list.data
}



