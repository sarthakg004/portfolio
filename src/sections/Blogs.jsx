import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedCard from '../components/AnimatedCard'
import { blogs, mediumProfile } from '../data/blogs'
import blogPlaceholder from '../assets/blogs/placeholder.png'

export default function Blogs() {
  return (
    <SectionWrapper id="blogs">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4"
          >
            <BookOpen size={16} />
            Technical Writing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Blog Posts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Sharing insights on AI, ML, and software engineering
          </motion.p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedCard className="h-full">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-full overflow-hidden group block"
                >
                  {/* Image */}
                  <div className="relative aspect-blog overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20" />
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = blogPlaceholder
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

                    {/* External link icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-dark-800 dark:text-dark-100 mb-2 group-hover:text-accent-500 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 dark:text-accent-400">
                      {blog.cta}
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* CTA to Medium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={mediumProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-dark-500 dark:text-dark-400">Open Medium Profile</p>
              <p className="font-semibold text-dark-800 dark:text-dark-100 group-hover:text-accent-500 transition-colors">
                @_Sarthak004_
              </p>
            </div>
            <ArrowRight size={20} className="text-dark-400 group-hover:text-accent-500 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
