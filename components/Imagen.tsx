import Image from 'next/image';

export default function Imagen({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="my-4">
      <Image src={src} alt={alt} width={300} height={300} className="rounded-lg" />
    </div>
  );
}