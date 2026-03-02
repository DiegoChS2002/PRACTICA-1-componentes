import Titulo from '@/components/Titulo';
import Parrafo from '@/components/Parrafo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-blue-500">
      {/* Probando el componente Titulo con Props de estilo */}
      <Titulo 
        texto="¡Práctica de Props Exitosa!" 
        color="text-indigo-500" 
        tamano="text-7xl" 
      />

      {/* Probando el componente Parrafo con Props de estilo y fuente */}
      <Parrafo 
        contenido="Este es un párrafo pequeño, de color gris y con fuente monoespaciada."
        color="text-gray-500"
        tamano="text-sm"
        fuente="font-mono"
      />

      <Parrafo 
        contenido="Y este es un párrafo grande, rojo y con fuente elegante (serif)."
        color="text-red-600"
        tamano="text-xl"
        fuente="font-serif"
      />
    </main>
  );
}