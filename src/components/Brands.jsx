import Reveal from './Reveal'

const DOOR_BRANDS = [
  { name: 'Timbercon', logo: '/images/hitech-uses-timbercon-garage-roller-shutter-doors.jpg', type: 'Sectional Doors' },
  { name: 'Superdoors', logo: '/images/hitech-uses-super-doors-garage-roller-shutter-doors.jpg', type: 'Sectional & Roll-Up Doors' },
  { name: 'Wispeco', logo: '/images/hitech-uses-wispeco-garage-roller-shutter-doors.jpg', type: 'Aluminium Products' },
]

const AUTO_BRANDS = [
  'Hydro Doors',
  'DigidoorIII',
  'Gemini',
  'Superdrive',
  'ET Systems',
  'Slimdrive',
]

export default function Brands() {
  return (
    <section id="brands" className="section-pad" style={{ background: 'white' }}>
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow justify-center">Trusted Partners</p>
            <h2>Brands We Stock &amp; Install</h2>
            <p className="mt-4 text-sm">
              We carry and install from manufacturers with proven track records — so the quality of your door is backed by both the brand and our installation expertise.
            </p>
          </div>
        </Reveal>

        {/* Door brands */}
        <Reveal delay={0.05}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-center" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>
            Door Manufacturers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {DOOR_BRANDS.map((b) => (
              <div
                key={b.name}
                className="flex flex-col border overflow-hidden"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={b.logo}
                    alt={`${b.name} — garage door brand stocked by Hi-Tech Doors`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1 py-5 px-4">
                  <span className="font-bold text-base" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-bg-deep)' }}>{b.name}</span>
                  <span className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>{b.type}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Automation brands */}
        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-center" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>
            Automation Systems
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AUTO_BRANDS.map(b => (
              <span
                key={b}
                className="px-5 py-2.5 text-sm font-semibold"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  background: 'var(--color-bg-primary)',
                  color: 'var(--color-bg-deep)',
                  border: '1px solid var(--color-border)',
                  letterSpacing: '0.05em',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
