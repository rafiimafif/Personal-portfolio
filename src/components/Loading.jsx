import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Loading = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 transition-colors duration-300 ${
        isLight ? 'bg-slate-50 text-slate-900' : 'bg-black text-white'
      }`}
    >
      <motion.div
        className="relative w-24 h-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full border-4 ${
            isLight ? 'border-slate-300' : 'border-white/20'
          }`}
        />
        <motion.div
          className={`absolute inset-0 rounded-full border-4 border-transparent ${
            isLight ? 'border-t-slate-900' : 'border-t-white'
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className={`absolute inset-2 rounded-full border-4 border-transparent ${
            isLight ? 'border-t-slate-500' : 'border-t-white/50'
          }`}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      <motion.div
        className="space-y-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`text-2xl font-bold ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Loading...
        </motion.div>
        <motion.div
          className={`text-sm ${
            isLight ? 'text-slate-500' : 'text-white/50'
          }`}
        >
          Please wait while we set things up
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loading
