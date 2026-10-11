export const transitionConfig = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier easing
};

export const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: transitionConfig },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
