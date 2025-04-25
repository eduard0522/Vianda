import { useContext, useEffect, useState } from 'react'
import { Layout }  from '../components/Layouts/Layout'
import OrderDetails from '../components/OrderDetails/OrderDetails'
import { getOrdersById } from '../axios/Order'
import UserContext from '../components/Context/User/UserContext'

const OrderDetailPage = () => {
  const{user} = useContext(UserContext)

  console.log(user)
  const [ orders , setOrders] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const order = await getOrdersById(user?.id)
      setOrders(order)
    }
    getData()
  },[user])

  if(!orders || !orders?.length || orders.length <= 0){
    return(
      <h2> No hay ordenes. </h2>
    )
  }

  return(
    <Layout>
        <section className='mt-24 flex flex-wrap gap-8 justify-center items-center'>
            {
             orders.map((order) => <OrderDetails order={order} />)
            }
        </section>
    </Layout>
  )
}

export default OrderDetailPage