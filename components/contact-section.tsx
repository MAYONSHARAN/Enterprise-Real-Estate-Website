"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Phone, Mail, MessageCircle, CheckCircle, MapPin, Clock, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", budget: "", message: "" })
    }, 3000)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in the Luxury Bungalow project. Please share more details.")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Begin Your <span className="text-primary">Journey</span>
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Our dedicated team is ready to guide you through every step of acquiring 
            your dream luxury bungalow. Reach out today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif">Schedule a Site Visit</h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                    Experience luxury firsthand
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="text-sm text-muted-foreground mb-2 block"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  <div>
                    <label 
                      className="text-sm text-muted-foreground mb-2 block"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="text-sm text-muted-foreground mb-2 block"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                    />
                  </div>
                  <div>
                    <label 
                      className="text-sm text-muted-foreground mb-2 block"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-12 px-3 rounded-md bg-secondary/50 border border-border/50 focus:border-primary text-foreground"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <option value="">Select budget</option>
                      <option value="800k-1m">$800K - $1M</option>
                      <option value="1m-1.5m">$1M - $1.5M</option>
                      <option value="1.5m-2m">$1.5M - $2M</option>
                      <option value="2m+">$2M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    className="text-sm text-muted-foreground mb-2 block"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements, preferred configuration, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 glow h-12"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Request Received!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Request Callback
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={openWhatsApp}
                    className="flex-1 border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 h-12"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </form>

              <p 
                className="text-xs text-muted-foreground text-center mt-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                By submitting, you agree to our privacy policy. We respect your data.
              </p>
            </div>
          </motion.div>

          {/* Contact Info - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact Cards */}
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass rounded-xl p-6 flex items-center gap-4 cursor-pointer group block"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p 
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Sales Hotline
                </p>
                <p className="text-xl font-serif group-hover:text-primary transition-colors">+1 (234) 567-890</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:sales@luxebungalow.com"
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass rounded-xl p-6 flex items-center gap-4 cursor-pointer group block"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p 
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Email Us
                </p>
                <p className="text-lg font-serif group-hover:text-primary transition-colors">sales@luxebungalow.com</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass rounded-xl p-6 flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p 
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Sales Gallery
                </p>
                <p className="text-base font-serif">Beverly Hills, CA 90210</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass rounded-xl p-6 flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p 
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Working Hours
                </p>
                <p className="text-base font-serif">Mon - Sat: 9AM - 7PM</p>
              </div>
            </motion.div>

            {/* Trust Section */}
            <div className="glass rounded-xl p-6 mt-6">
              <h4 className="font-serif text-lg mb-4">Our Commitment</h4>
              <div className="space-y-3" style={{ fontFamily: 'var(--font-inter)' }}>
                {[
                  "RERA Registered Project",
                  "100% Transparent Pricing",
                  "Quality Assured Construction",
                  "On-time Possession Guarantee",
                  "Post-sales Support for Life",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
