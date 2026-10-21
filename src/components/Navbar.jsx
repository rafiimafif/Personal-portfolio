import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import SearchDialog from './SearchDialog'
import { useTheme } from '../context/ThemeContext'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <nav
        aria-label="Primary Navigation"
        className={`pointer-events-auto mx-auto max-w-6xl rounded-2xl border backdrop-blur-xl transition-colors ${
          isLight
            ? 'bg-white/85 border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.06)]'
            : 'bg-[#0b101b]/80 border-slate-800/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_36px_-8px_rgba(0,0,0,0.65)]'
        }`}
      >
        <div className="px-3 sm:px-5">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-3">
            <Link
              to="/"
              className="flex items-center gap-3 min-h-[44px] pr-2 group"
            >
              <img
                src={logo}
                alt="Rafii Afif Logo"
                className={`w-9 h-9 object-contain rounded-xl border transition-transform duration-200 group-hover:scale-105 ${
                  isLight ? 'border-slate-300 bg-slate-50' : 'border-slate-700/80 bg-slate-900'
                }`}
              />
              <div className="flex flex-col">
                <span
                  className={`text-sm font-bold tracking-tight leading-none ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Rafii Afif
                </span>
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase mt-1 ${
                    isLight ? 'text-emerald-700' : 'text-emerald-400'
                  }`}
                >
                  DevSecOps &middot; Full-Stack
                </span>
              </div>
            </Link>

            <div
              className={`hidden md:flex items-center gap-1 p-1 rounded-xl border ${
                isLight
                  ? 'bg-slate-100/80 border-slate-200/80'
                  : 'bg-slate-900/70 border-slate-800/80'
              }`}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-1.5 min-h-[38px] inline-flex items-center text-xs lg:text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? isLight
                          ? 'text-slate-900 font-semibold'
                          : 'text-white font-semibold'
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className={`absolute inset-0 rounded-lg -z-10 border ${
                          isLight
                            ? 'bg-white border-slate-200/90 shadow-sm'
                            : 'bg-slate-800/90 border-slate-700/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <SearchDialog />
              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border transition-colors ${
                  isLight
                    ? 'border-slate-200 bg-slate-100/80 hover:bg-slate-200/80 text-slate-700'
                    : 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
                )}
              </motion.button>
            </div>

            <div className="flex md:hidden items-center gap-1.5">
              <SearchDialog />

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border transition-colors ${
                  isLight
                    ? 'border-slate-200 bg-slate-100 text-slate-700'
                    : 'border-slate-800 bg-slate-900/80 text-slate-300'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
                )}
              </motion.button>

              <button
                type="button"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border transition-colors ${
                  isLight
                    ? 'border-slate-200 text-slate-700 hover:bg-slate-100'
                    : 'border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className={`md:hidden border-t px-3 pt-2 pb-3 space-y-1 rounded-b-2xl ${
              isLight
                ? 'bg-white/95 border-slate-200'
                : 'bg-[#0b101b]/95 border-slate-800'
            }`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center min-h-[44px] px-3.5 py-2 rounded-xl text-sm transition-colors ${
                  location.pathname === link.path
                    ? isLight
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'bg-slate-800/90 text-white font-semibold'
                    : isLight
                    ? 'text-slate-700 hover:bg-slate-50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Navbar
