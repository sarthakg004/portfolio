import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderKanban } from 'lucide-react'
import AnimatedCard from '../components/AnimatedCard'
import { projects, projectCategories } from '../data/projects'
import placeholderImage from '../assets/projects/placeholder.png'

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Add "All" to categories for filtering
  const allCategories = ['All', ...projectCategories]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="section pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
            <FolderKanban size={16} />
            Complete Portfolio
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-800 dark:text-dark-100 mb-4">
            All Projects
          </h1>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A complete collection of my work across ML, data science, software, and quantitative research.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <AnimatedCard className="h-full">
                  <div className="card h-full overflow-hidden group">
                    {/* Image */}
                    <div className="relative aspect-card overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = placeholderImage
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-accent">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-display font-bold text-dark-800 dark:text-dark-100 mb-2 group-hover:text-accent-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-dark-600 dark:text-dark-300 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
