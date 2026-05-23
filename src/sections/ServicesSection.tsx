import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { AnimatedText } from '../components/AnimatedText/AnimatedText'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { ServiceRow } from '../components/ServiceRow/ServiceRow'
import { serviceAsideKeys, serviceItems } from '../config/services'
import { SectionShell } from './SectionShell'
import './servicesSection.css'

const tableVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <SectionShell id="services">
      <SectionHead title={t('services.title')} />
      <div className="servicesLayout">
        <motion.div
          className="servicesTable"
          variants={tableVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {serviceItems.map((item) => (
            <ServiceRow key={item.key} item={item} />
          ))}
        </motion.div>
        <aside className="servicesAside" aria-label="Availability">
          {serviceAsideKeys.map((key) => (
            <p key={key} className="servicesAsideLine">
              <span className="servicesAsideDot" aria-hidden="true">
                ·
              </span>
              <AnimatedText text={t(key)} />
            </p>
          ))}
        </aside>
      </div>
    </SectionShell>
  )
}
