import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'rafii.afif@gmail.com', link: 'mailto:rafii.afif@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+6285155103214', link: 'tel:+6285155103214' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Bandung, Jawa Barat, Indonesia' },
    { icon: <Clock className="w-5 h-5" />, label: 'Time Zone', value: 'WIB (UTC+7)' },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', link: 'https://github.com/rafiimafif' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', link: 'https://linkedin.com/in/rafii-muhammad-afif' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', link: 'https://wa.me/+6285155103214' },
  ]

  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.div
          className="flex items-center gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageSquare className={`w-7 h-7 sm:w-8 sm:h-8 ${isLight ? "text-slate-900" : "text-white"}`} />
          <h2 className={`text-3xl sm:text-4xl font-bold ${isLight ? "text-slate-900" : "gradient-text"}`}>
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`p-5 sm:p-6 rounded-xl backdrop-blur-sm border ${
                isLight
                  ? "bg-white/90 border-slate-200 shadow-sm"
                  : "bg-gray-800/50 border-white/5"
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${
                isLight ? "text-slate-900" : "text-white"
              }`}>
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`flex items-center space-x-3 p-2 sm:p-3 rounded-lg transition-colors ${
                          isLight
                            ? "hover:bg-slate-100"
                            : "hover:bg-white/5"
                        }`}
                      >
                        <div className={`${isLight ? "text-slate-600 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"} transition-colors`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className={`text-xs sm:text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>{info.label}</p>
                          <p className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 p-2 sm:p-3">
                        <div className={isLight ? "text-slate-600" : "text-gray-400"}>{info.icon}</div>
                        <div>
                          <p className={`text-xs sm:text-sm ${isLight ? "text-slate-500" : "text-gray-400"}`}>{info.label}</p>
                          <p className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`p-5 sm:p-6 rounded-xl backdrop-blur-sm border ${
                isLight
                  ? "bg-white/90 border-slate-200 shadow-sm"
                  : "bg-gray-800/50 border-white/5"
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${
                isLight ? "text-slate-900" : "text-white"
              }`}>
                Connect with Me
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors group flex-1 sm:flex-none justify-center sm:justify-start border ${
                      isLight
                        ? "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                        : "bg-white/5 hover:bg-white/10 border-white/5 text-gray-300"
                    }`}
                  >
                    <span className={`${isLight ? "text-slate-600 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"} transition-colors`}>{social.icon}</span>
                    <span className={`${isLight ? "text-slate-800 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"} transition-colors text-sm font-medium`}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`p-6 sm:p-8 rounded-xl backdrop-blur-sm border ${
              isLight
                ? "bg-white/90 border-slate-200 shadow-sm"
                : "bg-gray-800/50 border-white/5"
            }`}
          >
            <h3 className={`text-lg sm:text-xl font-semibold mb-6 ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isLight ? "text-slate-800" : "text-gray-300"
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors text-sm sm:text-base ${
                      isLight
                        ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                        : "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                    }`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isLight ? "text-slate-800" : "text-gray-300"
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors text-sm sm:text-base ${
                      isLight
                        ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                        : "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                    }`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  isLight ? "text-slate-800" : "text-gray-300"
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors text-sm sm:text-base ${
                    isLight
                      ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                      : "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  }`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isLight ? "text-slate-800" : "text-gray-300"
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors resize-none text-sm sm:text-base ${
                    isLight
                      ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                      : "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  }`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
                  isLight
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {isSubmitting ? 'Sending...' : (<><Send className="w-4 h-4" />Send Message</>)}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-600 dark:text-green-400 text-center text-sm sm:text-base font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 dark:text-red-400 text-center text-sm sm:text-base font-medium"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
