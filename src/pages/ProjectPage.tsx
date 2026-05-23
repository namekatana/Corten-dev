import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BackToWorkButton } from '../components/BackToWorkButton/BackToWorkButton'
import { AnimatedText } from '../components/AnimatedText/AnimatedText'
import { ProjectTitle } from '../components/ProjectTitle/ProjectTitle'
import { projects } from '../config/projects'
import './projectPage.css'

export function ProjectPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)

  if (!project) {
    return (
      <main className="projectPage">
        <div className="projectPageInner">
          <BackToWorkButton />
          <h1 className="projectPageTitle">
            <AnimatedText text={t('projects.notFound')} />
          </h1>
        </div>
      </main>
    )
  }

  return (
    <main className="projectPage">
      <div className="projectPageInner">
        <BackToWorkButton />
        <h1 className="projectPageTitle">
          <ProjectTitle projectId={project.id} title={project.title} />
        </h1>
        <p className="projectPageLead">
          <AnimatedText
            text={t(`projects.${project.id}.description`)}
            as="span"
          />
        </p>
      </div>
    </main>
  )
}
