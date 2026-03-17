"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, Play, MapPin, Award, Building, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, hasStarted])

  return <span>{count}{suffix}</span>
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/images/hero-bungalow.jpg"
          alt="Luxury Bungalow"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-background/60" />
      </motion.div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-32"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
            <Award className="w-4 h-4 text-primary" />
            <span 
              className="text-xs sm:text-sm tracking-wider text-primary uppercase"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Award-Winning Design 2024
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 text-balance leading-tight"
        >
          <span className="block">Luxury Bungalow</span>
          <span className="block text-primary glow-text">Living</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl mb-4 px-2"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Experience premium living spaces designed for comfort and elegance.
          Where architecture meets artistry in perfect harmony.
        </motion.p>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-2 text-muted-foreground mb-8"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span 
            className="text-sm"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Premium Location, Beverly Hills
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-8 py-6 glow group w-full sm:w-auto font-medium"
          >
            Schedule a Visit
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => setShowVideo(true)}
            className="border-primary/50 text-foreground hover:bg-primary/10 text-sm sm:text-base px-8 py-6 gap-3 group w-full sm:w-auto"
          >
            <motion.div
              className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Play className="w-4 h-4 ml-0.5 text-primary" />
            </motion.div>
            Virtual Tour
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
        >
          {[
            { value: 50, suffix: "+", label: "Luxury Units" },
            { value: 15, suffix: "K", label: "Sq. Ft. Each" },
            { value: 24, suffix: "/7", label: "Concierge" },
            { value: 98, suffix: "%", label: "Sold Out" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div 
                className="text-xs sm:text-sm text-muted-foreground tracking-wider mt-1"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <span 
          className="text-xs text-muted-foreground tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Discover More
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-6 w-24 h-24 border-l-2 border-t-2 border-primary/20 hidden lg:block" />
      <div className="absolute bottom-20 right-6 w-24 h-24 border-r-2 border-b-2 border-primary/20 hidden lg:block" />

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden glass"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Building className="w-16 h-16 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-center px-4" style={{ fontFamily: 'var(--font-inter)' }}>
                  Virtual tour video would play here
                </p>
                <p className="text-sm text-muted-foreground/60 mt-2">Connect your video URL for the full experience</p>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
