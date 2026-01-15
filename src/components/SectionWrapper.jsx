import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ 
  children, 
  id, 
  className = '',
  delay = 0,
  ...props 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}
