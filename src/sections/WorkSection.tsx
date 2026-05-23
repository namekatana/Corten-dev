import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../components/ProjectCard/ProjectCard'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { projects } from '../config/projects'
import type { ProjectSize } from '../config/projects'
import { expoOut } from '../config/motionEase'
import { SectionShell } from './SectionShell'
import './workSection.css'

const sizeClassMap: Record<ProjectSize, string> = {
  large: 'workGridLarge',
  small: 'workGridSmall',
  wide: 'workGridWide',
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: expoOut,
    },
  },
}

export function WorkSection() {
  const { t } = useTranslation()

  return (
    <SectionShell id="work">
      <SectionHead title={t('work.title')} />
      <motion.div
        className="workGrid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={sizeClassMap[project.size]}
            variants={cardVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  )
}
