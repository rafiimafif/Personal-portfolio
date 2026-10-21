import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Loading = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 transition-colors ${
        isLight ? 'bg-[#f8fafc] text-slate-900' : 'bg-[#0b0f17] text-white'
      }`}
    >
      <motion.div
        className="relative w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      <div className="space-y-1 text-center font-mono">
        <div
          className={`text-sm font-semibold ${
            isLight ? 'text-slate-900' : 'text-slate-100'
          }`}
        >
          Loading view...
        </div>
      </div>
    </div>
  )
}

export default Loading
