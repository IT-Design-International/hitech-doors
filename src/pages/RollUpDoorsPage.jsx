import { RotateCcw, Ruler, Palette } from 'lucide-react'
import ProductPageLayout from '../components/ProductPageLayout'

const GALLERY = [
  { src: '/images/rollup-door.jpg', alt: 'Roll-up garage door installation Port Elizabeth' },
]

const FEATURES = [
  {
    icon: RotateCcw,
    title: 'Space-Saving Design',
    body: 'Roll-up doors coil neatly above the opening, maximising ceiling space inside your garage — ideal for properties where a sectional door\'s swing arc won\'t work.',
  },
  {
    icon: Ruler,
    title: 'Standard & Custom Sizes',
    body: 'Available in standard sizes for straightforward replacements, or manufactured to non-standard dimensions for openings that fall outside normal ranges.',
  },
  {
    icon: Palette,
    title: 'Range of Colours',
    body: 'Choose from a variety of colour options to complement your property\'s exterior. Stocked from Laziman Deluxe and Wespeco — names we trust.',
  },
]

const HIGHLIGHTS = [
  'Laziman Deluxe and Wespeco doors stocked',
  'Standard and non-standard (custom) sizes',
  'Multiple colour options available',
  'Suitable for residential and light commercial',
  'Automation compatible',
  'Installed and serviced by our own team',
]

export default function RollUpDoorsPage() {
  return (
    <ProductPageLayout
      title="Roll-Up Garage Doors"
      eyebrow="Roll-Up Doors"
      intro="Compact, space-saving roll-up garage doors for homes and light commercial properties — available in standard and custom sizes from trusted manufacturers."
      heroImage="/images/rollup-door.jpg"
      gallery={GALLERY}
      heroAlt="Roll-up garage door installation Port Elizabeth"
      features={FEATURES}
      highlights={HIGHLIGHTS}
      ctaNote="Need an unusual size or have a tight ceiling clearance? We manufacture custom roll-up doors — contact us for a measurement visit."
      metaTitle="Roll-Up Garage Doors, Port Elizabeth | Hi-Tech Doors"
      metaDescription="Space-saving roll-up garage doors for homes and light commercial in Port Elizabeth. Standard and custom sizes — supply, install and repairs. Free quote."
    />
  )
}
