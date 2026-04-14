'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CrossLinkService {
  name: string
  tagline: string
  href: string
  eyebrow: string
}

interface ServiceCrossLinksProps {
  services: CrossLinkService[]
}

export function ServiceCrossLinks({ services }: ServiceCrossLinksProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Complete Your Experience
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl">
            Explore our other pillars
          </h2>
        </motion.div>

        {/* Cross Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-copper/30 card-hover">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-copper">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-normal text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-muted-foreground italic">
                    {service.tagline}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-copper">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
