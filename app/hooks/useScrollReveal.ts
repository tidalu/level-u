// hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true,
    });
  }, []);
}
