import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Github, Linkedin, Mail as MailIcon, Send, User, MessageSquare } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { contact } from '../data/contact'
import { personal } from '../data/personal'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const getMailtoLink = () => `mailto:${contact.email}`

  const validateForm = () => {
    const errors = {}

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
      return
    }

    // Construct mailto link with form data
    const subject = formData.name
      ? `Message from ${formData.name}`
      : 'Message from Portfolio Contact Form'
    const body = `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open mailto link
    window.location.href = mailtoUrl

    // Show success message and reset form
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setFormErrors({})

    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-dark-50/50 dark:bg-dark-950/50">
      <div className="max-w-4xl mx-auto">
        {/* Header with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-800 dark:text-dark-100 mb-3">
            Let's Connect
          </h2>
          <p className="text-dark-600 dark:text-dark-300 mb-2">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <p className="text-accent-600 dark:text-accent-400 text-sm font-medium">
            Open to research collaborations, internships, and full-time roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                  <MailIcon className="text-accent-600 dark:text-accent-400" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">Email</h3>
              </div>
              <a
                href={getMailtoLink()}
                className="text-sm md:text-base font-medium text-dark-700 dark:text-dark-200 hover:text-accent-500 dark:hover:text-accent-400 transition-colors block mb-3"
              >
                {contact.email}
              </a>
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 w-full justify-center ${copied
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                    : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400'
                  }`}
                aria-label="Copy email"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Email
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-center gap-3 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors group block"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <Github className="text-accent-600 dark:text-accent-400" size={18} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-dark-500 dark:text-dark-400">GitHub</p>
                  <p className="text-sm text-dark-700 dark:text-dark-200 font-medium group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    View Profile
                  </p>
                </div>
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-center gap-3 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors group block"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <Linkedin className="text-accent-600 dark:text-accent-400" size={18} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-dark-500 dark:text-dark-400">LinkedIn</p>
                  <p className="text-sm text-dark-700 dark:text-dark-200 font-medium group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    Connect
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                  <MessageSquare className="text-accent-600 dark:text-accent-400" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">Send a Message</h3>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Name <span className="text-dark-400 dark:text-dark-500 text-xs">(optional)</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 dark:text-dark-500" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-50 dark:bg-dark-700 border border-dark-200 dark:border-dark-600 text-dark-800 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 dark:text-dark-500" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-50 dark:bg-dark-700 border text-dark-800 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all ${formErrors.email
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-dark-200 dark:border-dark-600'
                      }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {formErrors.email && (
                  <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2.5 rounded-xl bg-dark-50 dark:bg-dark-700 border text-dark-800 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none ${formErrors.message
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-dark-200 dark:border-dark-600'
                    }`}
                  placeholder="Tell me about your project or just say hi..."
                />
                {formErrors.message && (
                  <p className="mt-1 text-xs text-red-500">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
              >
                <Send size={18} />
                Send Message
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm text-center"
                >
                  <Check size={16} className="inline mr-2" />
                  Opening your email client...
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm text-center"
                >
                  Please fill in all required fields correctly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
