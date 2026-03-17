"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Waves, 
  Trees, 
  Car, 
  Shield, 
  Dumbbell, 
  Wifi, 
  Zap, 
  Users 
} from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Infinity pool with temperature control and poolside lounge area",
    image: "/images/gallery-4.jpg",
  },
  {
    icon: Trees,
    title: "Garden Area",
    description: "Landscaped gardens with walking trails and meditation spaces",
    image: "/images/gallery-6.jpg",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Covered parking with EV charging stations for all residents",
    image: "/images/gallery-1.jpg",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV and smart access control",
    image: "/images/gallery-2.jpg",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with personal training services",
    image: "/images/gallery-3.jpg",
  },
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Integrated IoT systems for lighting, climate, and security",
    image: "/images/gallery-5.jpg",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "100% power backup with solar panel integration",
    image: "/images/gallery-1.jpg",
  },
  {
    icon: Users,
    title: "Clubhouse",
    description: "Exclusive clubhouse with entertainment and event spaces",
    image: "/images/gallery-2.jpg",
  },
]

export function AmenitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={containerRef}
      id="amenities"
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
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
            World-Class Amenities
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Elevate Your <span className="text-primary">Lifestyle</span>
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Every amenity has been thoughtfully designed to enhance your 
            living experience, offering comfort, convenience, and luxury at every turn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                className="glass rounded-xl p-6 h-full relative overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <amenity.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 text-lg font-serif mb-2 group-hover:text-primary transition-colors">
                  {amenity.title}
                </h3>
                <p 
                  className="relative z-10 text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {amenity.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rotate-45 group-hover:bg-primary/10 transition-colors" />
                </div>

                {/* Bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
