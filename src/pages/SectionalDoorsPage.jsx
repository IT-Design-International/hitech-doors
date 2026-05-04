import { LayoutGrid, TreePine, Layers } from 'lucide-react'
import ProductPageLayout from '../components/ProductPageLayout'

const GALLERY = [
  { src: '/images/sectional-alu-lux-zinc.jpg', alt: 'Aluminium Alu-Lux zinc sectional door' },
  { src: '/images/sectional-door-colours.jpg', alt: 'Aluminium door colour range' },
  { src: '/images/sectional-door-20-panel.jpg', alt: 'Aluminium 20-panel sectional door' },
  { src: '/images/sectional-door-10-panel.jpg', alt: 'Aluminium 10-panel sectional door' },
  { src: '/images/sectional-door-raised-field.jpg', alt: 'Alu-Lux zinc raised-and-field door' },
  { src: '/images/sectional-timber-brick.jpg', alt: 'Timber brick-style sectional door' },
  { src: '/images/sectional-timber-tuscan.jpg', alt: 'Tuscan timber sectional door' },
  { src: '/images/sectional-door-slatted.jpg', alt: 'Slatted sectional door' },
]

const FEATURES = [
  {
    icon: LayoutGrid,
    title: 'Aluminium Alu-Lux Zinc',
    body: 'Lightweight, rust-resistant and built to last. The Alu-Lux zinc range offers a modern aesthetic with exceptional durability against the coastal Port Elizabeth climate.',
  },
  {
    icon: TreePine,
    title: 'Timber Range',
    body: 'Classic warmth and character. Available in 10, 20 and 30 panel configurations plus the Tuscan style — each crafted to complement both modern and traditional architecture.',
  },
  {
    icon: Layers,
    title: 'Steel Panel & Glass Fibre',
    body: 'Robust steel panel doors for strength and security, or lightweight glass fibre options that replicate the look of timber without the maintenance.',
  },
]

const HIGHLIGHTS = [
  'Standard and custom (non-standard) sizes available',
  'Wide range of colours and finishes',
  'Residential and commercial applications',
  'Installed by our own dedicated team',
  'After-sales service and repairs included',
  'Sourced from trusted brands: Timbercon, Superdoors, Wispeco',
]

export default function SectionalDoorsPage() {
  return (
    <ProductPageLayout
      title="Sectional Garage Doors"
      eyebrow="Sectional Doors"
      intro="Premium sectional garage doors for homes and businesses across Port Elizabeth — available in aluminium, timber, steel panel and glass fibre, in a wide range of colours and finishes."
      heroImage="/images/sectional-alu-lux-zinc.jpg"
      gallery={GALLERY}
      heroAlt="Sectional garage door installation Port Elizabeth"
      features={FEATURES}
      highlights={HIGHLIGHTS}
      ctaNote="Not sure which door suits your opening? Call us — we'll advise on the right product for your space and budget."
      metaTitle="Sectional Garage Doors Port Elizabeth | Hi-Tech Doors"
      metaDescription="Premium sectional garage doors for homes and businesses across Port Elizabeth. Aluminium Alu-Lux zinc, timber, steel panel and glass fibre. Supply, install and after-sales service."
    />
  )
}
