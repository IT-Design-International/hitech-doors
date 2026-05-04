import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  { label: 'Sectional Doors', to: '/sectional-doors' },
  { label: 'Roll-Up Garage Doors', to: '/roll-up-garage-doors' },
  { label: 'Industrial Roller Shutters', to: '/industrial-roller-shutters' },
  { label: 'Aluminium Window Shutters', to: '/aluminium-window-shutters' },
  { label: 'Automation', to: '/automation' },
  { label: 'Service & Repairs', to: '/#contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="w-full z-50 fixed top-0 left-0">
      {/* Top info bar */}
      <div className="hidden md:block" style={{ background: 'var(--color-bg-deep)' }}>
        <div className="container-x flex items-center justify-between py-2 text-sm text-white/80 gap-6">
          <div className="flex items-center gap-6">
            <a href="tel:+27413653996" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} strokeWidth={1.5} />
              (041) 365-3996
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} strokeWidth={1.5} />
              6 7th Avenue, Newton Park, Port Elizabeth
            </span>
          </div>
          <span className="text-white/60 text-xs">Established 1997 &mdash; Serving PE &amp; Surrounds</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="transition-shadow duration-300"
        style={{
          background: 'white',
          borderBottom: '1px solid rgba(28,64,96,0.12)',
          boxShadow: scrolled ? '0 4px 24px rgba(28,64,96,0.12)' : '0 2px 8px rgba(28,64,96,0.06)',
        }}
      >
        <div className="container-x flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0" aria-label="Hi-Tech Doors home">
            <img
              src="/images/logo.png"
              alt="Hi-Tech Doors logo"
              className="h-12 w-auto object-contain"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            <span className="sr-only">Hi-Tech Doors</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            <li key="home">
              <a href="#home" className="px-3 py-2 text-sm font-medium transition-colors hover:text-[--color-accent]" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.02em', color: 'var(--color-text-primary)' }}>Home</a>
            </li>

            {/* Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-[--color-accent] flex items-center gap-1"
                style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.02em', color: 'var(--color-text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Services
                <ChevronDown size={14} strokeWidth={1.5} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 py-2 w-56 bg-white z-50"
                  style={{ boxShadow: '0 8px 32px rgba(28,64,96,0.14)', border: '1px solid rgba(28,64,96,0.08)' }}
                >
                  <a
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border-subtle)' }}
                  >
                    All Services
                  </a>
                  {SERVICE_LINKS.map(s => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 hover:text-[--color-accent]"
                      style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-secondary)' }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium transition-colors hover:text-[--color-accent]"
                  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.02em', color: 'var(--color-text-primary)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn btn-primary hidden sm:inline-flex"
              style={{ padding: '10px 22px', fontSize: '0.82rem' }}
            >
              Get a Quote
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(v => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t" style={{ borderColor: 'var(--color-border)', background: 'white' }}>
            <ul className="container-x flex flex-col py-3">
              <li>
                <a href="#home" onClick={() => setOpen(false)} className="block py-3 border-b text-sm font-medium hover:text-[--color-accent] transition-colors" style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.02em', color: 'var(--color-text-primary)', borderColor: 'var(--color-border-subtle)' }}>
                  Home
                </a>
              </li>
              {/* Mobile Services expandable */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(v => !v)}
                  className="w-full flex items-center justify-between py-3 border-b text-sm font-medium hover:text-[--color-accent] transition-colors"
                  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.02em', color: 'var(--color-text-primary)', borderColor: 'var(--color-border-subtle)', background: 'none', border: 'none', borderBottom: '1px solid var(--color-border-subtle)', cursor: 'pointer' }}
                >
                  Services
                  <ChevronDown size={14} strokeWidth={1.5} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {mobileServicesOpen && (
                  <ul className="pl-4 pb-1" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <li>
                      <a href="#services" onClick={() => { setOpen(false); setMobileServicesOpen(false) }} className="block py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-accent)' }}>All Services</a>
                    </li>
                    {SERVICE_LINKS.map(s => (
                      <li key={s.to}>
                        <Link to={s.to} onClick={() => { setOpen(false); setMobileServicesOpen(false) }} className="block py-2 text-sm hover:text-[--color-accent] transition-colors" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-secondary)' }}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b text-sm font-medium hover:text-[--color-accent] transition-colors"
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      letterSpacing: '0.02em',
                      color: 'var(--color-text-primary)',
                      borderColor: 'var(--color-border-subtle)',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
