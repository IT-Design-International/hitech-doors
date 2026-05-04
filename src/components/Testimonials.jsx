import { Quote } from 'lucide-react'
import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    name: 'Mrs Pienaar',
    location: 'Kamma Park, Port Elizabeth',
    text: 'Thank you so much for your company\'s prompt service with the installation of my garage door. I will definitely recommend Hi-Tech Doors to others.',
  },
  {
    name: 'Riaan',
    location: 'Tulbagh, Port Elizabeth',
    text: 'Your fitment team treated me with the utmost respect. They took the time to explain what they were doing and made sure I understood all the operating instructions. What a professional team of installers.',
  },
  {
    name: 'Marius',
    location: 'Smallville Place, Port Elizabeth',
    text: 'After installation, a small issue arose with the door. I contacted the office and your team came out on time to fix the problem. Thank you for your exceptional after-sales service — it\'s rare and very appreciated.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad" style={{ background: 'var(--color-bg-deep)', position: 'relative', overflow: 'hidden' }}>
      {/* Ghost text */}
      <span
        className="ghost-text"
        style={{ top: '-0.1em', right: '-0.02em', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}
      >
        TRUST
      </span>

      <div className="container-x relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow justify-center" style={{ color: 'var(--color-accent)' }}>What Our Clients Say</p>
            <h2 style={{ color: 'white' }}>Trusted by Port Elizabeth Homeowners &amp; Businesses</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className="p-8 flex flex-col gap-4 h-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <Quote size={32} strokeWidth={1.2} style={{ color: 'var(--color-accent)', opacity: 0.8 }} />
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1rem' }}>
                  <p className="font-semibold" style={{ fontFamily: 'Oswald, sans-serif', color: 'white', letterSpacing: '0.04em' }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-teal)' }}>{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
