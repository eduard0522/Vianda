import React, { useState } from "react";
import UserContext from "../Context/User/UserContext";
import { useContext , useEffect } from "react";
import { getOrdersById } from "../../axios/Order";
import OrderCard from "./OrderCard";
import { HiOutlineShoppingBag } from "react-icons/hi";


export default function Orders() {
  const statuses = ["TODAS" , "PENDIENTE", "PREPARANDO", "ENVIADO" , "CANCELADO" , "ENTREGADO"];

    const{user} = useContext(UserContext)
    const [ orders , setOrders] = useState(null)
    useEffect(() => {
      const getData = async () => {
        const order = await getOrdersById(user?.id)
        setOrders(order)
        console.log(order)
      }
      getData()
    },[user])
  

  const [selectedStatus, setSelectedStatus] = useState("TODAS");

  const filteredOrders =
    selectedStatus === "TODAS"
      ? orders
      : orders.filter((order) => order.state === selectedStatus);

  if(!orders || orders.length <= 0){
    return(
      <h2 className="mt-24"> No data </h2>
    )
  }



const validateState = filteredOrders && filteredOrders.length > 0;

return (
  <div className="mt-24 ">
    <div className="mb-8 flex justify-center">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setSelectedStatus(status)}
          className={`px-4 py-2 mr-2 rounded-full font-semibold capitalize ${
            selectedStatus === status
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
        >
          {status}
        </button>
      ))}
    </div>

    {validateState ? (
      <ul className="flex items-center justify-center space-y-4">
        {filteredOrders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </ul>
    ) : (
      <div className="flex flex-col items-center gap-8 h-4/5 justify-center mt-24 ">
        <p className="text-zinc-400 font-semibold text-xl text-center">
          No tienes órdenes en este estado
        </p>
        <HiOutlineShoppingBag className="text-zinc-300 text-5xl" />
      </div>
    )}
  </div>
)
}