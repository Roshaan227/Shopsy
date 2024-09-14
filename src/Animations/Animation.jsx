import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function for Scroll-triggered Animation (including fade-in on scroll)
export const useGsapAnimationOne = (targetClass) => {
  useEffect(() => {
    gsap.fromTo(targetClass, 
      { 
        y: 30,  // Start position slightly below the original position
        opacity: 0,  // Start fully transparent
      },
      {
        y: 0,  // End at the original position
        opacity: 1,  // End fully opaque
        duration: 1.7,  // Smooth transition over 1.7 seconds
        stagger: {
          each: 0.3,  // Each element starts its animation 0.3 seconds apart
          from: 'start',  // Animation starts from the first element
        },
        ease: 'power2.out',  // Overall ease for the animation
        scrollTrigger: {
          trigger: targetClass,  // Trigger the animation on this element
          start: 'top 80%',  // Start the animation when the top of the element is 80% from the top of the viewport
          end: 'top 20%',  // End the animation when the top of the element is 20% from the top of the viewport
          toggleActions: 'play none none reverse',  // Play the animation on enter, reverse on exit
        },
      }
    );
  }, [targetClass]); // Dependency array with targetClass to rerun the animation if it changes
};

// Function for Continuous Up-Down Animation


export const useGsapContinuousAnimation = (targetClass) => {
  useEffect(() => {
    gsap.to(targetClass, {
      y: 60,               // Move the element by 60px on the x-axis
      duration: 1,         // Medium speed (2 seconds for each cycle)
      repeat: -1,          // Infinite loop
      yoyo: true,          // Moves back to the original position after moving 60px
      ease: "power1.inOut" // Smooth easing for a natural look
    });
  }, [targetClass]);
};

// New Function for Scroll-triggered Fade-In Animation
export const useGsapFadeInOnScroll = (targetClass) => {
  useEffect(() => {
    gsap.fromTo(targetClass, 
      {
        opacity: 0,  // Start fully transparent
      }, 
      {
        opacity: 1,  // End fully opaque
        duration: 2.5,  // Smooth transition over 1.5 seconds
        ease: 'power2.out',  // Easing for the fade-in
        scrollTrigger: {
          trigger: targetClass,  // Trigger the animation on this element
          start: 'top 80%',  // Start the animation when the top of the element is 80% from the top of the viewport
          toggleActions: 'play none none reverse',  // Play the animation on enter, reverse on exit
        },
      }
    );
  }, [targetClass]);
};
