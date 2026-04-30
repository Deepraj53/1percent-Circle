'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GLSLHills } from '@/components/ui/glsl-hills'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* GLSL Hills Animation */}
      <div className="absolute inset-0 z-[5]">
        <GLSLHills speed={0.3} cameraZ={140} />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[6] bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-copper"
          >
            Bangalore&apos;s Most Exclusive Wellness Destination
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            Smaller the circle,{' '}
            <span className="text-copper">higher the standards.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white sm:text-xl"
          >
            Where premium fitness, gourmet nutrition, and luxury spa converge under one curated roof. 
            Designed exclusively for those who expect nothing less than extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/membership">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-[#960808] hover:bg-[#7a0606] text-white shimmer"
              >
                Explore Membership
              </Button>
            </Link>
            <Link href="#experience">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-copper text-copper hover:bg-copper/10 bg-transparent"
              >
                Take a Virtual Tour
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-copper transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </section>
  )
}
