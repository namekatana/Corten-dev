import { motion, useScroll, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import { expoOut } from '../../config/motionEase'
import { useHeroEntrance } from '../../hooks/useHeroEntrance'
import './HeroSideLabel.css'

export function HeroSideLabel() {
  const { t } = useTranslation()
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
      <p className="heroSideLabel">
        <AnimatedText text={t('hero.sideLabel')} />
      </p>
    </motion.div>
  )
}
