'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'

interface ServiceGalleryWithVideoProps {
  video: {
    src: string
    poster: string
    alt: string
    title: string
  }
  images: string[]
}

export function ServiceGalleryWithVideo({ video, images }: ServiceGalleryWithVideoProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Create gallery items array with video first, then images
  const galleryItems = [
    {
      id: 0,
      type: 'video' as const,
      src: video.src,
      poster: video.poster,
      alt: video.alt,
      title: video.title,
    },
    ...images.map((src, idx) => ({
      id: idx + 1,
      type: 'image' as const,
      src,
      alt: `Gallery image ${idx + 1}`,
    })),
  ]

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
    <section className="relative py-24 lg:py-32 bg-card">
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
            Gallery
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl">
            Experience the space
          </h2>
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
              src={video.poster}
              alt={video.alt}
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
                {video.title}
              </span>
            </div>
          </motion.div>

          {/* Small image boxes */}
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.05 }}
              className="relative overflow-hidden rounded-xl lg:rounded-2xl cursor-pointer group aspect-square"
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
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
                <div className="relative aspect-square md:aspect-video">
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
