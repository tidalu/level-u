// components/ScrollAnimateWrapper.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimateWrapperProps {
  children: React.ReactNode;
  initial?: object;
  animate?: object;
  transition?: object;
}

const ScrollAnimateWrapper = ({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
}: ScrollAnimateWrapperProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjust based on when you want to trigger the animation (0.1 = 10% of the element is visible)
  });

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, animate, inView]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimateWrapper;
