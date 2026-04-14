'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  tagline: string
  eyebrow: string
  videoSrc?: string
  posterSrc: string
  logo?: string
}

export function ServiceHero({
  title,
  tagline,
  eyebrow,
  videoSrc,
  posterSrc,
  logo,
}: ServiceHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  const scrollToContent = () => {
    const overviewSection = document.getElementById('overview')
    overviewSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={posterSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        {/* Copper tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC387]/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Image
                src={logo}
                alt={title}
                width={216}
                height={76}
                className="h-[76px] w-auto mx-auto invert"
                style={{ width: 'auto' }}
              />
            </motion.div>
          )}

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-copper"
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl font-normal text-white sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-serif text-xl text-white/80 italic sm:text-2xl"
          >
            {tagline}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-copper transition-colors"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
