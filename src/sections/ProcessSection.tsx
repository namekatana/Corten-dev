import { motion } from 'motion/react'
import { ProcessStep } from '../components/ProcessStep/ProcessStep'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { processSteps } from '../config/process'
import { SectionShell } from './SectionShell'
import './processSection.css'

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export function ProcessSection() {
  return (
    <SectionShell id="process" className="processSection">
      <SectionHead title="Process" />
      <motion.ol
        className="processGrid"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {processSteps.map((step) => (
          <ProcessStep key={step.index} step={step} />
        ))}
      </motion.ol>
    </SectionShell>
  )
}
