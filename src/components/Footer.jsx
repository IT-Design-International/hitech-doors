import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  { label: 'Sectional Doors', to: '/sectional-doors' },
  { label: 'Roll-Up Garage Doors', to: '/roll-up-garage-doors' },
  { label: 'Industrial Roller Shutters', to: '/industrial-roller-shutters' },
  { label: 'Aluminium Window Shutters', to: '/aluminium-window-shutters' },
  { label: 'Automation', to: '/automation' },
  { label: 'Service & Repairs', href: '/#contact' },
]

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111B26', color: 'rgba(255,255,255,0.75)' }}>
      {/* CTA band */}
      <div style={{ background: 'var(--color-accent)', padding: '1.75rem 0' }}>
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bold text-lg text-white" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.04em' }}>
            Ready to upgrade your garage door or automation?
          </p>
          <div className="flex gap-3">
            <a href="tel:+27413653996" className="btn btn-outline text-white" style={{ borderColor: 'white' }}>
              Call Now
            </a>
            <a href="/#contact" className="btn btn-navy">Get a Quote</a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="text-base font-semibold text-white mb-4" style={{ fontFamily: 'Questrial, sans-serif', fontSize: '1.25rem' }}>Hi-Tech Doors</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Port Elizabeth&apos;s trusted garage door and automation specialists — supplying, installing and servicing quality doors since 1997.
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>Est. 1997 — Reg. Hi-Tech Doors (PTY) LTD</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-5 text-sm" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      className="text-sm transition-colors hover:text-white flex items-center gap-2"
                      style={{ color: 'rgba(255,255,255,0.60)' }}
                    >
                      <span style={{ color: 'var(--color-accent)', fontSize: '1rem', lineHeight: 1 }}>›</span>
                      {s.label}
                    </a>
                  ) : (
                    <Link
                      to={s.to}
                      className="text-sm transition-colors hover:text-white flex items-center gap-2"
                      style={{ color: 'rgba(255,255,255,0.60)' }}
                    >
                      <span style={{ color: 'var(--color-accent)', fontSize: '1rem', lineHeight: 1 }}>›</span>
                      {s.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-5 text-sm" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV.map(n => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-sm transition-colors hover:text-white flex items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.60)' }}
                  >
                    <span style={{ color: 'var(--color-accent)', fontSize: '1rem', lineHeight: 1 }}>›</span>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-5 text-sm" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <div>
                  <a href="tel:+27413653996" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    (041) 365-3996
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.40)' }}>Fax: (041) 365-4015</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <a href="mailto:hitechdoors@absamail.co.za" className="text-sm break-all hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  hitechdoors@absamail.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <address className="text-sm not-italic" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  6 7th Avenue<br />Newton Park<br />Port Elizabeth, 6045
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal links */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1rem 0' }}>
        <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
          <a href="/legal/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/legal/paia-manual.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PAIA Manual</a>
          <a href="/legal/sales-terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sales Terms &amp; Conditions</a>
          <a href="/legal/website-terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Website Terms &amp; Conditions</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.25rem 0' }}>
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <span>&copy; {new Date().getFullYear()} Hi-Tech Doors (PTY) LTD. All rights reserved.</span>
          <span>Website by <a href="https://itdesign.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.50)' }}>IT Design International</a></span>
        </div>
      </div>
    </footer>
  )
}
