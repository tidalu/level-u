'use client';
import { useEffect, useRef } from 'react';

const HorizontalScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollSpeed = 2;

  const handleScroll = (event: WheelEvent) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY * scrollSpeed;
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      window.addEventListener('wheel', handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        window.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  const images = [
    'https://picsum.photos/id/237/300/600',
    'https://picsum.photos/id/238/800/500',
    'https://picsum.photos/id/239/400/300',
    'https://picsum.photos/id/240/800/600',
    'https://picsum.photos/id/241/500/400',
    'https://picsum.photos/id/242/700/600',
    'https://picsum.photos/id/243/800/300',
    'https://picsum.photos/id/244/600/600',
    'https://picsum.photos/id/245/800/500',
    'https://picsum.photos/id/246/500/600',
  ];

  return (
    <div className="homeBanner overflow-hidden w-screen mt-6">
      <div
        ref={scrollContainerRef}
        className="flex space-x-8 reveal overflow-x-auto scrollbar-hide scroll-smooth w-full h-auto py-4 items-center "
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 ">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className=" rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;