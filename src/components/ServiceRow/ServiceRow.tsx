import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { ServiceItem } from '../../config/services'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import { expoOut } from '../../config/motionEase'
import './ServiceRow.css'

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
    },
  },
}

const indexVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.4,
    transition: { duration: 0.5, ease: expoOut },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: expoOut },
  },
}

const descVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: { duration: 0.5, delay: 0.1, ease: expoOut },
  },
}

type ServiceRowProps = {
  item: ServiceItem
}

export function ServiceRow({ item }: ServiceRowProps) {
  const { t } = useTranslation()

  return (
    <motion.div className="serviceRow" variants={rowVariants}>
      <motion.span className="serviceRowIndex" variants={indexVariants}>
        {item.index}
      </motion.span>
      <motion.span className="serviceRowTitle" variants={titleVariants}>
        <AnimatedText text={t(`services.items.${item.key}.title`)} />
      </motion.span>
      <motion.span className="serviceRowDesc" variants={descVariants}>
        <AnimatedText text={t(`services.items.${item.key}.description`)} />
      </motion.span>
    </motion.div>
  )
}
