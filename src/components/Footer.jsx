import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, BookOpen, FileText, ArrowUp } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sarthakgupta14/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sarthakg004' },
    { name: 'Medium', icon: BookOpen, href: 'https://medium.com/@_Sarthak004_' },
    { name: 'Resume', icon: FileText, href: 'https://drive.google.com/file/d/14EhntRMPeou_tTRWHvknH7EB2Pj4DJ_t/view' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(href), 0)
    } else {
      scrollToSection(href)
    }
  }

  return (
    <footer className="relative bg-dark-50 dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center space-x-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-accent-500/25">
                SG
              </div>
              <span className="font-display font-semibold text-xl group-hover:text-accent-500 transition-colors">
                Saarthak Gupta
              </span>
            </motion.a>
            <p className="text-dark-500 dark:text-dark-400 text-sm max-w-xs">
              ML Engineer · AI Researcher · OCR & Generative Models
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-dark-800 dark:text-dark-200 mb-4">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-dark-500 dark:text-dark-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-dark-800 dark:text-dark-200 mb-4">
              Connect
            </h3>
            <div className="flex items-center space-x-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 
                           hover:bg-accent-500 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center gap-1">
            © {currentYear} Saarthak Gupta. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
            and lots of ☕
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 text-sm text-dark-500 dark:text-dark-400 
                     hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
