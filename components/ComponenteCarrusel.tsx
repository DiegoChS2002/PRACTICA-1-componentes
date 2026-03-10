"use client";
import React, { useState } from 'react';

const items = [
  { src: 'https://picsum.photos/id/10/800/400', caption: 'Imagen 1' },
  { src: 'https://picsum.photos/id/20/800/400', caption: 'Imagen 2' },
  { src: 'https://picsum.photos/id/30/800/400', caption: 'Imagen 3' },
  { src: 'https://picsum.photos/id/40/800/400', caption: 'Imagen 4' }
];

export default function ComponenteCarrusel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  return (
    <div className="p-3 border rounded bg-light shadow-sm" style={{ maxWidth: '600px' }}>
      <style>{`
        .btn-green { color: #28a745; font-size: 2rem; background: none; border: none; font-weight: bold; }
        .text-green { color: #28a745 !important; font-weight: bold; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
        .img-container { position: relative; width: 100%; height: 300px; overflow: hidden; border-radius: 8px; }
        .img-slide { width: 100%; height: 100%; object-fit: cover; }
        .controls { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
      `}</style>

      <div className="img-container">
        <img src={items[index].src} alt="carousel" className="img-slide" />
        <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', textAlign: 'center' }}>
          <h3 className="text-green">{items[index].caption}</h3>
        </div>
      </div>

      <div className="controls">
        <button className="btn-green" onClick={prev}>❮</button>
        <span className="badge bg-secondary">Imagen {index + 1} de 4</span>
        <button className="btn-green" onClick={next}>❯</button>
      </div>
    </div>
  );
}