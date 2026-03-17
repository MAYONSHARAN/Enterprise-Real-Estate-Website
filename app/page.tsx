"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { GallerySection } from "@/components/gallery-section"
import { FloorPlansSection } from "@/components/floor-plans-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function LuxuryBungalowPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <GallerySection />
      <FloorPlansSection />
      <TestimonialsSection />
      <PricingSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
