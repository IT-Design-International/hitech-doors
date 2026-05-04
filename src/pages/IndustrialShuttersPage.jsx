import { Building2, ShieldCheck, Cpu } from 'lucide-react'
import ProductPageLayout from '../components/ProductPageLayout'

const GALLERY = [
  { src: '/images/industrial-shutter-1.jpg', alt: 'Industrial roller shutter installation' },
  { src: '/images/industrial-shutter-2.jpg', alt: 'Commercial roller shutter Port Elizabeth' },
  { src: '/images/industrial-shutter-3.jpg', alt: 'Industrial roller shutter closed' },
]

const FEATURES = [
  {
    icon: Building2,
    title: 'Warehouses & Factories',
    body: 'Purpose-built for large industrial openings. Our heavy-gauge steel shutters withstand heavy use, forklift proximity and the rigours of a working warehouse or factory floor.',
  },
  {
    icon: ShieldCheck,
    title: 'Retail Security',
    body: 'Protect your retail premises after hours with shutters that deter forced entry and provide a visible security barrier — without compromising on operating speed during business hours.',
  },
  {
    icon: Cpu,
    title: 'Manual & Automated',
    body: 'Available in manually operated or fully automated configurations. Automation can be retrofitted to existing installations where required.',
  },
]

const HIGHLIGHTS = [
  'Heavy-gauge steel construction',
  'Suitable for large commercial openings',
  'Manual and automated options',
  'Warehouses, factories and retail applications',
  'Installed by our experienced commercial team',
  'Service and repairs across Port Elizabeth',
]

export default function IndustrialShuttersPage() {
  return (
    <ProductPageLayout
      title="Industrial Roller Shutters"
      eyebrow="Industrial Shutters"
      intro="Heavy-duty roller shutters engineered for warehouses, factories, retail stores and industrial premises — built for security, durability and demanding commercial environments."
      heroImage="/images/industrial-shutter-1.jpg"
      gallery={GALLERY}
      heroAlt="Industrial roller shutter installation Port Elizabeth"
      features={FEATURES}
      highlights={HIGHLIGHTS}
      ctaNote="Working to a project deadline or need a site visit to assess your opening? Contact us — we handle commercial installations across the Eastern Cape."
      metaTitle="Industrial Roller Shutters Port Elizabeth | Hi-Tech Doors"
      metaDescription="Heavy-duty industrial roller shutters for warehouses, factories and retail stores in Port Elizabeth. Heavy-gauge steel, manual and automated. Supply, install and service across the Eastern Cape."
    />
  )
}
