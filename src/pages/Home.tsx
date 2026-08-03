import { useEffect } from 'react'
import HeroSection from '@/components/home/HeroSection'
import DestinationsCarousel from '@/components/home/DestinationsCarousel'
import ServicesSection from '@/components/home/ServicesSection'
import FeaturedPackages from '@/components/home/FeaturedPackages'
import NewsletterContact from '@/components/home/NewsletterContact'

export default function Home() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      <HeroSection />
      <DestinationsCarousel />
      <ServicesSection />
      <FeaturedPackages />
      <NewsletterContact /> 
    </div>
  )
}
