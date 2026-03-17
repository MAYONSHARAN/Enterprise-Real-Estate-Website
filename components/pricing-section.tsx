"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Sparkles, TrendingUp, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Elite",
    size: "3,500 Sq. Ft.",
    price: "$850K",
    beds: "3 BHK",
    featured: false,
    features: [
      "Private Garden (1,200 sq.ft)",
      "Smart Home Integration",
      "Premium Modular Kitchen",
      "Covered Parking (2 Cars)",
      "Club Membership",
      "5-Year Maintenance Free",
    ],
  },
  {
    name: "Prestige",
    size: "4,800 Sq. Ft.",
    price: "$1.2M",
    beds: "4 BHK",
    featured: true,
    features: [
      "Private Pool + Garden",
      "Full Smart Home Suite",
      "Italian Kitchen with Island",
      "Covered Parking (3 Cars)",
      "Premium Club Membership",
      "7-Year Maintenance Free",
      "Private Gym Space",
      "Home Theater Room",
    ],
  },
  {
    name: "Imperial",
    size: "6,500 Sq. Ft.",
    price: "$1.8M",
    beds: "5 BHK",
    featured: false,
    features: [
      "Infinity Pool + Landscape",
      "Complete Smart Automation",
      "Chef's Kitchen + Pantry",
      "Covered Parking (4 Cars)",
      "Lifetime Club Membership",
      "10-Year Maintenance Free",
      "Private Gym + Spa",
      "Cinema Room",
      "Wine Cellar",
      "Rooftop Terrace",
    ],
  },
]

const benefits = [
  { icon: TrendingUp, title: "High ROI", description: "15-20% expected appreciation" },
  { icon: Shield, title: "Secure Investment", description: "RERA registered project" },
  { icon: Clock, title: "Flexible Payment", description: "40:30:30 payment plan" },
]

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
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
            Investment Options
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Choose Your <span className="text-primary">Dream Home</span>
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Three exclusive configurations designed to match your lifestyle. 
            Each unit is a masterpiece of modern architecture.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div 
                className={`h-full rounded-2xl p-8 transition-all duration-500 ${
                  plan.featured 
                    ? 'glass border-primary/30 shadow-lg shadow-primary/10' 
                    : 'glass hover:border-primary/20'
                }`}
              >
                {/* Header */}
                <div className="text-center mb-6 pb-6 border-b border-border/30">
                  <h3 className="text-xl font-serif mb-1">{plan.name}</h3>
                  <p 
                    className="text-sm text-muted-foreground mb-4"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {plan.beds} • {plan.size}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-serif text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">onwards</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="flex items-start gap-3 text-sm"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 glow' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  size="lg"
                >
                  Request Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="flex items-center gap-4 text-center sm:text-left justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-serif">{benefit.title}</div>
                  <div 
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-8"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          * Prices are indicative and subject to change. Contact us for the latest pricing and availability.
        </motion.p>
      </div>
    </section>
  )
}
