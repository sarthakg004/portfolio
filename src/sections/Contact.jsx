import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { contact } from '../data/contact'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-10 flex flex-col sm:flex-row items-center justify-center gap-4"
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
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              copied
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
      </div>
    </SectionWrapper>
  )
}
