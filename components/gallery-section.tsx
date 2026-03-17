"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Luxury Living Room",
    title: "Living Spaces",
    size: "large",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Master Bedroom",
    title: "Master Suite",
    size: "small",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Modern Kitchen",
    title: "Gourmet Kitchen",
    size: "small",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Swimming Pool",
    title: "Infinity Pool",
    size: "large",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Spa Bathroom",
    title: "Spa Retreat",
    size: "small",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Garden View",
    title: "Landscaped Gardens",
    size: "small",
  },
]

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section
      ref={containerRef}
      id="gallery"
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
            Visual Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Discover the <span className="text-primary">Beauty</span>
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Explore our curated collection of stunning interiors and exteriors, 
            showcasing the exceptional craftsmanship of our luxury bungalows.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                image.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center mb-3"
                  >
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">{image.title}</span>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
