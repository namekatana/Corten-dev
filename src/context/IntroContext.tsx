import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { introStorageKey } from '../config/intro'

type IntroContextValue = {
  showPreloader: boolean
  heroReady: boolean
  revealHero: () => void
  finishIntro: () => void
}

const IntroContext = createContext<IntroContextValue | null>(null)

function readIntroSeen() {
  try {
    return sessionStorage.getItem(introStorageKey) === '1'
  } catch {
    return true
  }
}

type IntroProviderProps = {
  children: ReactNode
}

export function IntroProvider({ children }: IntroProviderProps) {
  const [seenOnLoad] = useState(readIntroSeen)
  const [showPreloader, setShowPreloader] = useState(!seenOnLoad)
  const [heroReady, setHeroReady] = useState(seenOnLoad)

  const revealHero = useCallback(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    setHeroReady(true)
  }, [])

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(introStorageKey, '1')
    } catch {
      setShowPreloader(false)
      return
    }
    window.scrollTo(0, 0)
    setShowPreloader(false)
  }, [])

  const value = useMemo(
    () => ({
      showPreloader,
      heroReady,
      revealHero,
      finishIntro,
    }),
    [showPreloader, heroReady, revealHero, finishIntro],
  )

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  )
}

export function useIntro() {
  const context = useContext(IntroContext)
  if (!context) {
    throw new Error('useIntro requires IntroProvider')
  }
  return context
}
