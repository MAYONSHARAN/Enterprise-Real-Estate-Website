"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Linkedin, Youtube, ArrowUp, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Project", href: "#about" },
      { label: "Amenities", href: "#amenities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Floor Plans", href: "#floor-plans" },
      { label: "Pricing", href: "#pricing" },
      { label: "Location", href: "#location" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "RERA Certificate", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Site Map", href: "#" },
    ],
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg glow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <a href="#hero" className="text-2xl font-serif tracking-wider inline-block mb-4">
              <span className="text-primary">LUXE</span>
              <span className="font-light">BUNGALOW</span>
            </a>
            <p 
              className="text-muted-foreground mb-6 max-w-md leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Experience the pinnacle of luxury living with our thoughtfully 
              designed bungalows. Where every detail speaks of elegance 
              and every moment feels like home.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-serif mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-secondary/50 border-border/50"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Get exclusive updates on new launches and offers
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="font-serif text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-inter)' }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4" style={{ fontFamily: 'var(--font-inter)' }}>
              <li>
                <a href="tel:+1234567890" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@luxebungalow.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>sales@luxebungalow.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>123 Luxury Lane<br />Beverly Hills, CA 90210</span>
                </div>
              </li>
            </ul>

            {/* Office Hours */}
            <div className="mt-6 p-4 rounded-lg bg-secondary/30">
              <p className="text-xs text-muted-foreground mb-1">Sales Office Hours</p>
              <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-b border-border/50 mb-8">
          {["RERA Registered", "ISO 9001:2015", "Green Building Certified", "CREDAI Member"].map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <span className="text-xs" style={{ fontFamily: 'var(--font-inter)' }}>{cert}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm text-muted-foreground text-center md:text-left"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            © {new Date().getFullYear()} LuxeBungalow. All rights reserved. Crafted with excellence.
          </p>
          <div className="flex items-center gap-4">
            <p 
              className="text-sm text-muted-foreground"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              RERA No: RERA/2024/0012345
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
