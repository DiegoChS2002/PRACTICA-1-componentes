"use client"; // Obligatorio para usar Hooks
import { useState } from 'react';

export default function Contador() {
  // valor: la variable que recuerda el número
  // setValor: la función para cambiar ese número
  const [valor, setValor] = useState(0);

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-gray-50 my-2 text-center">
      <h2 className="text-xl font-bold mb-2">Contador: {valor}</h2>
      <button 
        onClick={() => setValor(valor + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Aumentar
      </button>
    </div>
  );
}