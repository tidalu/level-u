'use client';

import { cn } from '@/lib/utils';
import React, { memo, useEffect, useState } from 'react';
import { useLocalizedData } from '@/lib/useLocalizedData';
const InfiniteMovingCards = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const data = useLocalizedData();
  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        scrollerRef.current?.appendChild(item.cloneNode(true));
      });
      setStart(true);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
      containerRef.current.style.setProperty(
        '--animation-duration',
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
      );
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative max-w-full overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full gap-4 py-4 w-max',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {data?.reasons?.map((item: { question: string; answer: string }) => (
          <li
            key={item.question}
            className="w-[250px] md:w-[300px] flex-shrink-0 rounded-2xl border dark:border-slate-700 border-[#edf8ce] shadow-sm px-6 py-4 bg-[#F8FFE5] dark:bg-slate-800"
          >
            <blockquote>
              <div className="relative my-4 text-lg font-semibold text-slate-800 dark:text-slate-200">
                {item.question}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-100">
                {item.answer}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(InfiniteMovingCards);
