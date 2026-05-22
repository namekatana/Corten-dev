type ProjectTitleProps = {
  projectId: string
  title: string
}

export function ProjectTitle({ projectId, title }: ProjectTitleProps) {
  if (projectId !== 'mono-system') {
    return <>{title}</>
  }

  return (
    <>
      M
      <span className="projectTitleCircle" aria-label="o" />
      n
      <span className="projectTitleCircle" aria-label="o" />
      {' '}
      Design System
    </>
  )
}
