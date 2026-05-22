import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { preloaderExitEase, preloaderLetters } from '../../config/intro'
import { useIntro } from '../../context/IntroContext'
import './Preloader.css'

type PreloaderPhase = 'dot' | 'line' | 'letters' | 'exit'

const exitDurationMs = 600
const exitStartMs = 1800

function lockScrollTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function Preloader() {
  const { showPreloader, revealHero, finishIntro } = useIntro()
  const [phase, setPhase] = useState<PreloaderPhase>('dot')
  const timersRef = useRef<number[]>([])

  useEffect(() => {
    if (!showPreloader) {
      return
    }

    lockScrollTop()
    document.documentElement.classList.add('introActive')
    document.body.classList.add('introActive')

    const lineTimer = window.setTimeout(() => setPhase('line'), 600)
    const lettersTimer = window.setTimeout(() => setPhase('letters'), 1000)
    const exitTimer = window.setTimeout(() => {
      lockScrollTop()
      setPhase('exit')
      revealHero()
    }, exitStartMs)
    const hideTimer = window.setTimeout(() => {
      document.documentElement.classList.remove('introActive')
      document.body.classList.remove('introActive')
      lockScrollTop()
      finishIntro()
    }, exitStartMs + exitDurationMs + 80)

    timersRef.current = [lineTimer, lettersTimer, exitTimer, hideTimer]

    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id))
      timersRef.current = []
    }
  }, [showPreloader, revealHero, finishIntro])

  return (
    <AnimatePresence mode="popLayout">
      {showPreloader ? (
        <motion.div
          key="preloader"
          className="preloader"
          initial={{ y: '0%' }}
          animate={{ y: phase === 'exit' ? '-100%' : '0%' }}
          transition={{ duration: exitDurationMs / 1000, ease: preloaderExitEase }}
        >
          {phase === 'dot' ? (
            <motion.div
              className="preloaderDot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : null}

          {phase === 'line' ? (
            <motion.div
              className="preloaderLine"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : null}

          {phase === 'letters' || phase === 'exit' ? (
            <div className="preloaderLetters">
              {preloaderLetters.map((letter, index) => (
                <motion.span
                  key={letter}
                  className="preloaderLetter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
