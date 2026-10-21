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
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div
          className={`absolute inset-0 backdrop-blur-md border-b ${
            isLight
              ? 'bg-white/90 border-slate-200'
              : 'bg-[#0b0f17]/90 border-slate-800'
          }`}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center min-h-[44px] min-w-[44px]">
              <img
                src={logo}
                alt="RMA Logo"
                className={`w-10 h-10 object-contain rounded-full border ${
                  isLight ? 'border-slate-300' : 'border-slate-700'
                }`}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
              <SearchDialog />
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link inline-flex items-center min-h-[44px] ${
                    location.pathname === link.path
                      ? isLight
                        ? 'bg-slate-200/80 text-slate-900 font-semibold'
                        : 'bg-slate-800 text-white font-semibold'
                      : ''
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" aria-hidden="true" />
                )}
              </motion.button>
            </div>

            <div className="flex md:hidden items-center space-x-2">
              <SearchDialog />

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-300 bg-slate-100 text-slate-700'
                    : 'border-slate-700 bg-slate-800/60 text-slate-300'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" aria-hidden="true" />
                )}
              </motion.button>

              <button
                type="button"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors ${
                  isLight ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className={`md:hidden absolute top-full left-0 right-0 border-b ${
              isLight
                ? 'bg-white border-slate-200'
                : 'bg-[#0b0f17] border-slate-800'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center min-h-[44px] px-3 py-2 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? isLight
                        ? 'bg-slate-100 text-slate-900 font-semibold'
                        : 'bg-slate-800 text-white font-semibold'
                      : isLight
                      ? 'text-slate-700 hover:bg-slate-50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
