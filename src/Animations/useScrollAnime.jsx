// src/hooks/useScrollAnime.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnime = (triggerElement, options = {}) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (triggerElement.current) {
      gsap.fromTo(
        triggerElement.current,
        { opacity: 0, scale: 0.8 }, // Initial state
        {
          opacity: 1,
          scale: 1, // End state
          duration: options.duration || 0.5, // Default duration
          ease: options.ease || "power2.out", // Default easing
          scrollTrigger: {
            trigger: triggerElement.current,
            start: options.start || 'top 80%', // Default start
            end: options.end || 'bottom 50%', // Default end
            scrub: options.scrub || true, // Default scrub
          },
        }
      );
    }
  }, [triggerElement, options]);

  return animationRef;
};

export default useScrollAnime;
