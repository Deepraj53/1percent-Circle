'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const pressLogos = [
  { name: 'Times of India', logo: '/logos/times-of-india.svg' },
  { name: 'Vogue India', logo: '/logos/vogue-india.svg' },
  { name: 'Economic Times', logo: '/logos/economic-times.svg' },
]

export function FeaturedInSection() {
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {pressLogos.map((press) => (
              <div
                key={press.name}
                className="h-14 w-48 relative group transition-all cursor-pointer"
              >
                <Image
                  src={press.logo}
                  alt={press.name}
                  fill
                  className="object-contain brightness-0 dark:invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
