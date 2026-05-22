import { Header } from "@/components/header"
import { 
  HeroSection, 
  ProductDefinition, 
  ImBetaSection,
  ResourcesSection,
  MechanismSection, 
  PainPointsSection, 
  ScenariosSection, 
  SecuritySection, 
  RoadmapSection, 
  CTASection 
} from "@/components/sections"
import { MediaMentions } from "@/components/media-mentions"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductDefinition />
      <ImBetaSection />
      <ResourcesSection />
      <MechanismSection />
      <PainPointsSection />
      <ScenariosSection />
      <SecuritySection />
      <MediaMentions />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  )
}
