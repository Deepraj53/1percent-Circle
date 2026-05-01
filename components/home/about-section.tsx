'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            The philosophy of wellness
          </h2>
        </motion.div>

        {/* Centered Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-muted-foreground max-w-xl mx-auto">
            Excellence is our standard. We harness the finest resources so you can achieve your best.
          </p>
        </motion.div>

        {/* Large Image with Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative aspect-[16/10] md:aspect-[2/1] lg:aspect-[2.5/1] overflow-hidden rounded-xl lg:rounded-2xl">
            <Image
              src="/images/interior-1percent.jpg"
              alt="1% Circle interior — spa corridor with warm amber lighting and wellness artwork"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Overlay Card - Right Side */}
          <div className="relative mt-6 md:mt-0 md:absolute md:right-6 lg:right-10 md:bottom-6 lg:bottom-10 md:max-w-sm lg:max-w-md">
            <div className="bg-card/95 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-border">
              <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-4">
                Not just a gym.
                <br />
                A Sanctuary.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                1% Circle is a members-only lifestyle sanctuary where the pursuit of 
                excellence meets the art of living well. We&apos;ve created a space where 
                privacy, personalization, and premium experiences converge seamlessly 
                for those who demand more from life.
              </p>
              <Button asChild variant="outline" className="group">
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
