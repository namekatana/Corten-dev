import { AnimatePresence, motion } from 'motion/react'
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { expoOut } from '../config/motionEase'
import '../components/PageTransition/PageTransitionOverlay.css'

type OverlayPhase = 'hidden' | 'in' | 'out'

type TransitionContextValue = {
  navigate: (path: string) => void
}

const TransitionContext = createContext<TransitionContextValue | null>(null)

type PageTransitionProviderProps = {
  children: ReactNode
}

function scrollToHome() {
  const home = document.getElementById('home')
  if (home) {
    home.scrollIntoView({ behavior: 'smooth' })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const routerNavigate = useNavigate()
  const location = useLocation()
  const [phase, setPhase] = useState<OverlayPhase>('hidden')
  const pendingPath = useRef<string | null>(null)

  const navigate = useCallback(
    (path: string) => {
      if (phase !== 'hidden') {
        return
      }

      const currentPath = location.pathname
      if (currentPath === path) {
        if (path === '/') {
          scrollToHome()
        }
        return
      }

      pendingPath.current = path
      setPhase('in')
    },
    [phase, location.pathname],
  )

  const handleComplete = () => {
    if (phase === 'in' && pendingPath.current) {
      routerNavigate(pendingPath.current)
      pendingPath.current = null
      window.scrollTo(0, 0)
      setPhase('out')
      return
    }
    if (phase === 'out') {
      setPhase('hidden')
    }
  }

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {phase !== 'hidden' ? (
          <motion.div
            className="pageTransitionOverlay"
            initial={{ x: '-100%' }}
            animate={{ x: phase === 'in' ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.42, ease: expoOut }}
            onAnimationComplete={handleComplete}
          />
        ) : null}
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('usePageTransition requires PageTransitionProvider')
  }
  return context
}
