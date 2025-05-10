import { Variants } from 'motion/react'

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 100,
        mass: 4,
      },
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.15, // 0.2s delay between each
    },
  }),
}

export const itemsFling: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
}
