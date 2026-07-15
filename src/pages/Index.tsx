import PromoBanner from '@/components/sections/PromoBanner'
import SiteHeader from '@/components/sections/SiteHeader'
import HeroSection from '@/components/sections/HeroSection'
import BenefitSections from '@/components/sections/BenefitSections'
import HowItWorks from '@/components/sections/HowItWorks'
import ComparisonTable from '@/components/sections/ComparisonTable'
import ProductBlock from '@/components/sections/ProductBlock'
import TrustStrip from '@/components/sections/TrustStrip'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* 1. Promo countdown banner */}
      <PromoBanner />

      {/* 2. Minimal logo header */}
      <SiteHeader />

      {/* 3. Hero */}
      <HeroSection />

      {/* 4. 6 Numbered barrier sections */}
      <BenefitSections />

      {/* 5. How It Works — 3-step mechanism */}
      <HowItWorks />

      {/* 7. Barrier ↔ Solution comparison table */}
      <ComparisonTable />

      {/* 8. Product purchase block */}
      <ProductBlock />

      {/* 9. Trust & guarantee strip */}
      <TrustStrip />

      {/* 10. Customer testimonials */}
      <Testimonials />

      {/* 11. Final closing CTA */}
      <FinalCTA />
    </div>
  )
}

export default Index
