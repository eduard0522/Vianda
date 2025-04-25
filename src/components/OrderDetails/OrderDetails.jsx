import React from 'react';
import { FaCalendarAlt, FaCreditCard, FaHome, FaTag, FaCheckCircle, FaClock } from 'react-icons/fa'; // Font Awesome
import { updateOrderStatus } from '../../axios/Order';

function OrderDetails({ order }) {

  if (!order) {
    return (
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-600 italic">No se encontraron detalles para esta orden.</p>
      </div>
    );
  }


  const { orderId, state, paymentMethod, total, address, date, idCliente } = order;
  const formattedDate = new Date(date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  const getStateColor = (status) => {
    switch (status) {
      case 'PENDIENTE':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-300';
      case 'PREPARANDO':
        return 'bg-blue-100 text-blue-800  hover:bg-blue-300';
      case 'ENVIADO':
        return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-300';
      case 'ENTREGADO':
        return 'bg-green-400 text-green-900 hover:bg-green-300';
      case 'CANCELADO':
        return 'bg-red-100 text-red-800 hover:bg-red-300';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-300';
    }
  };

  const handleSubmit = (orderId , newStatus) => {
    if (!orderId) {
      alert('Por favor ingresa el ID de la orden');
      return;
    }

    if(state === 'PENDIENTE'){
      const confirmarPago = confirm(" ¿ deseas realizar el pago ? ")

    if(confirmarPago){
      updateOrderStatus(orderId, newStatus);
      alert("pago realizado con éxito !! tu pedido se esta preparando.")
       window.location.reload();
    }
    }
  };

  const stateColorClass = getStateColor(state);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 w-[400px]" >
      <div className="bg-gradient-to-br from-zinc-50 to-Primary-100 py-4 px-6 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-Primary-600 flex items-center">
          <FaTag className="h-6 w-6 mr-2" /> Orden #{orderId}
        </h3>
        <button className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium cursor-pointer  ${stateColorClass}`} onClick={() => {handleSubmit(orderId , "PREPARANDO") }}>
          {state}
        </button>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
            <FaCalendarAlt className="h-5 w-5 mr-2 text-blue-500" /> Fecha y Hora
          </h4>
          <p className="text-gray-600">{formattedDate}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
            <FaCreditCard className="h-5 w-5 mr-2 text-green-500" /> Método de Pago
          </h4>
          <p className="text-gray-600">{paymentMethod}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
            <FaHome className="h-5 w-5 mr-2 text-orange-500" /> Dirección de Envío
          </h4>
          <p className="text-gray-600">{address}</p>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
            <FaCheckCircle className="h-5 w-5 mr-2 text-teal-500" /> Cliente ID
          </h4>
          <p className="text-gray-600">{idCliente}</p>
        </div>
        <div className="md:col-span-2">
          <div className="bg-gray-50 rounded-md p-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaClock className="h-6 w-6 mr-2 text-purple-500" />
              <span className="text-lg font-semibold text-gray-800">Total:</span>
            </div>
            <span className="text-2xl font-bold text-green-600">${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;