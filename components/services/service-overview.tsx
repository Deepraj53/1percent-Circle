'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceOverviewProps {
  title: string
  description: string
  features: {
    label: string
    description: string
  }[]
  imageSrc: string
}

export function ServiceOverview({
  title,
  description,
  features,
  imageSrc,
}: ServiceOverviewProps) {
  return (
    <section
      id="overview"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:rounded-3xl">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -inset-4 rounded-2xl lg:rounded-3xl border border-copper/10 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-copper">
              Overview
            </span>
            <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.label} className="space-y-1">
                  <p className="font-serif text-2xl font-normal text-copper">
                    {feature.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
