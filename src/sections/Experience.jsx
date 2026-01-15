import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, Code, Building, GraduationCap } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { experience } from '../data/experience'

const iconMap = {
  GraduationCap: GraduationCap,
  Code: Code,
  Building: Building,
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-purple-500 to-pink-500" />

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => {
              const IconComponent = iconMap[exp.icon] || Briefcase
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-8 w-16 h-16 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="card p-6 md:p-8 hover:shadow-2xl transition-all duration-500 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        {/* Mobile icon */}
                        <div className={`md:hidden w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-dark-500 dark:text-dark-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 self-start">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-200 mb-3">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 text-sm text-dark-600 dark:text-dark-300"
                          >
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
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
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
