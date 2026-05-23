import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <SectionShell id="process" className="processSection">
      <SectionHead title={t('process.title')} />
      <motion.ol
        className="processGrid"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {processSteps.map((step) => (
          <ProcessStep key={step.key} step={step} />
        ))}
      </motion.ol>
    </SectionShell>
  )
}
