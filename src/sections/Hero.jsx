import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, ChevronRight, FileText } from 'lucide-react'
import { personal } from '../data/personal'
import profileImage from '../assets/profile.jpg'
import placeholderImage from '../assets/placeholder.png'

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(profileImage)
  const scrollToNext = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 text-balance"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            {/* Animated subtitle */}
            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-dark-500 dark:text-dark-400 font-medium mb-6"
            >
              <span>{personal.title}</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personal.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={18} />
                Get in Touch
              </motion.a>
              <motion.a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                View Resume
              </motion.a>
            </motion.div>

          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-900" />
                </motion.div>

                {/* Profile image */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-dark-200 dark:bg-dark-700">
                  <img
                    src={imageSrc}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setImageSrc(placeholderImage)}
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 p-3 rounded-xl glass shadow-lg"
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 p-3 rounded-xl glass shadow-lg"
                >
                  <span className="text-2xl">🧠</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-1/2 -right-8 p-3 rounded-xl glass shadow-lg"
                >
                  <span className="text-2xl">👁️</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-dark-400 hover:text-accent-500 transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
