'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface ServiceFacilitiesProps {
  title: string
  categories: {
    name: string
    items: string[]
  }[]
}

export function ServiceFacilities({ title, categories }: ServiceFacilitiesProps) {
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
            Facilities
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8"
            >
              <h3 className="font-serif text-xl font-normal text-foreground mb-6">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-copper/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-copper" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
