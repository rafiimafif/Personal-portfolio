import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  const column1 = pageLinks.slice(0, 2)
  const column2 = pageLinks.slice(2, 4)
  const column3 = pageLinks.slice(4, 5)

  return (
    <footer className="relative mt-24">
      <div className={`absolute inset-0 backdrop-blur-xl ${isLight ? 'bg-white/80' : 'bg-black/50'}`} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          {/* Branding */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Code2 className={`w-8 h-8 ${isLight ? 'text-slate-900' : 'text-white'}`} aria-hidden="true" />
              <span className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Rafii Afif</span>
            </Link>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-gray-400'}`}>
              DevSecOps Engineer based in Jakarta, Indonesia.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:rafii.afif@gmail.com"
                  className={`text-sm transition-colors flex items-center gap-2 ${
                    isLight ? 'text-slate-600 hover:text-slate-900' : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label="Email Rafii Afif"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  rafii.afif@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6285155103214"
                  className={`text-sm transition-colors flex items-center gap-2 ${
                    isLight ? 'text-slate-600 hover:text-slate-900' : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label="Call Rafii Afif"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +6285155103214
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Quick Links</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              <div>
                {column1.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-sm transition-colors mb-2 ${
                      isLight ? 'text-slate-600 hover:text-slate-900' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column2.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-sm transition-colors mb-2 ${
                      isLight ? 'text-slate-600 hover:text-slate-900' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column3.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-sm transition-colors mb-2 ${
                      isLight ? 'text-slate-600 hover:text-slate-900' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Social</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/rafiimafif"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/rafii-muhammad-afif"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:rafii.afif@gmail.com"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t py-6 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              &copy; {currentYear} Rafii Muhammad Afif. DevSecOps &amp; Platform Engineering.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className={`text-xs font-mono flex items-center gap-1.5 ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                Enterprise SSDLC Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
