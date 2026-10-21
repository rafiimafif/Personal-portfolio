import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { CONTACT_INFO } from '../config/contact'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const handleSubmit = async (e) => {
    e.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    if (!FORMSPREE_ID) {
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${trimmedSubject}`)
      const mailtoBody = encodeURIComponent(
        `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`
      )
      window.location.href = `mailto:${CONTACT_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`
      setIsSubmitting(false)
      setSubmitStatus('mailto')
      setFormData({ name: '', email: '', subject: '', message: '' })
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/${encodeURIComponent(FORMSPREE_ID)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
        }),
        signal: AbortSignal.timeout(10000),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" aria-hidden="true" />, label: 'Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
    { icon: <Phone className="w-5 h-5" aria-hidden="true" />, label: 'Phone', value: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}` },
    { icon: <MapPin className="w-5 h-5" aria-hidden="true" />, label: 'Location', value: CONTACT_INFO.location },
    { icon: <Clock className="w-5 h-5" aria-hidden="true" />, label: 'Time Zone', value: CONTACT_INFO.timezone },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" aria-hidden="true" />, label: 'GitHub', link: CONTACT_INFO.github },
    { icon: <Linkedin className="w-5 h-5" aria-hidden="true" />, label: 'LinkedIn', link: CONTACT_INFO.linkedin },
    { icon: <MessageCircle className="w-5 h-5" aria-hidden="true" />, label: 'WhatsApp', link: CONTACT_INFO.whatsappUrl },
  ]

  const inputClass = isLight
    ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
    : 'bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'

  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <MessageSquare className={`w-7 h-7 sm:w-8 sm:h-8 ${isLight ? 'text-slate-900' : 'text-white'}`} aria-hidden="true" />
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div
              className={`p-5 sm:p-6 rounded-xl border ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group">
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`flex items-center space-x-3 p-2.5 sm:p-3 min-h-[44px] rounded-lg transition-colors ${
                          isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-800/60'
                        }`}
                      >
                        <div className={`${isLight ? 'text-slate-600 group-hover:text-slate-900' : 'text-slate-400 group-hover:text-white'} transition-colors`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{info.label}</p>
                          <p className={`text-sm sm:text-base font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 p-2.5 sm:p-3 min-h-[44px]">
                        <div className={isLight ? 'text-slate-600' : 'text-slate-400'}>{info.icon}</div>
                        <div>
                          <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{info.label}</p>
                          <p className={`text-sm sm:text-base font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`p-5 sm:p-6 rounded-xl border ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Direct Channels
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg transition-colors group flex-1 sm:flex-none justify-center sm:justify-start border ${
                      isLight
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-800'
                        : 'bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-300'
                    }`}
                  >
                    <span className={`${isLight ? 'text-slate-600 group-hover:text-slate-900' : 'text-slate-400 group-hover:text-white'} transition-colors`}>
                      {social.icon}
                    </span>
                    <span className={`${isLight ? 'text-slate-800 group-hover:text-slate-900' : 'text-slate-300 group-hover:text-white'} transition-colors text-sm font-medium`}>
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`p-6 sm:p-8 rounded-xl border ${
              isLight
                ? 'bg-white border-slate-200 shadow-sm'
                : 'bg-slate-900/80 border-slate-800'
            }`}
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border outline-none transition-colors text-sm sm:text-base ${inputClass}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={150}
                    autoComplete="email"
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border outline-none transition-colors text-sm sm:text-base ${inputClass}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  maxLength={200}
                  className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border outline-none transition-colors text-sm sm:text-base ${inputClass}`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  maxLength={4000}
                  className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-colors resize-none text-sm sm:text-base ${inputClass}`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 min-h-[44px] rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base border ${
                  isLight
                    ? 'bg-slate-900 border-slate-900 text-white hover:bg-slate-800'
                    : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-500'
                }`}
              >
                {isSubmitting ? 'Sending...' : (<><Send className="w-4 h-4" aria-hidden="true" />Send Message</>)}
              </button>

              {submitStatus === 'success' && (
                <p className="text-emerald-600 dark:text-emerald-400 text-center text-sm sm:text-base font-medium" role="status">
                  Message sent. I will get back to you shortly.
                </p>
              )}

              {submitStatus === 'mailto' && (
                <p className="text-emerald-600 dark:text-emerald-400 text-center text-sm sm:text-base font-medium" role="status">
                  Opened your email client with the message pre-filled to {CONTACT_INFO.email}.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center text-sm sm:text-base font-medium" role="alert">
                  Delivery failed. Please email {CONTACT_INFO.email} directly or connect via WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
