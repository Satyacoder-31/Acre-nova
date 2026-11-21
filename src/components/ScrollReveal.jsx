import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in'
  duration = 700,
  delay = 0,
  threshold = 0.15,
  className = '',
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return {
            opacity: 0,
            transform: 'translateY(36px)',
            transition: baseTransition,
          };
        case 'fade-down':
          return {
            opacity: 0,
            transform: 'translateY(-36px)',
            transition: baseTransition,
          };
        case 'fade-left':
          return {
            opacity: 0,
            transform: 'translateX(40px)',
            transition: baseTransition,
          };
        case 'fade-right':
          return {
            opacity: 0,
            transform: 'translateX(-40px)',
            transition: baseTransition,
          };
        case 'zoom-in':
          return {
            opacity: 0,
            transform: 'scale(0.92)',
            transition: baseTransition,
          };
        default:
          return {
            opacity: 0,
            transform: 'translateY(30px)',
            transition: baseTransition,
          };
      }
    }

    return {
      opacity: 1,
      transform: 'none',
      transition: baseTransition,
    };
  };

  return (
    <div
      ref={elementRef}
      style={getAnimationStyles()}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
