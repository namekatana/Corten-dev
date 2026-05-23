import { AnimatePresence, motion } from 'motion/react'
import './AnimatedText.css'

type AnimatedTextProps = {
  text: string
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'li'
}

export function AnimatedText({
  text,
  className = '',
  as: Tag = 'span',
}: AnimatedTextProps) {
  return (
    <Tag className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          className="animatedTextInner"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </Tag>
  )
}
