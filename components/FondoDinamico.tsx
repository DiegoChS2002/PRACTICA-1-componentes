"use client";
import { useState, useEffect } from 'react';

export default function FondoDinamico() {
  const [color, setColor] = useState('white'); // Guardamos el nombre del color

  useEffect(() => {
    // 1. Forzamos el color directamente al estilo del body
    document.body.style.backgroundColor = color;
  }, [color]);

  const cambiarColor = () => {
    // 2. Si es blanco, cámbialo a un azul suave (o cualquier color que te guste)
    if (color === 'white') {
      setColor('#063e88'); // Este es un azul cielo claro
    } else {
      setColor('white');
    }
  };

  return (
    <div className="p-4 text-center border rounded-lg shadow-sm bg-white w-64">
      <h3 className="font-semibold mb-4 text-gray-800">Práctica: Fondo</h3>
      <button 
        onClick={cambiarColor}
        className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 transition active:scale-95"
      >
        Alternar Fondo
      </button>
    </div>
  );
}