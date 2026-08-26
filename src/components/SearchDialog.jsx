import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Command, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const searchData = [
  {
    title: 'Home',
    description: 'Go to the welcome page',
    path: '/',
    keywords: ['home', 'cv', 'resume', 'start', 'welcome', 'portfolio',  'Rafii Afif', 'rafiimafif', 'DevSecOps Engineer', 'DevOps Engineer', 'Cloud Infrastructure', 'AXA'],
  },
  {
    title: 'About',
    description: 'Learn more about me and my background',
    path: '/about',
    keywords: ['about', 'background', 'education', 'bio', 'profile', 'cv', 'resume', 'rafii', 'afif', 'DevSecOps Engineer', 'DevOps Engineer', 'AXA Insurance Indonesia'],
  },
  {
    title: 'Education',
    description: 'View my educational background',
    path: '/about',
    keywords: ['education', 'university', 'college', 'degree', 'school', 'computer science', 'informatics engineering', 'universitas jenderal achmad yani', 'gpa'],
  },
  {
    title: 'Experience',
    description: 'Check out my professional experience',
    path: '/about',
    keywords: ['experience', 'work', 'career', 'jobs', 'professional', 'AXA', 'Great Eastern', 'Accelbyte', 'Hubster', 'Cemara Agung', 'DevSecOps', 'DevOps'],
  },
  {
    title: 'Skills',
    description: 'Explore my technical skills and expertise',
    path: '/about',
    keywords: ['skills', 'technologies', 'DevSecOps', 'Snyk', 'Trivy', 'SonarQube', 'Gitleaks', 'CycloneDX', 'Checkmarx', 'OWASP ZAP', 'Jenkins', 'Docker', 'OpenShift', 'Kubernetes', 'AWS', 'Grafana', 'Artifactory', 'Bash'],
  },
  {
    title: 'Projects',
    description: 'View my portfolio of projects',
    path: '/projects',
    keywords: ['projects', 'portfolio', 'work', 'examples', 'github', 'code', 'AXA highlights', 'DevSecOps', 'Jenkins Shared Library', 'OpenShift'],
  },
  {
    title: 'Certificates',
    description: 'View my certifications and achievements',
    path: '/certificates',
    keywords: ['certificates', 'certifications', 'achievements', 'courses', 'learning', 'skills', 'professional', 'development', 'awards', 'badges'],
  },
  {
    title: 'Contact',
    description: 'Get in touch with me',
    path: '/contact',
    keywords: ['contact', 'email', 'message', 'connect', 'hire', 'freelance', 'work', 'collaboration', 'job', 'opportunity'],
  },
]

const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState(searchData)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (!isOpen) return

      if (e.key === 'Escape') setIsOpen(false)

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % results.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
      }

      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault()
        navigate(results[selectedIndex].path)
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, navigate])

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchData.filter((item) => {
        const searchLower = searchQuery.toLowerCase()
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower))
        )
      })
      setResults(filtered)
      setSelectedIndex(0)
    } else {
      setResults(searchData)
    }
  }, [searchQuery])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center space-x-2 px-3 py-1.5 transition-colors rounded-lg border ${
          isLight
            ? "bg-slate-200/80 text-slate-700 hover:bg-slate-300 hover:text-slate-900 border-slate-300"
            : "bg-white/15 text-gray-400 hover:bg-white/10 hover:text-white border-white/10"
        }`}
      >
        <Search className="w-4 h-4" />
        <span className="text-sm hidden sm:block">Search ...</span>
        <span className={`hidden md:flex items-center space-x-1 px-1.5 py-0.5 text-xs rounded ${
          isLight ? "bg-slate-300 text-slate-700" : "bg-white/10 text-gray-400"
        }`}>
          <Command className="w-3 h-3" />
          <span>K</span>
        </span>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
        <div className="inline-block w-full max-w-2xl mt-24 text-left align-middle transition-all transform">
          <div className={`relative rounded-xl shadow-2xl border ${
            isLight
              ? "bg-white text-slate-900 border-slate-200"
              : "bg-gray-900 text-white border-white/10"
          }`}>
            <div className={`flex items-center px-4 border-b ${
              isLight ? "border-slate-200" : "border-white/10"
            }`}>
              <Search className={`w-5 h-5 ${isLight ? "text-slate-400" : "text-gray-400"}`} />
              <input
                type="text"
                placeholder="Search pages..."
                className={`w-full px-4 py-4 bg-transparent border-0 focus:outline-none focus:ring-0 ${
                  isLight ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-gray-400"
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <div className={`flex items-center space-x-1 px-1.5 py-0.5 text-xs rounded ${
                isLight ? "bg-slate-100 text-slate-500 border border-slate-200" : "bg-white/10 text-gray-400"
              }`}>
                <span>Esc</span>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className={`p-4 text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>No results found.</div>
              ) : (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={result.path}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                        index === selectedIndex
                          ? isLight
                            ? 'bg-slate-100'
                            : 'bg-white/10'
                          : isLight
                          ? 'hover:bg-slate-50'
                          : 'hover:bg-white/5'
                      }`}
                      onClick={() => {
                        navigate(result.path)
                        setIsOpen(false)
                      }}
                    >
                      <div>
                        <div className={`font-medium ${isLight ? "text-slate-900" : "text-white"}`}>{result.title}</div>
                        <div className={`text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>{result.description}</div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 ${isLight ? "text-slate-500" : "text-gray-400"} ${
                          index === selectedIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDialog
