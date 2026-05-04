import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  'Sectional Doors',
  'Roll-Up Garage Doors',
  'Industrial Roller Shutters',
  'Aluminium Window Shutters',
  'Automation',
  'Service & Repairs',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website Enquiry: ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:hitechdoors@absamail.co.za?subject=${subject}&body=${body}`
  }

  const inputClass = "w-full px-4 py-3.5 border text-sm outline-none focus:border-[--color-accent] transition-colors"
  const inputStyle = { borderColor: 'var(--color-border)', color: 'var(--color-text-primary)', background: 'white' }

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow justify-center">Get in Touch</p>
            <h2>Request a Quote</h2>
            <p className="mt-4 text-sm">
              Based in Newton Park, Port Elizabeth. We serve PE and the surrounding Eastern Cape.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-0">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  content: <a href="tel:+27413653996" className="hover:text-[--color-accent] transition-colors font-medium">(041) 365-3996</a>,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  content: <a href="mailto:hitechdoors@absamail.co.za" className="hover:text-[--color-accent] transition-colors break-all text-sm">hitechdoors@absamail.co.za</a>,
                },
                {
                  icon: MapPin,
                  label: 'Showroom',
                  content: <span className="text-sm">6 7th Avenue, Newton Park<br />Port Elizabeth, 6045</span>,
                },
                {
                  icon: Clock,
                  label: 'Service Area',
                  content: <span className="text-sm">Port Elizabeth &amp; surrounds<br />Eastern Cape</span>,
                },
              ].map(({ icon: Icon, label, content }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-bg-deep)' }}
                  >
                    <Icon size={18} strokeWidth={1.5} color="white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-accent)' }}>
                      {label}
                    </p>
                    <div style={{ color: 'var(--color-text-secondary)' }}>{content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <iframe
                title="Hi-Tech Doors location — 6 7th Avenue Newton Park Port Elizabeth"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5!2d25.5620!3d-33.9770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzM3LjIiUyAyNcKwMzMnNDMuMiJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8"
              style={{ background: 'white', boxShadow: 'var(--shadow-card)' }}
            >
              <h3 className="mb-6">Send Us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="ct-name" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>Full Name *</label>
                  <input id="ct-name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="ct-email" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>Email *</label>
                  <input id="ct-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass} style={inputStyle} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="ct-phone" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>Phone</label>
                  <input id="ct-phone" name="phone" type="tel" placeholder="(041) 000-0000" value={form.phone} onChange={handleChange} className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="ct-service" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>Service Required</label>
                  <select id="ct-service" name="service" value={form.service} onChange={handleChange} className={`${inputClass} appearance-none`} style={{ ...inputStyle, color: form.service ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="ct-message" className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Open Sans, sans-serif', color: 'var(--color-text-muted)' }}>Message</label>
                <textarea id="ct-message" name="message" rows={5} placeholder="Tell us about your project — door type, opening size, existing automation, etc." value={form.message} onChange={handleChange} className={inputClass} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary btn-large w-full flex items-center justify-center gap-2">
                <Send size={16} /> Send Enquiry
              </button>
              <p className="text-xs text-center mt-4" style={{ color: 'var(--color-text-muted)' }}>
                Prefer to call? <a href="tel:+27413653996" className="font-semibold hover:text-[--color-accent] transition-colors" style={{ color: 'var(--color-bg-deep)' }}>(041) 365-3996</a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
