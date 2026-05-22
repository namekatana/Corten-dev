import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { expoOut } from '../config/motionEase'
import './sections.css'

type SectionShellProps = {
  id: string
  className?: string
  children: ReactNode
}

export function SectionShell({ id, className = '', children }: SectionShellProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.15, once: true })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`pageSection ${className}`.trim()}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.6, ease: expoOut }}
    >
      <div className="pageSectionInner">{children}</div>
    </motion.section>
  )
}
