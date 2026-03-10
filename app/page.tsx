"use client";
import React from 'react';
// Importamos el componente que acabas de crear
import TablaPractica4 from '@/components/TablaPractica4';

export default function Home() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Práctica #4: Tablas Dinámicas</h1>
        <p className="text-muted">Importación de datos desde un archivo JSON</p>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          {/* Aquí aparece tu tabla de 20 registros */}
          <TablaPractica4 />
        </div>
      </div>
    </main>
  );
}