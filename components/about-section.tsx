"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Home, Leaf, Shield, Star, TrendingUp, Users, Building2 } from "lucide-react"
import Image from "next/image"

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, isInView])

  return <span ref={ref}>{count}{suffix}</span>
}

const features = [
  {
    icon: Home,
    title: "Premium Design",
    description: "Thoughtfully crafted interiors with imported marble, hardwood floors, and designer fixtures",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "LEED certified with solar panels, rainwater harvesting, and energy-efficient systems",
  },
  {
    icon: Shield,
    title: "Smart Security",
    description: "Biometric access, 24/7 surveillance, and integrated smart home security systems",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by Architectural Digest for excellence in luxury residential design",
  },
]

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", icon: TrendingUp },
  { value: 200, suffix: "+", label: "Projects Delivered", icon: Building2 },
  { value: 5000, suffix: "+", label: "Happy Families", icon: Users },
  { value: 4.9, suffix: "", label: "Client Rating", icon: Star },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span 
            className="text-sm tracking-[0.3em] text-primary uppercase mb-4 block"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Crafting Dreams Into
            <span className="text-primary block">Reality Since 2009</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Nestled in the heart of nature, our exclusive bungalow project 
              redefines luxury living. Each residence is a masterpiece of 
              contemporary architecture, designed to harmonize with its 
              natural surroundings while offering unparalleled comfort.
            </p>
            
            <p 
              className="text-muted-foreground mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              With meticulous attention to detail and a commitment to 
              excellence, we have created living spaces that inspire and 
              elevate everyday life. Our team of world-class architects and 
              designers work tirelessly to ensure every corner of your home 
              reflects sophistication and timeless elegance.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-5 group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-primary">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div 
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery-1.jpg"
                alt="Luxury Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                        <span className="text-xs text-primary font-medium">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium">Join 5000+ families</div>
                    <div className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                      Who trust us with their dream home
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="glass p-6 rounded-xl group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p 
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
