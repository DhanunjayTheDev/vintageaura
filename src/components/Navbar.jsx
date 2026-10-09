import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'
import Button from './Button'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !menuOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        transparent ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(42,36,31,0.08)]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link
          to="/"
          className={`font-display tracking-[0.2em] text-lg ${transparent ? 'text-cream' : 'text-ink'}`}
        >
          VINTAGE AURA
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs tracking-label uppercase transition-colors ${
                  isActive ? 'text-gold' : transparent ? 'text-cream/85 hover:text-cream' : 'text-ink/80 hover:text-gold'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant={transparent ? 'outline-light' : 'outline'} className="px-6 py-2.5">
            Inquire
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden p-2 -mr-2 ${transparent ? 'text-cream' : 'text-ink'}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out grid"
        style={{ gridTemplateRows: menuOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden bg-cream border-t border-ink/10">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm tracking-label uppercase ${isActive ? 'text-gold' : 'text-ink'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="outline" className="w-full mt-2">
              Inquire
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
