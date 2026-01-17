import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TimelineNode from './TimelineNode'

export default function Timeline({ experiences, onNodeClick, selectedExperience }) {
    const scrollRef = useRef(null)
    const [showLeftGradient, setShowLeftGradient] = useState(false)
    const [showRightGradient, setShowRightGradient] = useState(true)

    // Handle scroll to show/hide edge gradients
    const handleScroll = () => {
        if (!scrollRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setShowLeftGradient(scrollLeft > 10)
        setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10)
    }

    useEffect(() => {
        const scrollElement = scrollRef.current
        if (!scrollElement) return

        scrollElement.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => scrollElement.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative w-full overflow-visible" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
            {/* Left edge gradient */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-dark-900 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showLeftGradient ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Right edge gradient */}
            <div
                className={`absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-dark-900 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showRightGradient ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Scrollable timeline container */}
            <div
                ref={scrollRef}
                className="overflow-x-auto overflow-y-visible hide-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                <div className="relative min-w-full px-8 md:px-16 overflow-visible pb-8">
                    {/* Container for nodes with full width distribution */}
                    <div
                        className="relative flex justify-between items-center overflow-visible"
                        style={{ minHeight: '400px', minWidth: `${experiences.length * 180}px` }}
                    >
                        {/* Main horizontal axis line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 origin-left -translate-y-1/2"
                        />

                        {/* Timeline nodes - distributed across full width */}
                        {experiences.map((exp, index) => {
                            const isAbove = index % 2 === 0
                            const isSelected = selectedExperience?.id === exp.id

                            return (
                                <TimelineNode
                                    key={exp.id}
                                    experience={exp}
                                    position={isAbove ? 'top' : 'bottom'}
                                    index={index}
                                    totalCount={experiences.length}
                                    isSelected={isSelected}
                                    onClick={() => onNodeClick(exp)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile scroll hint */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xs text-dark-400 dark:text-dark-500 mt-4 md:hidden"
            >
                Swipe to explore timeline →
            </motion.p>
        </div>
    )
}
