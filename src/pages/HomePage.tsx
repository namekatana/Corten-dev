import { Marquee } from '../components/Marquee/Marquee'
import { AboutSection } from '../sections/AboutSection'
import { BuildingSection } from '../sections/BuildingSection'
import { ContactSection } from '../sections/ContactSection'
import { HomeSection } from '../sections/HomeSection'
import { ProcessSection } from '../sections/ProcessSection'
import { ServicesSection } from '../sections/ServicesSection'
import { WorkSection } from '../sections/WorkSection'

export function HomePage() {
  return (
    <main>
      <HomeSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <BuildingSection />
      <ContactSection />
    </main>
  )
}
