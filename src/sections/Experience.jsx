import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, MapPin, Calendar, Code, Building, GraduationCap, X } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import Timeline from '../components/Timeline'
import { experience } from '../data/experience'

const iconMap = {
  GraduationCap: GraduationCap,
  Code: Code,
  Building: Building,
}

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null)

  const handleNodeClick = (exp) => {
    setSelectedExp(selectedExp?.id === exp.id ? null : exp)
  }

  return (
    <SectionWrapper id="experience" className="overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4"
          >
            <Briefcase size={16} />
            Professional Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Building impactful solutions at leading organizations
          </motion.p>
        </div>

        {/* Tree Timeline */}
        <Timeline
          experiences={experience}
          onNodeClick={handleNodeClick}
          selectedExperience={selectedExp}
        />

        {/* Expanded Detail Card - Below Timeline */}
        <AnimatePresence mode="wait">
          {selectedExp && (
            <motion.div
              key={selectedExp.id}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="card p-6 md:p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
                  aria-label="Close details"
                >
                  <X size={20} className="text-dark-500 dark:text-dark-400" />
                </button>

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pr-8">
                  <div className="flex items-start gap-4">
                    {(() => {
                      const IconComponent = iconMap[selectedExp.icon] || Briefcase
                      return (
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedExp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      )
                    })()}

                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                        {selectedExp.title}
                      </h3>
                      <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold">
                        {selectedExp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-dark-500 dark:text-dark-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {selectedExp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {selectedExp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 self-start">
                    {selectedExp.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {selectedExp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-200 mb-3">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedExp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-sm text-dark-600 dark:text-dark-300"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedExp.color} flex-shrink-0`} />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-200 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
