import { useState, type MouseEvent } from 'react'
import { motion } from 'motion/react'
import { MagneticButton } from '../MagneticButton/MagneticButton'
import { MobileMenu, MenuToggle } from '../MobileMenu/MobileMenu'
import { useLocation } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'
import { expoOut } from '../../config/motionEase'
import { navLinks } from '../../config/navLinks'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { navigate: transitionNavigate } = usePageTransition()

  const closeMenu = () => setMenuOpen(false)

  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    closeMenu()
    if (location.pathname === '/') {
      const home = document.getElementById('home')
      if (home) {
        home.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }
    transitionNavigate('/')
  }
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <>
      <motion.header
        className={`header ${menuOpen ? 'headerOpen' : ''}`.trim()}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: expoOut }}
      >
        <a href="/" className="logo" onClick={goHome}>
          CORTEN
        </a>
        <div className="headerRight">
          <nav className="nav" aria-label="Primary">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="navLink">
                {item.label}
              </a>
            ))}
          </nav>
          <MagneticButton href="#contact" className="btnOutline headerCta">
            Let&apos;s talk
          </MagneticButton>
          <MenuToggle open={menuOpen} onToggle={toggleMenu} />
        </div>
      </motion.header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}
