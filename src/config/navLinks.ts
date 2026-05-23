export type NavLinkKey = 'work' | 'services' | 'about' | 'contact'

export type NavLink = {
  key: NavLinkKey
  href: string
}

export const navLinks: NavLink[] = [
  { key: 'work', href: '#work' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
]
