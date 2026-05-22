import { useParams } from 'react-router-dom'
import { BackToWorkButton } from '../components/BackToWorkButton/BackToWorkButton'
import { ProjectTitle } from '../components/ProjectTitle/ProjectTitle'
import { projects } from '../config/projects'
import './projectPage.css'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)

  if (!project) {
    return (
      <main className="projectPage">
        <div className="projectPageInner">
          <BackToWorkButton />
          <h1 className="projectPageTitle">Project not found</h1>
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
        <p className="projectPageLead">{project.description}</p>
      </div>
    </main>
  )
}
