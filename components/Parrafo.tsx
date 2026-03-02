interface ParrafoProps {
  contenido: string;
  color: string;
  tamano: string;
  fuente: string; // Ejemplo: "font-serif" o "font-mono"
}

export default function Parrafo({ contenido, color, tamano, fuente }: ParrafoProps) {
  return (
    <p className={`${color} ${tamano} ${fuente} my-4`}>
      {contenido}
    </p>
  );
}