import { useState } from 'react'
import { Send } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  'Sectional Doors',
  'Roll-Up Garage Doors',
  'Industrial Roller Shutters',
  'Aluminium Window Shutters',
  'Automation',
  'Service &amp; Repairs',
]

export default function QuickContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry: ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}`
    )
    window.location.href = `mailto:hitechdoors@absamail.co.za?subject=${subject}&body=${body}`
  }

  return (
    <section className="section-pad" style={{ background: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Ghost watermark text */}
      <span className="ghost-text" style={{ top: '-0.1em', left: '-0.02em', opacity: 1 }}>
        HI-TECH
      </span>

      <div className="container-x relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow">Quick Enquiry</p>
              <h2>Schedule a Service Request</h2>
            </div>
            <a
              href="#contact"
              className="text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all"
              style={{ color: 'var(--color-accent)', fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              Find Our Showroom →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="lg:col-span-1">
              <label htmlFor="qc-name" className="sr-only">Full Name</label>
              <input
                id="qc-name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border text-sm outline-none focus:border-[--color-accent] transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)', background: 'var(--color-bg-primary)' }}
              />
            </div>
            <div className="lg:col-span-1">
              <label htmlFor="qc-email" className="sr-only">Email Address</label>
              <input
                id="qc-email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border text-sm outline-none focus:border-[--color-accent] transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)', background: 'var(--color-bg-primary)' }}
              />
            </div>
            <div className="lg:col-span-1">
              <label htmlFor="qc-phone" className="sr-only">Phone Number</label>
              <input
                id="qc-phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border text-sm outline-none focus:border-[--color-accent] transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)', background: 'var(--color-bg-primary)' }}
              />
            </div>
            <div className="lg:col-span-1">
              <label htmlFor="qc-service" className="sr-only">Type of Service</label>
              <select
                id="qc-service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border text-sm outline-none focus:border-[--color-accent] transition-colors appearance-none"
                style={{ borderColor: 'var(--color-border)', color: form.service ? 'var(--color-text-primary)' : 'var(--color-text-muted)', background: 'var(--color-bg-primary)' }}
              >
                <option value="" disabled>Type of Service</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="lg:col-span-1">
              <button type="submit" className="btn btn-primary w-full" style={{ padding: '14px 20px' }}>
                <Send size={16} /> Send
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
