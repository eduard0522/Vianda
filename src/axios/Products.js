import Axios from "./Axios";

export const getAllProducts = async () => {
  try {
    const getProducts = await Axios.get('/menus/all')
    console.log(getProducts)
    return getProducts.data
  } catch (e) {
    console.log(e)
    return[ "no data "]
  }

}



