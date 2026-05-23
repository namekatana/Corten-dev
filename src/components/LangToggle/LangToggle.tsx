import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import './LangToggle.css'

export function LangToggle() {
  const { i18n } = useTranslation()
  const isUk = i18n.language === 'uk'

  const toggle = () => {
    const next = isUk ? 'en' : 'uk'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <button
      type="button"
      className="langToggle"
      onClick={toggle}
      aria-label={isUk ? 'Switch to English' : 'Перемкнути на українську'}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={i18n.language}
          className="langToggleLabel"
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isUk ? 'EN' : 'UK'}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
