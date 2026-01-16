import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react'
import { resumeData } from '../data/resume'
import { education } from '../data/education'
import { experience } from '../data/experience'

export default function Resume() {
    const handleDownload = () => {
        // TODO: Add actual resume PDF download link
        console.log('Download resume PDF')
    }

    return (
        <section className="section pt-28 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-800 dark:text-dark-100 mb-4">
                        Resume
                    </h1>
                    <p className="text-dark-600 dark:text-dark-400 mb-6">
                        ML Engineer · AI Researcher · OCR & Generative Models
                    </p>

                    {/* Download Button */}
                    <motion.button
                        onClick={handleDownload}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-xl font-medium shadow-lg shadow-accent-500/25 hover:bg-accent-600 transition-colors"
                    >
                        <Download size={18} />
                        Download PDF
                    </motion.button>
                </motion.div>

                {/* Professional Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="card p-6 md:p-8 mb-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                            <Briefcase className="text-accent-600 dark:text-accent-400" size={20} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                            Professional Summary
                        </h2>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                        {resumeData.summary}
                    </p>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card p-6 md:p-8 mb-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                            <GraduationCap className="text-accent-600 dark:text-accent-400" size={20} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                            Education
                        </h2>
                    </div>

                    {education.map((edu) => (
                        <div key={edu.id} className="mb-4 last:mb-0">
                            <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                                {edu.institution}
                            </h3>
                            <p className="text-dark-600 dark:text-dark-300 mt-1">
                                {edu.degree}
                            </p>
                            <p className="text-sm text-accent-600 dark:text-accent-400 mt-1">
                                {edu.graduation}
                            </p>
                            {edu.description && (
                                <p className="text-sm text-dark-600 dark:text-dark-400 mt-2 leading-relaxed">
                                    {edu.description}
                                </p>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="card p-6 md:p-8 mb-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                            <Briefcase className="text-accent-600 dark:text-accent-400" size={20} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                            Experience
                        </h2>
                    </div>

                    {experience.map((exp) => (
                        <div key={exp.id} className="mb-6 last:mb-0">
                            <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                                {exp.role}
                            </h3>
                            <p className="text-dark-600 dark:text-dark-300 mt-1">
                                {exp.company}
                            </p>
                            <p className="text-sm text-accent-600 dark:text-accent-400 mt-1">
                                {exp.duration}
                            </p>
                            {exp.description && (
                                <p className="text-sm text-dark-600 dark:text-dark-400 mt-2 leading-relaxed">
                                    {exp.description}
                                </p>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Key Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="card p-6 md:p-8 mb-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                            <Code className="text-accent-600 dark:text-accent-400" size={20} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                            Key Projects
                        </h2>
                    </div>

                    {resumeData.keyProjects.map((project, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">
                                {project.title}
                            </h3>
                            <p className="text-dark-600 dark:text-dark-300 mt-1 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 text-xs font-medium rounded bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="mt-2 space-y-1">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-sm text-dark-600 dark:text-dark-400 flex items-start gap-2">
                                        <span className="text-accent-500 mt-1">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="card p-6 md:p-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                            <Award className="text-accent-600 dark:text-accent-400" size={20} />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-dark-800 dark:text-dark-100">
                            Technical Skills
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-semibold text-dark-600 dark:text-dark-400 mb-2">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.languages.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-dark-600 dark:text-dark-400 mb-2">Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.frameworks.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-dark-600 dark:text-dark-400 mb-2">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.tools.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-dark-600 dark:text-dark-400 mb-2">Domains</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.domains.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
