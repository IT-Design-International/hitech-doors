import Reveal from './Reveal'

const DOOR_BRANDS = [
  { name: 'Timbercon', logo: '/images/brand-timbercon.jpg', type: 'Sectional Doors' },
  { name: 'Superdoors', logo: '/images/brand-superdoors.jpg', type: 'Sectional &amp; Roll-Up Doors' },
  { name: 'Wispeco', logo: '/images/brand-wispeco.jpg', type: 'Aluminium Products' },
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
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-center" style={{ fontFamily: 'Oswald, sans-serif', color: 'var(--color-text-muted)' }}>
            Door Manufacturers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {DOOR_BRANDS.map((b, i) => (
              <div
                key={b.name}
                className="flex flex-col items-center justify-center gap-3 p-8 border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <img
                  src={b.logo}
                  alt={`${b.name} — garage door brand stocked by Hi-Tech Doors`}
                  className="h-12 object-contain"
                  onError={e => {
                    e.currentTarget.parentElement.innerHTML = `<span style="font-family:Oswald,sans-serif;font-size:1.4rem;font-weight:700;color:var(--color-bg-deep)">${b.name}</span><span style="font-size:0.7rem;color:var(--color-text-muted);margin-top:0.25rem">${b.type}</span>`
                  }}
                />
                <span
                  className="text-xs text-center"
                  style={{ color: 'var(--color-text-muted)' }}
                  dangerouslySetInnerHTML={{ __html: b.type }}
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Automation brands */}
        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-center" style={{ fontFamily: 'Oswald, sans-serif', color: 'var(--color-text-muted)' }}>
            Automation Systems
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AUTO_BRANDS.map(b => (
              <span
                key={b}
                className="px-5 py-2.5 text-sm font-semibold"
                style={{
                  fontFamily: 'Oswald, sans-serif',
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
