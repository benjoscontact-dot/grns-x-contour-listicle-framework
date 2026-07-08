import PromoBanner from '@/components/sections/PromoBanner'
import SiteHeader from '@/components/sections/SiteHeader'
import HeroSection from '@/components/sections/HeroSection'
import BenefitSections from '@/components/sections/BenefitSections'
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

      {/* 3. Hero: headline + social proof pill + CTA | product image + benefit sidebar */}
      <HeroSection />

      {/* 4. Numbered benefit sections ×6 — alternating image/text */}
      <BenefitSections />

      {/* 5. Product purchase block with variants + pricing tiers */}
      <ProductBlock />

      {/* 6. Trust & guarantee strip */}
      <TrustStrip />

      {/* 7. Customer testimonials grid */}
      <Testimonials />

      {/* 8. Final closing CTA */}
      <FinalCTA />
    </div>
  )
}

export default Index
