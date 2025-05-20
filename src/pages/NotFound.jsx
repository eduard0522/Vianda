import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-8xl font-bold" style={{ color: '#39DB4A' }}>404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">¡Oops! Página no encontrada</h2>
      <p className="text-gray-600 mt-2">
        Parece que esta página del restaurante se nos quemó en el horno 🍕
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-lg font-bold text-white"
        style={{ backgroundColor: '#39DB4A' }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;