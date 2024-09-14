import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = ({
  triggerElement = null,
  start = 'top 80%',
  end = 'bottom 50%',
  scrub = true,
  fromVars = { opacity: 0, scale: 0.8 },
  toVars = { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
}) => {
  const elementRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const element = triggerElement || elementRef.current;

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      fromVars,
      {
        ...toVars,
        scrollTrigger: {
          trigger: element,
          start: start,
          end: end,
          scrub: scrub,
          onEnter: () => setIsAtEnd(true),
          onLeave: () => setIsAtEnd(false),
        },
      }
    );

    // Cleanup function to kill the animation and ScrollTrigger on unmount
    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill(); // Properly kill the ScrollTrigger instance
      }
      animation.kill(); // Properly kill the animation instance
    };
  }, [triggerElement, start, end, scrub, fromVars, toVars]);

  return { elementRef, isAtEnd };
};

export default useGsapAnimation;
