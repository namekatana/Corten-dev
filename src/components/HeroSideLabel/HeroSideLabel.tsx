import { motion, useScroll, useTransform } from 'motion/react'
import { expoOut } from '../../config/motionEase'
import { useHeroEntrance } from '../../hooks/useHeroEntrance'
import './HeroSideLabel.css'

export function HeroSideLabel() {
  const heroPlay = useHeroEntrance()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <motion.div
      className="heroSideLabelWrap"
      style={{ y: parallaxY }}
      initial={{ opacity: 0 }}
      animate={heroPlay ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: expoOut }}
    >
      <p className="heroSideLabel">CORTEN · Developer</p>
    </motion.div>
  )
}
