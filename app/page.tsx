import { Header } from "@/components/header"
import { 
  HeroSection, 
  ProductDefinition, 
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
    <main className="min-h-screen bg-[#05000F]">
      <Header />
      <HeroSection />
      <ProductDefinition />
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
