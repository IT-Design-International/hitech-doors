import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) { setVisible(true); obs.disconnect(); break }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    const fallback = setTimeout(() => setVisible(true), 1500)
    return () => { obs.disconnect(); clearTimeout(fallback) }
  }, [])

  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  )
}
