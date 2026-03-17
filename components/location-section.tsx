"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock, Car, Train, Plane } from "lucide-react"

const nearbyPlaces = [
  { icon: Car, place: "City Center", distance: "15 mins" },
  { icon: Train, place: "Metro Station", distance: "5 mins" },
  { icon: Plane, place: "International Airport", distance: "30 mins" },
  { icon: MapPin, place: "Shopping Mall", distance: "10 mins" },
]

export function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      id="location"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
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
            Prime Location
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Perfectly <span className="text-primary">Positioned</span>
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Located in a serene neighborhood with excellent connectivity to 
            all major city landmarks, schools, hospitals, and entertainment hubs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl overflow-hidden h-[400px] md:h-[500px] relative">
              {/* Styled Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890!2d-73.9876543!3d40.7580419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI5LjAiTiA3M8KwNTknMTUuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location"
              />
              
              {/* Map overlay with location pin */}
              <div className="absolute top-4 left-4 glass rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-sm">Luxury Bungalow Project</p>
                    <p 
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      123 Premium Avenue, Elite District
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nearby Places */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif mb-6">Nearby Landmarks</h3>
            
            {nearbyPlaces.map((item, index) => (
              <motion.div
                key={item.place}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass rounded-xl p-4 flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-serif">{item.place}</p>
                  <div 
                    className="flex items-center gap-1 text-sm text-muted-foreground"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <Clock className="w-3 h-3" />
                    {item.distance}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="glass rounded-xl p-6 mt-6">
              <h4 className="font-serif mb-3">Site Address</h4>
              <p 
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                123 Premium Avenue,<br />
                Elite District, Luxury City,<br />
                State 12345
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p 
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span className="text-primary">Office Hours:</span><br />
                  Mon - Sat: 10:00 AM - 7:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
