import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { revealEase } from '../../config/motionEase'
import './sectionHead.css'

type SectionHeadProps = {
  title: string
}

export function SectionHead({ title }: SectionHeadProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref} className="sectionHead">
      <motion.span
        className="sectionHeadTitle"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={
          inView
            ? { clipPath: 'inset(0 0% 0 0)' }
            : { clipPath: 'inset(0 100% 0 0)' }
        }
        transition={{ duration: 0.7, ease: revealEase }}
      >
        {title}
      </motion.span>
      <motion.span
        className="sectionHeadLine"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        style={{ transformOrigin: 'left center' }}
        transition={{ duration: 0.8, delay: 0.2, ease: revealEase }}
      />
    </div>
  )
}

type RevealBlockTitleProps = {
  title: string
  className: string
}

export function RevealBlockTitle({ title, className }: RevealBlockTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={
        inView
          ? { clipPath: 'inset(0 0% 0 0)' }
          : { clipPath: 'inset(0 100% 0 0)' }
      }
      transition={{ duration: 0.7, ease: revealEase }}
    >
      {title}
    </motion.h2>
  )
}
