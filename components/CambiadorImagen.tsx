"use client"; // 1. Le avisamos a Next.js que este componente tiene botones y lógica
import { useState } from 'react';
import Image from 'next/image';

export default function CambiadorImagen() {
  // 2. Definimos las dos rutas de las imágenes que vamos a intercambiar
  const foto1 = "https://nextjs.org/icons/next.svg";
  const foto2 = "https://nextjs.org/icons/vercel.svg";

  // 3. Creamos el estado 'imagen' que empieza con la foto1
  const [imagen, setImagen] = useState(foto1);

  // 4. Función que cambia la imagen al hacer clic
  const alternarImagen = () => {
    if (imagen === foto1) {
      setImagen(foto2);
    } else {
      setImagen(foto1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl shadow-md bg-white my-4 w-64">
      <h3 className="font-semibold text-gray-500 italic">Práctica: Imágenes</h3>
      
      {/* 5. Mostramos la imagen actual del estado */}
      <div className="h-24 flex items-center">
        <Image src={imagen} alt="Imagen dinámica" width={120} height={40} />
      </div>

      <button 
        onClick={alternarImagen}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Cambiar Imagen
      </button>
    </div>
  );
}