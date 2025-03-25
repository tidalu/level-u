"use client"

import React, { useState, useEffect, ReactNode } from 'react'

type SlideDirection = 'left' | 'right' | 'up' | 'down'

interface SlideAnimationWrapperProps {
  children: ReactNode
  direction?: SlideDirection
  duration?: number
  delay?: number
  className?: string
  triggerOnMount?: boolean
  triggerOnScroll?: boolean
  distance?: number
}

const SlideAnimationWrapper: React.FC<SlideAnimationWrapperProps> = ({
  children,
  direction = 'left',
  duration = 600,
  delay = 0,
  className = '',
  triggerOnMount = true,
  triggerOnScroll = false,
  distance = 50,
}) => {
  const [isVisible, setIsVisible] = useState(!triggerOnMount && !triggerOnScroll)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  // Get initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return `translateX(${distance}px)`
      case 'right':
        return `translateX(-${distance}px)`
      case 'up':
        return `translateY(${distance}px)`
      case 'down':
        return `translateY(-${distance}px)`
      default:
        return 'translateX(0)'
    }
  }

  // Handle scroll-based animation
  useEffect(() => {
    if (!triggerOnScroll || !ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, triggerOnScroll])

  // Handle mount-based animation
  useEffect(() => {
    if (!triggerOnMount) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [triggerOnMount, delay])

  return (
    <div
      ref={setRef}
      className={`overflow-hidden ${className}`}
    >
      <div
        style={{
          transform: isVisible ? 'translate(0)' : getInitialTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SlideAnimationWrapper
