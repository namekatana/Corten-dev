import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import { navLinks } from '../../config/navLinks'
import './MobileMenu.css'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useTranslation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menuOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.menuDialog')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="menuOverlayNoise" aria-hidden="true" />
          <motion.nav
            className="menuNav"
            aria-label={t('nav.mobile')}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="menuNavLink"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.08 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <AnimatedText text={t(`nav.${item.key}`)} />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

type MenuToggleProps = {
  open: boolean
  onToggle: () => void
}

export function MenuToggle({ open, onToggle }: MenuToggleProps) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      className="menuToggle"
      aria-expanded={open}
      aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
      onClick={onToggle}
    >
      <motion.span
        className="menuToggleBar"
        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="menuToggleBar"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="menuToggleBar"
        animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </button>
  )
}
