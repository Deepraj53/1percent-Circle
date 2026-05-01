'use client'

import { motion } from 'framer-motion'

const pressOutlets = [
  {
    name: 'The Style World',
    url: 'https://www.thestyle.world/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-holistic-wellness/',
    tagline: 'thestyle.world',
  },
  {
    name: 'PNI News',
    url: 'https://www.pninews.com/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-holistic-wellness/',
    tagline: 'pninews.com',
  },
  {
    name: 'Business News Byte',
    url: 'https://businessnewsbyte.com/business/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-wellness/',
    tagline: 'businessnewsbyte.com',
  },
]

export function FeaturedInSection() {
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8 tracking-widest uppercase">
            Featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {pressOutlets.map((press) => (
              <a
                key={press.name}
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-foreground font-serif text-xl lg:text-2xl font-light tracking-tight group-hover:text-copper transition-colors duration-300 whitespace-nowrap">
                  {press.name}
                </span>
                <span className="text-muted-foreground text-xs tracking-widest uppercase group-hover:text-copper/70 transition-colors duration-300">
                  {press.tagline}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
