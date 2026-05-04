import { ShieldCheck, Wrench, Star } from 'lucide-react'
import Reveal from './Reveal'

const REASONS = [
  {
    icon: Star,
    title: 'Trusted Since 1997',
    body: 'Over 28 years serving Port Elizabeth homeowners and businesses. Our track record of satisfied clients — many of whom refer us to neighbours and colleagues — speaks for itself.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Brands, Expert Installation',
    body: 'We stock and install doors from Timbercon, Superdoors and Wispeco — names that stand behind their products. Paired with our professional installation team, every door goes in right, first time.',
  },
  {
    icon: Wrench,
    title: 'Reliable After-Sales Service',
    body: 'Our relationship doesn\'t end at installation. We return promptly when needed — our clients consistently highlight our after-sales responsiveness as a key reason they recommend us.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow justify-center">Why Hi-Tech Doors</p>
            <h2>Port Elizabeth&apos;s Garage Door Specialists</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div
                className="bg-white p-8 h-full flex flex-col gap-5"
                style={{ boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--color-accent)' }}
              >
                {/* Icon with dashed ring */}
                <div className="icon-circle">
                  <r.icon size={28} strokeWidth={1.5} color="white" />
                </div>
                <div>
                  <h3 className="mb-3" style={{ fontFamily: 'Questrial, sans-serif', fontWeight: 400 }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
