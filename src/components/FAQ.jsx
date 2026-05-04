import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'What types of garage doors does Hi-Tech Doors supply?',
    a: 'We supply and install sectional doors (aluminium Alu-Lux zinc range, timber range, steel panel, glass fibre), roll-up garage doors, industrial roller shutters and aluminium window shutters. All products are available in a range of colours and finishes, and custom (non-standard) sizes can be manufactured.',
  },
  {
    q: 'Do you install automation for garage doors and gates?',
    a: 'Yes. We install full automation solutions compatible with both roll-up and sectional doors. We are agents for Hydro Doors, DigidoorIII, Gemini, Superdrive, ET Systems and Slimdrive — a full range of proven automation brands.',
  },
  {
    q: 'What makes aluminium doors a good long-term investment?',
    a: 'Aluminium doors are resistant to rust, wind, rain, snow and hail. They\'re lightweight yet very sturdy. While the upfront cost is higher than some alternatives, they are built to last a lifetime — making them the most cost-effective choice over the long term.',
  },
  {
    q: 'Where is Hi-Tech Doors located, and which areas do you serve?',
    a: 'Our showroom and workshop is at 6 7th Avenue, Newton Park, Port Elizabeth (Gqeberha). We serve Port Elizabeth and the surrounding areas of the Eastern Cape.',
  },
  {
    q: 'How long has Hi-Tech Doors been in business?',
    a: 'Hi-Tech Doors was established in 1997 — over 28 years of experience supplying, installing and servicing garage doors and automation systems in Port Elizabeth.',
  },
  {
    q: 'Do you offer service and repairs after installation?',
    a: 'Absolutely. After-sales service is a core part of what we offer. We service and repair all the products we supply and respond promptly when something needs attention. Our clients specifically mention our after-sales reliability as a key reason they recommend us.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section-pad" style={{ background: 'white', position: 'relative', overflow: 'hidden' }}>
      <span className="ghost-text" style={{ bottom: '-0.1em', left: '-0.02em', opacity: 1 }}>FAQ</span>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Common Questions</p>
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-sm leading-relaxed mb-6">
              Can&apos;t find the answer you&apos;re looking for? Call us directly — we&apos;re happy to advise on the right door or automation solution for your property.
            </p>
            <a href="tel:+27413653996" className="btn btn-primary">(041) 365-3996</a>
          </Reveal>

          <div className="lg:col-span-8">
            <dl className="space-y-0">
              {FAQS.map((faq, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={faq.q} delay={i * 0.05}>
                    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <dt>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="w-full flex items-start justify-between gap-4 py-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-sm pr-4" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-primary)', lineHeight: 1.4, fontSize: '0.95rem' }}>
                            {faq.q}
                          </span>
                          <span
                            className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
                            style={{ background: isOpen ? 'var(--color-accent)' : 'var(--color-bg-primary)', transition: 'background 0.2s' }}
                          >
                            {isOpen
                              ? <Minus size={14} strokeWidth={2} color="white" />
                              : <Plus size={14} strokeWidth={2} color="var(--color-text-muted)" />
                            }
                          </span>
                        </button>
                      </dt>
                      {isOpen && (
                        <dd className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          {faq.a}
                        </dd>
                      )}
                    </div>
                  </Reveal>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
