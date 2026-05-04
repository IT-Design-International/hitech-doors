import { Shield, Wind, Star } from 'lucide-react'
import ProductPageLayout from '../components/ProductPageLayout'

const GALLERY = [
  { src: '/images/alum-shutter-1.jpg', alt: 'Aluminium window shutters Port Elizabeth' },
  { src: '/images/alum-shutter-2.jpg', alt: 'Aluminium shutters installed on home' },
  { src: '/images/alum-shutter-3.jpg', alt: 'Aluminium shutters close-up' },
  { src: '/images/alum-shutter-4.jpg', alt: 'Aluminium window shutters exterior' },
  { src: '/images/alum-shutter-5.jpg', alt: 'Aluminium shutters open position' },
  { src: '/images/alum-shutter-6.jpg', alt: 'Aluminium shutters on large windows' },
]

const FEATURES = [
  {
    icon: Shield,
    title: 'Rust & Corrosion Resistant',
    body: 'Aluminium will not rust — a significant advantage in Port Elizabeth\'s coastal environment. Your shutters will look and perform as intended for decades.',
  },
  {
    icon: Wind,
    title: 'Wind, Rain & Hail Resistant',
    body: 'Engineered to handle the Eastern Cape\'s weather extremes. Aluminium shutters flex without fracturing and remain structurally sound after impact.',
  },
  {
    icon: Star,
    title: 'Long-Term Value',
    body: 'While the upfront cost is higher than some alternatives, aluminium shutters are built to last a lifetime — making them the most cost-effective choice over the long term.',
  },
]

const HIGHLIGHTS = [
  'Will not rust or corrode',
  'Resistant to wind, rain and hail',
  'Lightweight yet very sturdy',
  'Various colour options available',
  'Suitable for windows and other openings',
  'Long-term investment that pays for itself',
]

export default function AluminiumShuttersPage() {
  return (
    <ProductPageLayout
      title="Aluminium Window Shutters"
      eyebrow="Aluminium Shutters"
      intro="Lightweight, rust-resistant aluminium shutters for windows and openings — built to withstand wind, rain and hail, combining lasting security with aesthetic appeal."
      heroImage="/images/alum-shutter-1.jpg"
      gallery={GALLERY}
      heroAlt="Aluminium window shutters Port Elizabeth"
      features={FEATURES}
      highlights={HIGHLIGHTS}
      ctaNote="Unsure whether aluminium shutters are right for your property? We'll assess your openings and recommend the best solution."
      metaTitle="Aluminium Window Shutters Port Elizabeth | Hi-Tech Doors"
      metaDescription="Lightweight, rust-resistant aluminium shutters for windows and openings in Port Elizabeth. Wind, rain and hail resistant. Built to last a lifetime. Supply and installation across the Eastern Cape."
    />
  )
}
