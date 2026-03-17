"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Michael Richardson",
    role: "Business Executive",
    image: "/images/gallery-1.jpg",
    rating: 5,
    text: "The attention to detail in our bungalow is extraordinary. From the imported Italian marble to the smart home integration, every aspect exceeds our expectations. This isn't just a house, it's a statement of success.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Interior Designer",
    image: "/images/gallery-2.jpg",
    rating: 5,
    text: "As someone who works in design, I'm incredibly impressed by the craftsmanship and quality of materials used. The developers truly understand luxury living and have created spaces that are both beautiful and functional.",
  },
  {
    id: 3,
    name: "David & Emma Thompson",
    role: "Property Investors",
    image: "/images/gallery-3.jpg",
    rating: 5,
    text: "We've invested in multiple luxury properties, but this development stands out. The ROI potential combined with the quality of life it offers makes it an exceptional investment. Highly recommended.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Tech Entrepreneur",
    image: "/images/gallery-4.jpg",
    rating: 5,
    text: "After touring countless properties, we found our forever home here. The privacy, security, and amenities create the perfect sanctuary for our family. The team made the entire process seamless.",
  },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-32 h-32 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span 
            className="text-sm tracking-[0.3em] text-primary uppercase mb-4 block"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            What Our <span className="text-primary">Residents</span> Say
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Discover why discerning homeowners choose our luxury bungalows 
            for their families.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="pt-4"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote 
                  className="text-lg md:text-2xl leading-relaxed mb-8 text-foreground/90"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-serif">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-serif text-lg">{testimonials[currentIndex].name}</div>
                    <div 
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "w-8 bg-primary" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            "Featured in Architectural Digest",
            "Forbes Top 50 Developers",
            "RERA Certified",
            "ISO 9001:2015",
          ].map((badge, index) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-muted-foreground"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <span className="text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
