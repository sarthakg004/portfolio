import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { education } from '../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-dark-50/50 dark:bg-dark-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4"
          >
            <GraduationCap size={16} />
            Academic Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Building a strong foundation in engineering and computer science
          </motion.p>
        </div>

        {/* Education Card */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="card p-6 md:p-8 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-500/25">
                    <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-dark-600 dark:text-dark-300 mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-accent-500 font-medium mt-2">
                      {edu.graduation}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-dark-600 dark:text-dark-400 mt-3 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
