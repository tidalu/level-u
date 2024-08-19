'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setIsAnimating(true);
  }, [words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={words[currentWordIndex]}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          ' inline-block relative text-start  text-neutral-900 dark:text-neutral-100 ',
          className
        )}
      >
        <div className="flex flex-col  ">
          {words[currentWordIndex].split(' ').map((word, index) => (
            <motion.span
              key={`${words[currentWordIndex]}-${index}`}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className={`inline-block   ${
                index === 0
                  ? 'flex-grow flex items-start -mb-[3px] justify-start '
                  : 'flex-grow flex items-end justify-start -mt-[3px] '
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
