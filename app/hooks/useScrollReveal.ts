import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    // Check if `window` is available
    if (typeof window !== 'undefined') {
      // Your scroll reveal logic here
      // For example:
      const scrollReveal = require('scrollreveal'); // Example of dynamic import
      scrollReveal().reveal('.reveal', {
        // Your scroll reveal configuration
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true,
      });
    }
  }, []);
};

export default useScrollReveal;
