import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code2, Menu, X, Sun, Moon } from 'lucide-react'
import SearchDialog from './SearchDialog'
import { useTheme } from '../context/ThemeContext'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="RMA Logo" className="w-10 h-10 object-contain rounded-full border border-white/20" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <SearchDialog />
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'bg-white/15 backdrop-blur-sm' : ''}`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Desktop Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-400" />
                )}
              </motion.button>
            </div>

            {/* Mobile header right section */}
            <div className="flex md:hidden items-center space-x-2">
              <SearchDialog />

              {/* Mobile Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/40 text-slate-300 transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-400" />
                )}
              </motion.button>

              <button
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-400 hover:text-white transition-colors"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 dark:bg-black/95 backdrop-blur-xl border-b border-slate-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center min-h-[44px] px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors ${
                    location.pathname === link.path
                      ? 'bg-slate-800 text-white font-medium'
                      : ''
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
