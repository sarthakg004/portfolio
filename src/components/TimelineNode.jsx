import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Briefcase, Code, Building, GraduationCap } from 'lucide-react'

const iconMap = {
    GraduationCap: GraduationCap,
    Code: Code,
    Building: Building,
}

export default function TimelineNode({ experience, position, index, isSelected, onClick, totalCount }) {
    const [isHovered, setIsHovered] = useState(false)
    const nodeRef = useRef(null)
    const isAbove = position === 'top'
    const IconComponent = iconMap[experience.icon] || Briefcase

    // Determine if this is an edge node (first or last)
    const isFirstNode = index === 0
    const isLastNode = index === totalCount - 1

    // Simple rule: top nodes show tooltip below, bottom nodes show tooltip above
    const showTooltipBelow = isAbove

    // Format date for compact display
    const formatCompactDate = (duration) => {
        const parts = duration.split(' - ')
        if (parts.length === 2) {
            const start = parts[0].split(' ')
            const end = parts[1].split(' ')
            if (start[1] === end[1]) {
                return `${start[0]} - ${end[0]} ${end[1]}`
            }
        }
        return duration
    }

    // Get first sentence or truncated description
    const getOneLiner = () => {
        const desc = experience.description
        const firstSentence = desc.split('.')[0]
        return firstSentence.length > 80 ? firstSentence.substring(0, 77) + '...' : firstSentence
    }

    return (
        <div ref={nodeRef} className="relative flex flex-col items-center static">
            {/* Container with fixed height for alignment */}
            <div className="relative flex flex-col items-center" style={{ height: '400px' }}>
                {/* Node positioned above or below center */}
                <motion.div
                    initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="absolute flex flex-col items-center"
                    style={{
                        [isAbove ? 'bottom' : 'top']: '50%',
                        [isAbove ? 'marginBottom' : 'marginTop']: '16px',
                    }}
                >
                    {/* Vertical connector to axis */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                        className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent-500/60 to-purple-500/60 ${isAbove ? 'origin-bottom top-full' : 'origin-top bottom-full'
                            }`}
                        style={{ height: '16px' }}
                    />

                    {/* Compact square node card */}
                    <div className="relative static">
                        <motion.button
                            onClick={onClick}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative flex flex-col items-center justify-center gap-1.5 p-3 w-32 h-32 bg-white dark:bg-dark-800 rounded-xl shadow-lg cursor-pointer
                transition-all duration-300 border-2 ${isSelected
                                    ? 'border-accent-500 shadow-accent-500/30 shadow-xl ring-4 ring-accent-500/20'
                                    : 'border-transparent hover:border-accent-500/30'
                                }
                focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-dark-900`}
                            aria-label={`View details for ${experience.title} at ${experience.company}`}
                            aria-expanded={isSelected}
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-md`}>
                                <IconComponent className="w-6 h-6 text-white" />
                            </div>

                            {/* Company name - very compact */}
                            <h3 className="text-xs font-bold text-dark-800 dark:text-dark-100 text-center line-clamp-1 leading-tight w-full px-1">
                                {experience.company.split(' ')[0]}
                            </h3>

                            {/* Role - abbreviated */}
                            <p className="text-[10px] text-accent-600 dark:text-accent-400 font-medium text-center line-clamp-1 leading-tight w-full px-1">
                                {experience.title.split(' ').slice(0, 2).join(' ')}
                            </p>

                            {/* Date with icon */}
                            <p className="text-[9px] text-dark-500 dark:text-dark-400 text-center flex items-center gap-0.5">
                                <Calendar size={8} />
                                {formatCompactDate(experience.duration).split(' ').slice(-1)[0]}
                            </p>
                        </motion.button>

                        {/* Hover Tooltip - always opposite to node position */}
                        <AnimatePresence>
                            {isHovered && !isSelected && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: showTooltipBelow ? 10 : -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: showTooltipBelow ? 10 : -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute w-64 z-[9999] pointer-events-none"
                                    style={{
                                        [showTooltipBelow ? 'top' : 'bottom']: '100%',
                                        [showTooltipBelow ? 'marginTop' : 'marginBottom']: '12px',
                                        ...(isFirstNode ? { left: 0 } : isLastNode ? { right: 0 } : { left: '50%', transform: 'translateX(-50%)' })
                                    }}
                                >
                                    <div className="bg-dark-800 dark:bg-dark-700 text-white dark:text-dark-100 px-4 py-3 rounded-lg shadow-2xl border border-dark-600 dark:border-dark-500">
                                        {/* Full title and company */}
                                        <p className="text-sm font-semibold mb-1">
                                            {experience.title}
                                        </p>
                                        <p className="text-xs text-dark-300 dark:text-dark-400 mb-2">
                                            {experience.company}
                                        </p>

                                        {/* One-liner description */}
                                        <p className="text-xs text-dark-200 dark:text-dark-300 mb-2 leading-relaxed">
                                            {getOneLiner()}
                                        </p>

                                        {/* Click prompt */}
                                        <p className="text-xs text-accent-400 dark:text-accent-300 font-medium flex items-center gap-1">
                                            <span className="inline-block w-1 h-1 bg-accent-400 rounded-full animate-pulse" />
                                            Click to see full details
                                        </p>
                                    </div>

                                    {/* Arrow pointer - positioned based on tooltip direction */}
                                    <div
                                        className={`absolute w-0 h-0 ${showTooltipBelow
                                                ? 'bottom-full border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-dark-800 dark:border-b-dark-700'
                                                : 'top-full border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-dark-800 dark:border-t-dark-700'
                                            } ${isFirstNode ? 'left-16' : isLastNode ? 'right-16' : 'left-1/2 -translate-x-1/2'
                                            }`}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
