'use client';

import { useEffect } from 'react';

const useAnimatedTitle = (title: string, delay = 200) => {
  useEffect(() => {
    let index = 0;
    const fullTitle = title + ' '; // Add a space for smooth looping

    const intervalId = setInterval(() => {
      const displayedTitle =
        fullTitle.substring(index) + fullTitle.substring(0, index);
      document.title = displayedTitle;
      index = (index + 1) % fullTitle.length;
    }, delay);

    return () => clearInterval(intervalId);
  }, [title, delay]);
};

export default function AnimatedTitle() {
  const title = "LEVEL ™ O'quv Markazi | Учебный Центр | Learning Center";

  useAnimatedTitle(title, 500);

  return null;
}
