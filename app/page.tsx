import Contador from '@/components/Contador';
import CambiadorImagen from '@/components/CambiadorImagen';
import FondoDinamico from '@/components/FondoDinamico'; // 1. Importas

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <h1 className="text-3xl font-bold">Práctica #2 - Hooks</h1>
      
      <Contador />
      <CambiadorImagen />
      
      {/* 2. Colocas el nuevo componente aquí abajo */}
      <FondoDinamico />
      
    </main>
  );
}