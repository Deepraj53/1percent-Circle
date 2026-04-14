'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface ServiceCTAProps {
  title: string
  description: string
  buttonText: string
  href: string
}

export function ServiceCTA({ title, description, buttonText, href }: ServiceCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8">
            <Link href={href}>
              <Button
                size="lg"
                className="h-14 px-10 text-base bg-[#960808] hover:bg-[#7a0606] text-white shimmer"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
