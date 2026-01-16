import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Github, Linkedin, Mail as MailIcon } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { contact } from '../data/contact'
import { personal } from '../data/personal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

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

  return (
    <SectionWrapper id="contact" className="bg-dark-50/50 dark:bg-dark-950/50">
      <div className="max-w-3xl mx-auto">
        {/* Header with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
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

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href={getMailtoLink()}
            className="text-lg md:text-xl font-display font-semibold text-dark-800 dark:text-dark-100 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            <span className="mr-2">📧</span>
            {contact.email}
          </a>
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${copied
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
                Copy
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex items-center gap-3 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
              <Github className="text-accent-600 dark:text-accent-400" size={18} />
            </div>
            <div>
              <p className="text-xs text-dark-500 dark:text-dark-400">GitHub</p>
              <p className="text-sm text-dark-700 dark:text-dark-200 font-medium group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                Profile
              </p>
            </div>
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex items-center gap-3 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
              <Linkedin className="text-accent-600 dark:text-accent-400" size={18} />
            </div>
            <div>
              <p className="text-xs text-dark-500 dark:text-dark-400">LinkedIn</p>
              <p className="text-sm text-dark-700 dark:text-dark-200 font-medium group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                Connect
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
