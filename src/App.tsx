import { AnimatePresence, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CursorTrail } from './components/CursorTrail/CursorTrail'
import { CustomCursor } from './components/CustomCursor/CustomCursor'
import { CustomScrollbar } from './components/CustomScrollbar/CustomScrollbar'
import { GlobalNoise } from './components/GlobalNoise/GlobalNoise'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Preloader } from './components/Preloader/Preloader'
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress'
import { expoOut } from './config/motionEase'
import { IntroProvider, useIntro } from './context/IntroContext'
import { PageTransitionProvider } from './context/TransitionContext'
import { PageMeta } from './components/PageMeta/PageMeta'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function AppShell() {
  const { heroReady } = useIntro()

  return (
    <motion.div
      className="appShell"
      initial={{ opacity: 0 }}
      animate={{ opacity: heroReady ? 1 : 0 }}
      transition={{ duration: 0.45, ease: expoOut }}
    >
      <PageMeta />
      <GlobalNoise />
      <ScrollProgress />
      <CursorTrail />
      <CustomCursor />
      <CustomScrollbar />
      <Header />
      <AppRoutes />
      <Footer />
    </motion.div>
  )
}

function App() {
  return (
    <IntroProvider>
      <PageTransitionProvider>
        <Preloader />
        <AppShell />
      </PageTransitionProvider>
    </IntroProvider>
  )
}

export default App
