import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      window.location.href = '/' + href
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(2,4,8,0.9)] backdrop-blur-2xl border-b border-[rgba(0,102,255,0.15)] shadow-[0_4px_30px_rgba(0,102,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-blue to-neon-cyan opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <div className="relative w-9 h-9 rounded-full border border-[rgba(0,255,255,0.4)] flex items-center justify-center bg-[rgba(0,102,255,0.1)]">
              <span className="text-neon-cyan font-mono font-bold text-sm">AK</span>
            </div>
          </div>
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-neon-cyan transition-colors">
            Abdul Kaif J
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-[rgba(0,102,255,0.1)] transition-all duration-200 font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-4 px-5 py-2 rounded-full text-sm font-semibold bg-[rgba(0,102,255,0.15)] border border-[rgba(0,102,255,0.4)] text-blue-400 hover:text-white hover:bg-[rgba(0,102,255,0.3)] hover:border-neon-cyan transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-blue-400 transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-blue-400 transition-all duration-300 ${mobileOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`block h-0.5 bg-blue-400 transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[rgba(2,4,8,0.97)] border-t border-[rgba(0,102,255,0.15)]"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-[rgba(0,102,255,0.1)] rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 px-4 py-3 text-center rounded-full font-semibold bg-gradient-to-r from-electric-blue to-blue-700 text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
