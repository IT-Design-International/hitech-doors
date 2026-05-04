import { Cpu, DoorOpen, Wrench } from 'lucide-react'
import ProductPageLayout from '../components/ProductPageLayout'

const GALLERY = [
  { src: '/images/automation-motor.jpg', alt: 'Garage door automation motor installation' },
  { src: '/images/automation-remote.jpg', alt: 'Automation remote control unit' },
]

const FEATURES = [
  {
    icon: Cpu,
    title: 'Leading Automation Brands',
    body: 'We are agents for Hydro Doors, DigidoorIII, Gemini, Superdrive, ET Systems and Slimdrive — a comprehensive range of proven, reliable automation systems.',
  },
  {
    icon: DoorOpen,
    title: 'Compatible with All Door Types',
    body: 'Our automation solutions work with both roll-up and sectional doors. Whether you\'re automating a new installation or retrofitting an existing door, we have a solution.',
  },
  {
    icon: Wrench,
    title: 'Installation & After-Sales',
    body: 'Every automation installation is completed by our own experienced team. We also service and repair existing automation systems across Port Elizabeth and surrounds.',
  },
]

const HIGHLIGHTS = [
  'Hydro Doors automation systems',
  'DigidoorIII range',
  'Gemini and Superdrive',
  'ET Systems and Slimdrive',
  'Compatible with roll-up and sectional doors',
  'Retrofitting of existing doors available',
]

export default function AutomationPage() {
  return (
    <ProductPageLayout
      title="Door & Gate Automation"
      eyebrow="Automation"
      intro="Full garage and gate automation solutions for both residential and commercial properties — compatible with roll-up and sectional doors, using leading automation brands."
      heroImage="/images/automation-motor.jpg"
      gallery={GALLERY}
      heroAlt="Automated garage door and gate Port Elizabeth"
      features={FEATURES}
      highlights={HIGHLIGHTS}
      ctaNote="Want to automate an existing door? We can assess your current installation and recommend the right automation system."
      metaTitle="Garage Door & Gate Automation Port Elizabeth | Hi-Tech Doors"
      metaDescription="Garage door and gate automation for residential and commercial properties in Port Elizabeth. Hydro Doors, DigidoorIII, Gemini, Superdrive, ET Systems and Slimdrive. Installation and after-sales service."
    />
  )
}
