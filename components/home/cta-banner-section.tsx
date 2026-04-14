'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CtaBannerSection() {
  return (
    <section
      id="cta-banner"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cta-background.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark copper overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFC387]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-copper/20 rounded-full text-copper text-sm font-medium mb-6">
            Membership by Invitation Only
          </span>
          <h2 className="font-serif text-4xl font-normal text-white sm:text-5xl lg:text-6xl text-balance">
            Ready to experience the{' '}
            <span className="text-copper">1%</span>?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Our red carpet membership awaits those who seek more than ordinary. 
            Schedule a private tour and discover what it means to be part of an exclusive circle.
          </p>
          <div className="mt-10">
            <Link href="/membership#form">
              <Button
                size="lg"
                className="h-16 px-10 text-lg bg-[#960808] hover:bg-[#7a0606] text-white shimmer"
              >
                Book Your Red Carpet Tour
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Limited memberships available. Apply today.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-copper/30 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-copper/30 to-transparent" />
    </section>
  )
}
