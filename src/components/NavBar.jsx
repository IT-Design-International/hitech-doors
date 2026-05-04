import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          boxShadow: scrolled ? '0 2px 24px rgba(28,64,96,0.12)' : '0 1px 0 rgba(28,64,96,0.08)',
        }}
      >
        <div className="container-x flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0" aria-label="Hi-Tech Doors home">
            <img
              src="/images/logo.png"
              alt="Hi-Tech Doors logo"
              className="h-14 sm:h-16 w-auto object-contain"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            <span className="sr-only">Hi-Tech Doors</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium transition-colors hover:text-[--color-accent]"
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em', color: 'var(--color-text-primary)' }}
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
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b text-sm font-medium hover:text-[--color-accent] transition-colors"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      letterSpacing: '0.06em',
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
