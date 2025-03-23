import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { StatisticsSection } from '@/components/StatisticsSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ComplianceSection } from '@/components/ComplianceSection'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatisticsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ComplianceSection />
      </main>
      <Footer />
    </div>
  )
}

