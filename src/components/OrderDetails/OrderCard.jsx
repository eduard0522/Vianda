import React from "react";
import { updateOrderStatus } from "../../axios/Order";

export default function OrderCard({ order }) {

   const handleSubmit = (orderId , orderStatus , newStatus) => {
  
    if (!orderId) {
      alert('Por favor ingresa el ID de la orden');
      return;
    }
    
    if(orderStatus){
      const confirmarPago = confirm(" ¿ deseas realizar el pago ? ")
    if(confirmarPago){
      updateOrderStatus(orderId, newStatus);
      alert("pago realizado con éxito !! tu pedido se esta preparando.")
       window.location.reload();
    }
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto w-[350px]">
      <div className="flex justify-between items-center mb-4 border-b-2 border-gray-400 pb-1 ">
        <h2 className="text-xl font-semibold">Pedido #{order.orderId}</h2>
        <span
          onClick={() => { handleSubmit(order.orderId , order.state, "PREPARANDO") }}
          className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer
          ${
            order.state === "PENDIENTE"
              ? "bg-yellow-200 text-yellow-800"
              : order.state === "PREPARANDO"
              ? "bg-blue-200 text-blue-800"
              : order.state === "COMPLETADO"
              ? "bg-green-200 text-green-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {order.state}
        </span>
      </div>

      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Total:</span> ${order.total.toFixed(2)}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Dirección:</span> {order.address}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Método de pago:</span> {order.paymentMethod}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Fecha:</span>{" "}
        {new Date(order.date).toLocaleDateString()}
      </p>
    </div>
  );
}