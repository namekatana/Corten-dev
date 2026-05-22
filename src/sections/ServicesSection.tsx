import { motion } from 'motion/react'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { ServiceRow } from '../components/ServiceRow/ServiceRow'
import { serviceAsideLines, serviceItems } from '../config/services'
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
  return (
    <SectionShell id="services">
      <SectionHead title="What I do" />
      <div className="servicesLayout">
        <motion.div
          className="servicesTable"
          variants={tableVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {serviceItems.map((item) => (
            <ServiceRow key={item.index} item={item} />
          ))}
        </motion.div>
        <aside className="servicesAside" aria-label="Availability">
          {serviceAsideLines.map((line) => (
            <p key={line} className="servicesAsideLine">
              <span className="servicesAsideDot" aria-hidden="true">
                ·
              </span>
              {line}
            </p>
          ))}
        </aside>
      </div>
    </SectionShell>
  )
}
