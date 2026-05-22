import './HeroVisual.css'

export function HeroVisual() {
  return (
    <div className="heroVisual" aria-hidden="true">
      <div className="heroVisualDots" />
      <span className="heroVisualRing heroVisualRingOuter" />
      <span className="heroVisualRing heroVisualRingMid" />
      <span className="heroVisualRing heroVisualRingInner" />
    </div>
  )
}
