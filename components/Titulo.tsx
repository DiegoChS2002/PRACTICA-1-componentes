interface TituloProps {
  texto: string;
  color: string; // Ejemplo: "text-red-500"
  tamano: string; // Ejemplo: "text-5xl"
}

export default function Titulo({ texto, color, tamano }: TituloProps) {
  return (
    <h1 className={`${color} ${tamano} font-bold`}>
      {texto}
    </h1>
  );
}