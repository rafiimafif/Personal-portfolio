import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Code2, Eye, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const COUNTER_NAMESPACE = 'rafii-afif.web.id'
const COUNTER_KEY = 'visits'
const VISITED_STORAGE_KEY = 'rafii_portfolio_visit_counted'
const OWNER_STORAGE_KEY = 'rafii_portfolio_owner'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const [visitorCount, setVisitorCount] = useState(null)
  const [counterStatus, setCounterStatus] = useState('loading')

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchVisitorCount = async () => {
      try {
        const params = new URLSearchParams(window.location.search)
        const ownerParam = params.get('owner')
        if (ownerParam === 'true') {
          localStorage.setItem(OWNER_STORAGE_KEY, 'true')
          params.delete('owner')
          const cleanSearch = params.toString()
          const cleanUrl = `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ''}${window.location.hash}`
          window.history.replaceState({}, '', cleanUrl)
        } else if (ownerParam === 'false') {
          localStorage.removeItem(OWNER_STORAGE_KEY)
        }

        const hostname = window.location.hostname
        const isLocalDev =
          hostname === 'localhost' ||
          hostname === '127.0.0.1' ||
          hostname === '::1' ||
          hostname.endsWith('.local')
        const isOwner = localStorage.getItem(OWNER_STORAGE_KEY) === 'true'
        const alreadyCounted = localStorage.getItem(VISITED_STORAGE_KEY) === 'true'

        const shouldSkipIncrement = isLocalDev || isOwner || alreadyCounted
        const action = shouldSkipIncrement ? 'get' : 'hit'

        let response = await fetch(
          `https://abacus.jasoncameron.dev/${action}/${COUNTER_NAMESPACE}/${COUNTER_KEY}`,
          { signal: controller.signal }
        )

        if (response.status === 404) {
          if (isLocalDev || isOwner) {
            if (isMounted) {
              setCounterStatus('empty')
            }
            return
          }
          response = await fetch(
            `https://abacus.jasoncameron.dev/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`,
            { signal: controller.signal }
          )
        }

        if (!response.ok) {
          throw new Error(`Counter request failed with status ${response.status}`)
        }

        const data = await response.json()
        if (isMounted) {
          if (typeof data?.value === 'number' && data.value >= 0) {
            if (!isLocalDev && !isOwner) {
              localStorage.setItem(VISITED_STORAGE_KEY, 'true')
            }
            setVisitorCount(data.value)
            setCounterStatus('ready')
          } else {
            setCounterStatus('empty')
          }
        }
      } catch (err) {
        if (err.name !== 'AbortError' && isMounted) {
          setCounterStatus('error')
        }
      }
    }

    fetchVisitorCount()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  const focusRingClass = isLight
    ? 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-md'
    : 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f17] rounded-md'

  return (
    <footer
      className={`relative mt-24 border-t ${
        isLight
          ? 'border-slate-200 bg-[#f8fafc]'
          : 'border-slate-800 bg-[#0b0f17]'
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-12">
          <div className="space-y-4">
            <Link
              to="/"
              className={`inline-flex items-center space-x-3 min-h-[44px] ${focusRingClass}`}
            >
              <Code2 className={`w-8 h-8 ${isLight ? 'text-slate-900' : 'text-white'}`} aria-hidden="true" />
              <span className={`text-xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Rafii Afif</span>
            </Link>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              DevSecOps Engineer based in Jakarta, Indonesia.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Contact</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="mailto:rafii.afif@gmail.com"
                  className={`text-sm transition-colors inline-flex items-center gap-2 min-h-[44px] ${focusRingClass} ${
                    isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                  aria-label="Email Rafii Afif"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>rafii.afif@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+6285155103214"
                  className={`text-sm transition-colors inline-flex items-center gap-2 min-h-[44px] ${focusRingClass} ${
                    isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                  aria-label="Call Rafii Afif"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>+6285155103214</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Quick Links</h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-1">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center min-h-[44px] text-sm transition-colors ${focusRingClass} ${
                    isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>Social</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/rafiimafif"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${focusRingClass} ${
                  isLight
                    ? 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/rafii-muhammad-afif"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${focusRingClass} ${
                  isLight
                    ? 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:rafii.afif@gmail.com"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors ${focusRingClass} ${
                  isLight
                    ? 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t py-6 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm text-center md:text-left ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              &copy; {currentYear} Rafii Muhammad Afif. DevSecOps &amp; Platform Engineering.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div
                className={`text-xs font-mono flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${
                  isLight
                    ? 'border-slate-300 bg-white text-slate-700'
                    : 'border-slate-800 bg-slate-900 text-slate-300'
                }`}
                aria-live="polite"
                title="Unique visitors to rafii-afif.web.id"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                {counterStatus === 'loading' && (
                  <span>Syncing telemetry...</span>
                )}
                {counterStatus === 'ready' && visitorCount !== null && (
                  <span>
                    <strong className="font-semibold">{visitorCount.toLocaleString()}</strong>{' '}
                    {visitorCount === 1 ? 'visitor' : 'visitors'}
                  </span>
                )}
                {counterStatus === 'empty' && (
                  <span>No visits recorded yet</span>
                )}
                {counterStatus === 'error' && (
                  <span>Telemetry offline</span>
                )}
              </div>
              <span className={`text-xs font-mono flex items-center gap-1.5 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" aria-hidden="true" />
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
