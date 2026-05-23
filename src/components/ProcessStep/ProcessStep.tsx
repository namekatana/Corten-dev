import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { ProcessStep as ProcessStepData } from '../../config/process'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import { expoOut } from '../../config/motionEase'
import './ProcessStep.css'

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: expoOut },
  },
}

type ProcessStepProps = {
  step: ProcessStepData
}

export function ProcessStep({ step }: ProcessStepProps) {
  const { t } = useTranslation()

  return (
    <motion.li className="processStep" variants={stepVariants}>
      <div className="processStepHead">
        <span className="processStepIndex">{step.index}</span>
        <span className="processStepTitle">
          <AnimatedText text={t(`process.steps.${step.key}.title`)} />
        </span>
      </div>
      <span className="processStepRule" aria-hidden="true" />
      <p className="processStepBody">
        <AnimatedText text={t(`process.steps.${step.key}.body`)} as="span" />
      </p>
    </motion.li>
  )
}
