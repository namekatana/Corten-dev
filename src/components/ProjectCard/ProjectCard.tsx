import { motion } from 'motion/react'
import type { Project, ProjectAccentShape, ProjectPattern } from '../../config/projects'
import { usePageTransition } from '../../context/TransitionContext'
import { ProjectCardBorder } from './ProjectCardBorder'
import { ProjectTitle } from '../ProjectTitle/ProjectTitle'
import './ProjectCard.css'

const patternClass: Record<ProjectPattern, string> = {
  grid: 'projectPatternGrid',
  lines: 'projectPatternLines',
  dots: 'projectPatternDots',
  cross: 'projectPatternCross',
}

const accentShapeClass: Record<ProjectAccentShape, string> = {
  circle: 'projectAccentShapeCircle',
  line: 'projectAccentShapeLine',
  arc: 'projectAccentShapeArc',
  ring: 'projectAccentShapeRing',
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { navigate } = usePageTransition()
  const sizeClass =
    project.size === 'large'
      ? 'projectCardLarge'
      : project.size === 'wide'
        ? 'projectCardWide'
        : 'projectCardSmall'

  const openProject = () => {
    navigate(`/project/${project.id}`)
  }

  return (
    <motion.article
      className={`projectCard ${sizeClass}`.trim()}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      role="link"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openProject()
        }
      }}
    >
      <ProjectCardBorder />
      <div className="projectCardMedia">
        <span className="projectCardTech">{project.tech}</span>
        <div className="projectCardVisual">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt=""
                className="projectCardImage"
              />
              <div className="projectCardOverlay" aria-hidden="true" />
            </>
          ) : (
            <div
              className={`projectPattern ${patternClass[project.pattern]}`}
              aria-hidden="true"
            />
          )}
          <span
            className={`projectAccentShape ${accentShapeClass[project.accentShape]}`}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="projectCardBody">
        <h3 className="projectCardName">
          <ProjectTitle projectId={project.id} title={project.title} />
        </h3>
        <p className="projectCardDesc">{project.description}</p>
        <p className="projectCardOutcome">
          <span className="projectCardOutcomeArrow" aria-hidden="true">
            ↑
          </span>
          {project.outcome}
        </p>
        <div className="projectCardFoot">
          <span className="projectCardYear">{project.year}</span>
          <span className="projectCardView">→ View</span>
        </div>
      </div>
    </motion.article>
  )
}
