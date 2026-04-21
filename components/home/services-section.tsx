'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Dumbbell, Utensils, Sparkles } from 'lucide-react'
import { FlippingCard } from '@/components/ui/flipping-card'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: '1-percent-circle',
    name: '1% Circle',
    eyebrow: 'GYM & RECOVERY',
    tagline: 'Where strength meets discipline.',
    description:
      'State-of-the-art Precor equipment, private training zones, and comprehensive recovery facilities.',
    backDescription:
      'Experience fitness redefined with 4000 sq.ft. of premium training space, Precor equipment, and a 1:7 trainer-to-member ratio. Our recovery zone includes cryotherapy, infrared saunas, and professional sports massage.',
    features: ['4000 sq.ft.', 'Precor Equipment', '1:7 Trainer Ratio'],
    href: '/deep-power',
    image: '/DEEP POWER IMAGE CARD.png',
    logo: '/logos/1percent-circle-logo-white.svg',
    logoClassName: 'h-10 w-auto',
    icon: Dumbbell,
  },
  {
    id: 'long-lazy-day',
    name: 'Long Lazy Day',
    eyebrow: 'CAFE & NUTRITION',
    tagline: 'Fuel that feels like indulgence.',
    description:
      'Chef-crafted meals that nourish body and soul. From power bowls to gourmet plates, every dish celebrates health.',
    backDescription:
      'Our in-house chef creates 100% organic, locally-sourced meals tailored to your fitness goals. Enjoy custom meal plans, post-workout nutrition, and gourmet health cuisine that proves healthy eating can be delicious.',
    features: ['100% Organic', 'In-house Chef', 'Custom Meal Plans'],
    href: '/deep-nourish',
    image: '/images/long-lazy-day-preview.jpg',
    logo: '/logos/long-lazy-day.svg',
    logoClassName: 'h-10 w-auto brightness-0 dark:brightness-0 dark:invert',
    icon: Utensils,
  },
  {
    id: 'deep-breath',
    name: 'Deep Breath',
    eyebrow: 'SPA & WELLNESS',
    tagline: 'Exhale the world. Inhale yourself.',
    description:
      'Full-spectrum wellness where ancient rituals meet modern science. Turkish hammam, aromatherapy, and more.',
    backDescription:
      'Discover complete rejuvenation across 8 treatment rooms featuring Turkish hammam, infrared sauna, aromatherapy, and signature massage therapies. Our wellness experts craft personalized retreats for mind-body harmony.',
    features: ['8 Treatment Rooms', 'Turkish Hammam', 'Infrared Sauna'],
    href: '/deep-breath',
    image: '/deep-breath-spa.jpg',
    logo: '/logos/deep-breath.svg',
    logoClassName: 'h-10 w-auto brightness-0 dark:brightness-0 dark:invert',
    icon: Sparkles,
  },
]

function ServiceCardFront({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Image */}
      <div className="relative h-[55%] overflow-hidden rounded-t-xl">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col bg-[#f5f3f0] dark:bg-[#1a1a18]">
        {/* Logo */}
        <div className="mb-3">
          <Image
            src={service.logo}
            alt={`${service.name} logo`}
            width={120}
            height={40}
            className={service.logoClassName}
            style={{ width: 'auto' }}
          />
        </div>

        {/* Eyebrow */}
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
          {service.eyebrow}
        </p>

        {/* Tagline */}
        <p className="mt-1 font-serif text-sm text-stone-600 dark:text-stone-400 italic">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs text-stone-500 dark:text-stone-500 leading-relaxed line-clamp-2">
          {service.description}
        </p>

        {/* Hover hint */}
        <div className="mt-auto pt-4 flex items-center gap-2 text-copper text-xs">
          <span>Hover to explore</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}

function ServiceCardBack({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon

  return (
    <div className="flex flex-col h-full w-full p-6 bg-linear-to-br from-[#f5f3f0] to-[#ebe7e0] dark:from-[#1a1a18] dark:to-[#0f0f0e]">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-copper/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-copper" />
      </div>

      {/* Name */}
      <h3 className="font-serif text-xl font-normal text-foreground mb-2">
        {service.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {service.backDescription}
      </p>

      {/* Features */}
      <div className="mt-4 space-y-2">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-copper" />
            <span className="text-xs text-stone-600 dark:text-stone-400">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link href={service.href} className="mt-5">
        <Button
          variant="outline"
          className="w-full border-copper text-copper hover:bg-copper hover:text-white transition-all group"
        >
          Explore {service.name}
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden bg-stone-100/50 dark:bg-stone-950/50"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Three Pillars of Wellness
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl text-balance">
            One roof. Three worlds.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-pretty">
            Each pillar of 1% Circle is designed to excel independently, yet together they create
            a holistic wellness experience unlike anything else in Bangalore.
          </p>
        </motion.div>

        {/* Services Grid - 3 Flip Cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <FlippingCard
                height={480}
                width={340}
                className="border-stone-200/50 dark:border-stone-800/50 shadow-lg shadow-stone-200/30 dark:shadow-black/20"
                frontContent={<ServiceCardFront service={service} />}
                backContent={<ServiceCardBack service={service} />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
