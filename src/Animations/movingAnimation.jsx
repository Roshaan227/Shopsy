// movingAnimation.js
import gsap from 'gsap';

const applyMovingTextAnimation = (ref, duration = 5) => {
    gsap.to(ref.current, {
        x: '100vw', // Move across the viewport width
        duration: duration,
        ease: 'linear',
        repeat: -1,
        repeatDelay: 0,
        // Ensure that the animation continues seamlessly
        modifiers: {
            x: (x) => {
                // Reset x position after reaching the end
                return parseFloat(x) % window.innerWidth + 'px';
            }
        }
    });
};

export default applyMovingTextAnimation;
