import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import placeholderImage from '../assets/projects/placeholder.png'

export default function AllProjects() {
  return (
    <section className="section pt-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            All Projects
          </h1>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A focused collection of research-driven and engineering projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="card overflow-hidden"
            >
              <div className="relative aspect-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = placeholderImage
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-accent">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-dark-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-dark-300">
                  {project.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
