"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { BedDouble, Bath, Square, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const floorPlans = [
  {
    id: 1,
    name: "The Vista",
    type: "3 BHK Bungalow",
    area: "2,450 sq.ft.",
    bedrooms: 3,
    bathrooms: 3,
    price: "Starting from $850,000",
    image: "/images/floor-plan-1.jpg",
    features: ["Open Concept Living", "Private Garden", "Double-Height Ceiling", "Home Office"],
  },
  {
    id: 2,
    name: "The Grand",
    type: "4 BHK Bungalow",
    area: "3,200 sq.ft.",
    bedrooms: 4,
    bathrooms: 4,
    price: "Starting from $1,200,000",
    image: "/images/floor-plan-2.jpg",
    features: ["Master Suite with Walk-in", "Entertainment Room", "Terrace Garden", "Staff Quarters"],
  },
]

export function FloorPlansSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activePlan, setActivePlan] = useState(floorPlans[0])

  return (
    <section
      ref={containerRef}
      id="floor-plans"
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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
            Floor Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Choose Your <span className="text-primary">Perfect Home</span>
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Explore our thoughtfully designed floor plans, each crafted to maximize 
            space, natural light, and modern living comfort.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Plan Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {floorPlans.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ x: 10 }}
                onClick={() => setActivePlan(plan)}
                className={`glass p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activePlan.id === plan.id 
                    ? "border-primary/50 glow" 
                    : "border-transparent hover:border-primary/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif mb-1">{plan.name}</h3>
                    <p 
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {plan.type}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: activePlan.id === plan.id ? 90 : 0 }}
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>

                <div className="flex gap-6 mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BedDouble className="w-4 h-4 text-primary" />
                    {plan.bedrooms} Beds
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bath className="w-4 h-4 text-primary" />
                    {plan.bathrooms} Baths
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Square className="w-4 h-4 text-primary" />
                    {plan.area}
                  </div>
                </div>

                <p 
                  className="text-lg font-serif text-primary"
                >
                  {plan.price}
                </p>
              </motion.div>
            ))}

            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
              size="lg"
            >
              Schedule a Visit
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Floor Plan Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-4 sticky top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={activePlan.image}
                    alt={activePlan.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-serif mb-4">{activePlan.name} Features</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {activePlan.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
