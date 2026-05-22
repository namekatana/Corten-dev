import { motion } from 'motion/react'
import { useFirstScroll } from '../../hooks/useFirstScroll'
import './ScrollHint.css'

export function ScrollHint() {
  const scrolled = useFirstScroll()

  return (
    <motion.a
      href="#about"
      className="scrollHint"
      aria-label="Scroll down"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 0 : 1 }}
      transition={{ duration: 0.35 }}
      style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
    >
      <motion.span
        className="scrollHintArrow"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M12 5v12M7 14l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </motion.span>
    </motion.a>
  )
}
