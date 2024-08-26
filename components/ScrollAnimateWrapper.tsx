// components/ScrollAnimateWrapper.tsx
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
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
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, animate, inView]);

  return (
    <div>
      <motion.div
        ref={ref}
        initial={initial}
        animate={controls}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default React.memo(ScrollAnimateWrapper);
