import { Grid2x2, RotateCcw, Building2, LayoutGrid, Cpu, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: LayoutGrid,
    title: 'Sectional Doors',
    desc: 'Premium sectional garage doors in aluminium, timber, steel panel and glass fibre. Available in the Alu-Lux zinc range, raised-and-field panels, slatted timber and more — in a wide range of colours and finishes.',
    items: ['Alu-Lux Zinc Aluminium', 'Timber Range (10, 20, 30 panel, Tuscan)', 'Steel Panel', 'Glass Fibre'],
    path: '/sectional-doors',
    cta: 'Learn More →',
  },
  {
    icon: RotateCcw,
    title: 'Roll-Up Garage Doors',
    desc: 'Compact, space-saving roll-up doors for homes and light commercial properties. Available in standard and non-standard (custom) sizes. Stocked from trusted manufacturers Laziman and Wespeco.',
    items: ['Standard & custom sizes', 'Range of colours', 'Laziman Deluxe', 'Wespeco doors'],
    path: '/roll-up-garage-doors',
    cta: 'Learn More →',
  },
  {
    icon: Building2,
    title: 'Industrial Roller Shutters',
    desc: 'Heavy-duty roller shutters for warehouses, factories, retail stores and industrial premises. Engineered for security and durability in demanding commercial environments.',
    items: ['Warehouses & factories', 'Retail security shutters', 'Heavy-gauge steel', 'Manual & automated options'],
    path: '/industrial-roller-shutters',
    cta: 'Learn More →',
  },
  {
    icon: Grid2x2,
    title: 'Aluminium Window Shutters',
    desc: 'Lightweight, rust-resistant aluminium shutters for windows and openings. Built to withstand wind, rain and hail — a long-term investment that combines security with aesthetic appeal.',
    items: ["Won't rust or corrode", 'Resistant to wind & hail', 'Lightweight yet sturdy', 'Various colour options'],
    path: '/aluminium-window-shutters',
    cta: 'Learn More →',
  },
  {
    icon: Cpu,
    title: 'Door & Gate Automation',
    desc: 'We automate garage and roller shutter doors using leading automation brands. All solutions work with both roll-up and sectional doors, giving you convenient, reliable motorised operation.',
    items: ['Hydro Doors', 'DigidoorIII Range', 'Gemini & Superdrive', 'ET Systems & Slimdrive'],
    path: '/automation',
    cta: 'Learn More →',
  },
  {
    icon: Wrench,
    title: 'Service & Repairs',
    desc: "Our after-sales commitment is a core part of what we offer. We service and repair all products we supply — and respond promptly when something needs attention, because your security shouldn't wait.",
    items: ['All products serviced', 'Prompt response', 'Experienced technicians', 'PE & surrounds'],
    path: null,
    cta: 'Enquire →',
  },
]

const linkStyle = {
  fontFamily: 'Open Sans, sans-serif',
  color: 'var(--color-accent)',
}

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--color-bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <span className="ghost-text" style={{ bottom: '-0.1em', right: '-0.02em', opacity: 1 }}>
        DOORS
      </span>

      <div className="container-x relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow justify-center">What We Offer</p>
            <h2>Products &amp; Services</h2>
            <p className="mt-4 text-sm">
              From residential garage doors to industrial roller shutters and full automation — one trusted supplier for every door solution in Port Elizabeth.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div
                className="bg-white p-7 h-full flex flex-col gap-4 group cursor-default transition-shadow duration-300 hover:shadow-[--shadow-card-hover]"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <s.icon size={28} strokeWidth={1.5} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'Questrial, sans-serif', fontWeight: 400 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.items.map(item => (
                      <li
                        key={item}
                        className="text-xs flex items-center gap-2"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <span style={{ color: 'var(--color-accent)', fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                  {s.path ? (
                    <Link
                      to={s.path}
                      className="text-xs font-semibold uppercase tracking-wider hover:gap-2.5 flex items-center gap-1.5 transition-all"
                      style={linkStyle}
                    >
                      {s.cta}
                    </Link>
                  ) : (
                    <a
                      href="/#contact"
                      className="text-xs font-semibold uppercase tracking-wider hover:gap-2.5 flex items-center gap-1.5 transition-all"
                      style={linkStyle}
                    >
                      {s.cta}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
