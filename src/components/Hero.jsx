import { Phone, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: '96px' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Modern garage door installation by Hi-Tech Doors Port Elizabeth"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(26,37,53,0.88) 40%, rgba(26,37,53,0.55) 100%)' }}
        />
      </div>

      <div className="container-x relative z-10 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Oswald, sans-serif', color: 'var(--color-accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            <span style={{ display: 'inline-block', width: 28, height: 2, background: 'var(--color-accent)', flexShrink: 0 }} />
            Port Elizabeth &amp; Surrounds — Est. 1997
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-6"
            style={{ lineHeight: 1.05 }}
          >
            We Open Doors<br />
            <span style={{ color: 'var(--color-accent)' }}>to Your Home</span><br />
            &amp; Business
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg mb-8 max-w-lg"
            style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 1.7 }}
          >
            Over 28 years supplying and installing quality garage doors, industrial roller shutters, and full automation — every installation completed to perfection.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Phone CTA — Dormatic teal box style */}
            <a
              href="tel:+27413653996"
              className="flex items-center gap-3 px-5 py-3.5 border-2 transition-colors"
              style={{
                borderColor: 'var(--color-teal)',
                background: 'rgba(42,172,172,0.15)',
                color: 'white',
              }}
            >
              <Phone size={20} strokeWidth={1.5} style={{ color: 'var(--color-teal)' }} />
              <span>
                <span className="block text-xs opacity-70" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.05em' }}>Call Us Now</span>
                <span className="font-bold text-lg" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em' }}>(041) 365-3996</span>
              </span>
            </a>

            <a href="#services" className="btn btn-primary btn-large flex items-center gap-2">
              Our Services <ChevronRight size={18} />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-10 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
          >
            {[
              { num: '28+', label: 'Years Experience' },
              { num: '3', label: 'Trusted Door Brands' },
              { num: '5+', label: 'Automation Brands' },
              { num: 'PE', label: '& Surrounds' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: 'var(--color-accent)' }}>{stat.num}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'Open Sans, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
