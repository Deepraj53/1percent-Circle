'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const galleryItems = [
  {
    id: 1,
    type: 'video',
    src: '/Virtual tour.mp4',
    poster: '/video-capture-t0004.48seg-1281.png',
    alt: 'Virtual tour of 1% Circle premises',
    title: 'Virtual Tour',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/gallery/step-inside-food.jpg',
    alt: 'Gourmet pasta dish from the 1% Circle kitchen',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/gallery/step-inside-cardio.jpg',
    alt: 'Cardio floor with treadmills overlooking a stunning sunset',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/gallery/step-inside-salon.jpg',
    alt: 'Luxury grooming salon with marble floors and round mirrors',
  },
  {
    id: 5,
    type: 'image',
    src: '/images/1percent-training.jpg',
    alt: 'Personal training session at 1% Circle gym',
  },
]

export function ExperienceSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Step Inside
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl">
            A space designed for the extraordinary
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Every corner of 1% Circle tells a story of meticulous craftsmanship 
            and thoughtful design. Take a glimpse into your future sanctuary.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {/* Large Video Box - Top spanning 2 columns and 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer group aspect-video md:aspect-auto md:h-full min-h-[300px] md:min-h-[420px]"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={galleryItems[0].poster || galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Video play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 rounded-full bg-copper/90 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-copper">
                <Play className="h-8 w-8 text-black fill-black ml-1" />
              </div>
            </div>
            {/* Video label */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                Virtual Tour
              </span>
            </div>
          </motion.div>

          {/* Small image boxes */}
          {galleryItems.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.05 }}
              className="relative overflow-hidden rounded-xl lg:rounded-2xl cursor-pointer group aspect-square"
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 md:left-8 p-2 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 md:right-8 p-2 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Image/Video container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems[currentIndex].type === 'image' ? (
                <div className="relative aspect-video">
                  <Image
                    src={galleryItems[currentIndex].src}
                    alt={galleryItems[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <video
                  src={galleryItems[currentIndex].src}
                  poster={galleryItems[currentIndex].poster}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-lg"
                />
              )}
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
