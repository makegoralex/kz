import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import GeographySection from './sections/GeographySection'
import PartnersSection from './sections/PartnersSection'
import ServicesSection from './sections/ServicesSection'
import AdvantagesSection from './sections/AdvantagesSection'
import ProcessSection from './sections/ProcessSection'
import CTASection from './sections/CTASection'
import ContactsSection from './sections/ContactsSection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GeographySection />
        <PartnersSection />
        <ServicesSection />
        <AdvantagesSection />
        <ProcessSection />
        <CTASection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  )
}
