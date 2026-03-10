"use client"; // Agrega esto arriba para que ReactStrap no se queje
import React from 'react';
import ComponenteToast from '../components/ComponenteToast';
import ComponenteModal from '../components/ComponenteModal';
import ComponenteCarrusel from '../components/ComponenteCarrusel';

// Si el rojo sigue en los imports, es que VS Code está lento. 
// Mientras funcione en localhost, ignóralo para el commit.

export default function Home() {
  return (
    <main className="container d-flex flex-column align-items-center p-5 gap-4">
      <h1 className="text-primary font-weight-bold">Práctica #3 - Librerías</h1>
      
      <hr className="w-100" />

      {/* Sección de Botones y Componentes */}
      <ComponenteToast />
      <ComponenteModal />
      <ComponenteCarrusel />
      
    </main>
  );
}