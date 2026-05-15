import { Helmet } from 'react-helmet-async'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import QuickContact from '../components/QuickContact'
import WhyUs from '../components/WhyUs'
import About from '../components/About'
import Services from '../components/Services'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Hi-Tech Doors | Garage Doors &amp; Automation, Port Elizabeth</title>
        <meta name="description" content="Sectional, roll-up and industrial garage doors plus automation in Port Elizabeth. PE specialists since 1997 — supply, install and repairs. Free quote." />
      </Helmet>

      <NavBar />

      <main>
        <Hero />
        <QuickContact />
        <WhyUs />
        <About />
        <Services />
        <Brands />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
