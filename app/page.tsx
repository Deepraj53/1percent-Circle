import { HeroSection } from '@/components/home/hero-section'
import { FeaturedInSection } from '@/components/home/featured-in-section'
import { AboutSection } from '@/components/home/about-section'
import { ServicesSection } from '@/components/home/services-section'
import { ExperienceSection } from '@/components/home/experience-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CtaBannerSection } from '@/components/home/cta-banner-section'
import { MembershipFormSection } from '@/components/home/membership-form-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedInSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CtaBannerSection />
      <MembershipFormSection />
    </main>
  )
}
