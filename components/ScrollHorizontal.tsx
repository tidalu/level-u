'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const HorizontalScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const scrollSpeed = 2;

  const handleScroll = (event: WheelEvent) => {
    if (scrollContainerRef.current) {
      // Pause auto-scrolling when user scrolls manually
      setIsAutoScrolling(false);
      scrollContainerRef.current.scrollLeft += event.deltaY * scrollSpeed + 2;
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

  useEffect(() => {
    if (!isAutoScrolling) return;

    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 3;
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoScrolling]);

  const images = [
    '/gallery/pic1.jpg',
    '/gallery/pic2.jpg',
    '/gallery/pic3.jpg',
    '/gallery/pic4.jpg',
    '/gallery/pic5.jpg',
  ];

  return (
    <div className="homeBanner overflow-hidden w-screen mt-6 ">
      <div
        ref={scrollContainerRef}
        className="flex space-x-8 reveal overflow-x-auto scrollbar-hide scroll-smooth w-full h-auto xl:h-2/5 py-4 items-center justify-center "
      >
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 !h-full">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className=" rounded-lg w-auto h-auto object-cover"
              width={200}
              height={300}
              priority
              decoding="async"
            />
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full z-10 opacity-20 bg-gray-900"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(HorizontalScroll);
