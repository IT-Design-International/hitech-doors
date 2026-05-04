import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, Phone, ChevronLeft, ChevronRight, X } from 'lucide-react'
import NavBar from './NavBar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Reveal from './Reveal'

export default function ProductPageLayout({
  title,
  eyebrow,
  intro,
  heroImage,
  heroAlt,
  features = [],
  highlights = [],
  gallery = [],
  ctaNote,
  metaTitle,
  metaDescription,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') setLightboxIdx(i => (i - 1 + gallery.length) % gallery.length)
      if (e.key === 'ArrowRight') setLightboxIdx(i => (i + 1) % gallery.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, gallery.length])

  return (
    <>
      <Helmet>
        <title>{metaTitle || `${title} | Hi-Tech Doors Port Elizabeth`}</title>
        <meta name="description" content={metaDescription || intro} />
      </Helmet>

      <NavBar />

      <main>
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section
          className="relative"
          style={{ minHeight: '62vh' }}
          aria-label={heroAlt}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${heroImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label={heroAlt}
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(28,64,96,0.82) 0%, rgba(26,37,53,0.70) 100%)' }}
          />

          {/* Content — fills section, centers below nav */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center text-center text-white"
            style={{ paddingTop: '132px', paddingBottom: '3rem' }}
          >
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p
                className="mb-4"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.8rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '28px',
                    height: '2px',
                    background: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                />
                {eyebrow}
              </p>
              <h1 className="text-white mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
                {title}
              </h1>
              <p
                className="max-w-2xl mx-auto text-lg leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {intro}
              </p>
            </motion.div>
          </div>
          </div>
        </section>

        {/* ── Features grid ──────────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'white' }}>
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <Reveal key={feature.title} delay={i * 0.1}>
                    <div
                      className="bg-white p-8 h-full flex flex-col gap-5"
                      style={{
                        boxShadow: 'var(--shadow-card)',
                        borderTop: '3px solid var(--color-accent)',
                      }}
                    >
                      <Icon size={30} strokeWidth={1.5} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <div>
                        <h3
                          className="mb-3"
                          style={{ fontFamily: 'Questrial, sans-serif', fontWeight: 400 }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed">{feature.body}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Gallery ────────────────────────────────────────────── */}
        {gallery.length > 0 && (
          <section className="section-pad" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container-x">
              <Reveal>
                <p className="eyebrow justify-center">Our Work</p>
                <h2 className="text-center mb-10">Product Gallery</h2>
              </Reveal>
              <div className={`grid gap-4 ${gallery.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : gallery.length <= 3 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                {gallery.map((img, i) => (
                  <Reveal key={img.src} delay={i * 0.07}>
                    <div
                      className="overflow-hidden cursor-zoom-in group"
                      style={{ aspectRatio: '4/3' }}
                      onClick={() => { setLightboxIdx(i); setLightboxOpen(true) }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Highlights + CTA ───────────────────────────────────── */}
        <section className="section-pad" style={{ background: 'var(--color-bg-primary)' }}>
          <div className="container-x">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Highlights checklist */}
                <div>
                  <p className="eyebrow">Key Details</p>
                  <h2 className="mb-8">Why Choose This Product?</h2>
                  <ul className="space-y-4">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={20}
                          strokeWidth={1.5}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--color-accent)' }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA box */}
                <Reveal delay={0.15}>
                  <div
                    className="p-8 flex flex-col gap-5"
                    style={{ background: 'var(--color-bg-deep)' }}
                  >
                    <h3
                      className="text-white"
                      style={{ fontFamily: 'Questrial, sans-serif', fontWeight: 400, fontSize: '1.5rem', lineHeight: 1.2 }}
                    >
                      Get a Free Quote
                    </h3>
                    {ctaNote && (
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                        {ctaNote}
                      </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href="/#contact"
                        className="btn btn-primary"
                        style={{ flex: 1, textAlign: 'center' }}
                      >
                        Request a Quote
                      </a>
                      <a
                        href="tel:+27413653996"
                        className="btn btn-outline flex items-center justify-center gap-2"
                        style={{ flex: 1 }}
                      >
                        <Phone size={16} strokeWidth={1.5} />
                        Call Us
                      </a>
                    </div>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      (041) 365-3996 &mdash; Mon–Fri, business hours
                    </p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />

      {/* ── Lightbox ───────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white p-2 hover:opacity-70 transition-opacity"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={30} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          {gallery.length > 1 && (
            <button
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white p-3 hover:opacity-70 transition-opacity"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => (i - 1 + gallery.length) % gallery.length) }}
              aria-label="Previous image"
            >
              <ChevronLeft size={40} strokeWidth={1.5} />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[85vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIdx].src}
              alt={gallery[lightboxIdx].alt}
              className="max-w-full max-h-[85vh] object-contain"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
            />
          </div>

          {/* Next */}
          {gallery.length > 1 && (
            <button
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white p-3 hover:opacity-70 transition-opacity"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => (i + 1) % gallery.length) }}
              aria-label="Next image"
            >
              <ChevronRight size={40} strokeWidth={1.5} />
            </button>
          )}

          {/* Counter */}
          {gallery.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm px-3 py-1"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {lightboxIdx + 1} / {gallery.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
