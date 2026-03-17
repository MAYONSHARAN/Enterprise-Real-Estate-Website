"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar - Desktop */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-500 ${
          isScrolled ? "opacity-0 -translate-y-full" : "opacity-100"
        }`}
      >
        <div className="bg-secondary/50 backdrop-blur-sm border-b border-border/30">
          <div className="container mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-primary" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-primary" />
                <span>123 Premium Avenue, Elite District</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-primary" />
                <span>Mon - Sat: 10AM - 7PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-primary font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                RERA Registered
              </span>
              <div className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                Premium Developer Since 2008
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "top-0 glass-strong py-3" 
            : "top-0 lg:top-10 bg-transparent py-4 lg:py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#hero")
            }}
            className="text-lg sm:text-xl md:text-2xl font-serif tracking-wider text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-primary">LUXE</span>
            <span className="font-light">BUNGALOW</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`text-sm tracking-wide transition-colors relative py-2 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 glow"
            >
              <Phone className="w-4 h-4" />
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground glass rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 glass-strong lg:hidden"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-serif">
                    <span className="text-primary">LUXE</span>
                    <span className="font-light">BUNGALOW</span>
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`text-lg font-serif py-3 px-4 rounded-lg transition-colors ${
                        activeSection === item.href.replace("#", "")
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="pt-6 border-t border-border space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+1 (234) 567-890</span>
                  </div>
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-primary text-primary-foreground gap-2"
                    size="lg"
                  >
                    <Phone className="w-5 h-5" />
                    Book Site Visit
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
