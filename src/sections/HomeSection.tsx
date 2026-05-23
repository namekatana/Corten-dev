import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { AnimatedText } from '../components/AnimatedText/AnimatedText'
import { HeroGlow } from '../components/HeroGlow/HeroGlow'
import { HeroShipLine } from '../components/HeroShipLine/HeroShipLine'
import { HeroSideLabel } from '../components/HeroSideLabel/HeroSideLabel'
import { HeroStats } from '../components/HeroStats/HeroStats'
import { HeroStatusTypewriter } from '../components/HeroStatusTypewriter/HeroStatusTypewriter'
import { HeroVisual } from '../components/HeroVisual/HeroVisual'
import { MagneticButton } from '../components/MagneticButton/MagneticButton'
import { ScrollHint } from '../components/ScrollHint/ScrollHint'
import { useHeroEntrance } from '../hooks/useHeroEntrance'
import { expoOut } from '../config/motionEase'
import './homeSection.css'

const hidden = { opacity: 0 }
const shown = { opacity: 1 }

export function HomeSection() {
  const { t } = useTranslation()
  const heroPlay = useHeroEntrance()

  return (
    <section id="home" className="hero">
      <HeroGlow />
      <div className="heroNoise" aria-hidden="true" />
      <HeroVisual />
      <HeroStatusTypewriter active={heroPlay} />
      <div className="heroMain">
        <h1 className="heroTitle">
          <motion.span
            className="heroTitleLine"
            initial={{ y: 60, opacity: 0 }}
            animate={heroPlay ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: expoOut }}
          >
            <AnimatedText text={t('hero.line1')} />
          </motion.span>
          <motion.span
            className="heroTitleLine"
            initial={{ y: 60, opacity: 0 }}
            animate={heroPlay ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: expoOut }}
          >
            <AnimatedText text={t('hero.line2')} />
          </motion.span>
          <motion.span
            className="heroTitleLine"
            initial={{ y: 60, opacity: 0 }}
            animate={heroPlay ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: expoOut }}
          >
            <AnimatedText text={`${t('hero.line3')} `} />
            <span className="heroTitleAccent">
              <AnimatedText text={t('hero.accent')} />
            </span>
          </motion.span>
        </h1>
        <motion.p
          className="heroStack"
          initial={hidden}
          animate={heroPlay ? shown : hidden}
          transition={{ duration: 0.55, delay: 0.5, ease: expoOut }}
        >
          <AnimatedText text={t('hero.stack')} />
        </motion.p>
        <motion.div
          initial={hidden}
          animate={heroPlay ? shown : hidden}
          transition={{ duration: 0.55, delay: 0.58, ease: expoOut }}
        >
          <HeroShipLine play={heroPlay} />
        </motion.div>
        <motion.div
          className="heroActions"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            heroPlay ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5, delay: 0.65, ease: expoOut }}
        >
          <MagneticButton href="#work" className="btnFilled heroCtaPrimary">
            <AnimatedText text={t('hero.ctaPrimary')} />
          </MagneticButton>
          <MagneticButton href="#contact" className="btnOutline heroCtaSecondary">
            <AnimatedText text={t('hero.ctaSecondary')} />
          </MagneticButton>
        </motion.div>
      </div>
      <motion.div
        className="heroStatsWrap"
        initial={hidden}
        animate={heroPlay ? shown : hidden}
        transition={{ duration: 0.55, delay: 0.9, ease: expoOut }}
      >
        <HeroStats play={heroPlay} />
      </motion.div>
      <HeroSideLabel />
      <ScrollHint />
    </section>
  )
}
