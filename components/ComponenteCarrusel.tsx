"use client";
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  { src: 'https://picsum.photos/id/1025/800/400', altText: 'Elefante', key: 1 },
  { src: 'https://picsum.photos/id/1024/800/400', altText: 'Abeja', key: 2 },
  { src: 'https://picsum.photos/id/1064/800/400', altText: 'Oso', key: 3 },
  { src: 'https://picsum.photos/id/1084/800/400', altText: 'Morsa', key: 4 },
];

export default function MiCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="custom-carousel">
      <style>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
        }
        .carousel-caption h3 {
          color: #28a745 !important;
        }
      `}</style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={(newIndex) => { if (animating) return; setActiveIndex(newIndex); }} />
        {items.map((item) => (
          <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
            <img src={item.src} alt={item.altText} className="d-block w-100" style={{ borderRadius: '15px' }} />
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}