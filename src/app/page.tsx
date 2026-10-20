import { AboutSection } from '@/components/sections/about-section'
import { ClosingSection } from '@/components/sections/closing-section'
import { EcosystemSection } from '@/components/sections/ecosystem-section'
import { HeroSection } from '@/components/sections/hero-section'
import { MasterclassSection } from '@/components/sections/masterclass-section'
import { MethodSection } from '@/components/sections/method-section'
import { PathsSection } from '@/components/sections/paths-section'
import { StoriesSection } from '@/components/sections/stories-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PathsSection />
      <MethodSection />
      <StoriesSection />
      <AboutSection />
      <EcosystemSection />
      <MasterclassSection />
      <ClosingSection />
    </main>
  )
}
