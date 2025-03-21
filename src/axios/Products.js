import Axios from "./Axios";




export const getAllProducts = async () => {
  const getProducts = await Axios.get('/menus/all')
  const list = await getProducts;
  return list.data
}



