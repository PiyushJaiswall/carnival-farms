'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isHome = pathname === '/'
  const navBg = isHome && !scrolled
    ? 'bg-transparent py-6'
    : 'bg-white/95 backdrop-blur-md py-4 border-b border-stone-200 shadow-sm'

  const linkColor = isHome && !scrolled ? 'text-white hover:text-amber-300' : 'text-stone-600 hover:text-stone-900'
  const logoColor = isHome && !scrolled ? 'text-white' : 'text-stone-800'
  const activeColor = isHome && !scrolled ? 'text-amber-300' : 'text-stone-900'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className={`text-xl md:text-2xl font-light tracking-[0.25em] uppercase transition-colors duration-300 ${logoColor}`}>
          Carnival Farms
        </Link>

        <ul className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href ? activeColor : linkColor
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`hidden xl:inline-block text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
            isHome && !scrolled
              ? 'border-white text-white hover:bg-white hover:text-stone-900'
              : 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
          }`}
        >
          Book Now
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`xl:hidden p-1 transition-colors ${isHome && !scrolled ? 'text-white' : 'text-stone-800'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-stone-200 px-6 py-8 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === link.href ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-center mt-2">Book Now</Link>
        </div>
      )}
    </nav>
  )
}
