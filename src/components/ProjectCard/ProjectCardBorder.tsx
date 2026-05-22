import './ProjectCardBorder.css'

export function ProjectCardBorder() {
  return (
    <svg
      className="projectCardBorder"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <rect className="projectCardBorderPath" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
