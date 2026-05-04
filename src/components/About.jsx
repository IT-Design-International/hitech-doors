import { CheckCircle } from 'lucide-react'
import Reveal from './Reveal'

const HIGHLIGHTS = [
  'Established in Port Elizabeth in 1997',
  'Our own dedicated team of employees handles every installation',
  'Trusted brands: Timbercon, Superdoors, Wispeco',
  'Standard and custom (non-standard) sizing available',
  'Residential and commercial installations',
  'Service and repairs across PE and surrounds',
]

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'white' }}>
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image */}
          <Reveal className="relative">
            <div className="relative" style={{ maxHeight: '560px', overflow: 'hidden' }}>
              <img
                src="/images/Roll-Up Garage Doors Industrial Roller Shutters.jpg"
                alt="Modern garage door installation by Hi-Tech Doors Port Elizabeth"
                className="w-full object-cover object-center"
                style={{ height: '560px' }}
              />
              {/* Stat badge — Dormatic floating card style */}
              <div
                className="absolute bottom-6 left-6 px-6 py-4 bg-white flex items-center gap-4"
                style={{ boxShadow: 'var(--shadow-deep)' }}
              >
                <span className="text-4xl font-bold" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-teal)' }}>28+</span>
                <span className="text-sm leading-tight" style={{ color: 'var(--color-text-secondary)' }}>
                  Years of<br />Excellence
                </span>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1}>
            <p className="eyebrow">About Hi-Tech Doors</p>
            <h2 className="mb-4">
              Garage Door Installation &amp;<br />Repair Specialists
            </h2>

            {/* Pull-quote — Dormatic orange quote-mark style */}
            <blockquote
              className="my-6 pl-5 py-2 text-base font-medium leading-relaxed"
              style={{
                borderLeft: '4px solid var(--color-accent)',
                color: 'var(--color-teal)',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              Every garage door, whether for your home or business,<br />
              is supplied and installed to perfection.
            </blockquote>

            <p className="mb-4 text-sm leading-relaxed">
              Hi-Tech Doors was established in 1997 in Port Elizabeth. For nearly three decades, we&apos;ve built a reputation on quality products, professional workmanship and outstanding customer service — values that have turned first-time clients into long-term advocates.
            </p>
            <p className="mb-6 text-sm leading-relaxed">
              Our mission is straightforward: provide the best garage doors money can buy, installed by a team that takes pride in every job. No installation is too complicated or too difficult for our experienced team.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {HIGHLIGHTS.map(h => (
                <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <CheckCircle size={16} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="/#contact" className="btn btn-primary">Get a Free Quote</a>
              <a href="tel:+27413653996" className="btn btn-navy">(041) 365-3996</a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
