"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ArrowRight, Target, Heart, Users, Award, Globe, Sparkles } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const values = [
  {
    icon: Target,
    title: "Excellence Without Compromise",
    description: "Every detail, every experience, every moment at 1% Circle is crafted to exceed the highest standards of luxury wellness."
  },
  {
    icon: Heart,
    title: "Holistic Transformation",
    description: "True wellness encompasses body, mind, and spirit. Our integrated approach addresses every dimension of your well-being."
  },
  {
    icon: Users,
    title: "Intimate Community",
    description: "With only 100 founding members, we cultivate meaningful connections among like-minded individuals who value privacy and excellence."
  },
  {
    icon: Award,
    title: "World-Class Expertise",
    description: "Our team comprises internationally certified professionals, each a master in their discipline, dedicated to your transformation."
  },
  {
    icon: Globe,
    title: "Global Standards, Local Soul",
    description: "We blend international best practices with the rich wellness traditions of India to create a uniquely powerful experience."
  },
  {
    icon: Sparkles,
    title: "Bespoke Personalization",
    description: "Your journey is uniquely yours. Every program, treatment, and experience is tailored to your specific goals and preferences."
  }
]

const leadership = [
  {
    name: "Vikram Reddy",
    role: "Founder & CEO",
    image: "/images/team/founder-vikram.jpg",
    bio: "A former investment banker turned wellness entrepreneur, Vikram's vision of creating India's most exclusive wellness sanctuary stems from his personal transformation journey."
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Chief Wellness Officer",
    image: "/images/team/cwo-meera.jpg",
    bio: "With 20 years in integrative medicine and certifications from Harvard and the Chopra Center, Dr. Meera designs our holistic wellness protocols."
  },
  {
    name: "Arun Menon",
    role: "Director of Operations",
    image: "/images/team/director-arun.jpg",
    bio: "Former General Manager at The Oberoi, Arun brings two decades of ultra-luxury hospitality experience to ensure impeccable service standards."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="1% Circle Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-copper font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 text-balance">
              Where Excellence Meets
              <span className="block text-copper mt-2">Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Born from a vision to redefine wellness for India&apos;s most discerning individuals, 
              1% Circle represents the pinnacle of holistic luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Matching Homepage Layout */}
      <section className="py-24 lg:py-32 bg-background">
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
              The 1% Philosophy
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
              Serving the top 1% who demand nothing but the finest, while helping every member become 1% better each day.
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
                src="/Philosophy.jpg"
                alt="1% Circle Philosophy"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Overlay Card - Right Side */}
            <div className="relative mt-6 md:mt-0 md:absolute md:right-6 lg:right-10 md:bottom-6 lg:bottom-10 md:max-w-sm lg:max-w-md">
              <div className="bg-card/95 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-border">
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-foreground mb-4">
                  Excellence is not a destination,
                  <br />
                  but a daily practice.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  We believe that true luxury is not merely about premium amenities—it&apos;s about 
                  transformative experiences that elevate every dimension of life. Our approach 
                  integrates ancient wisdom with cutting-edge science, creating protocols that 
                  honor tradition while embracing innovation.
                </p>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="/membership">
                    Join the Circle
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-background border border-border rounded-xl p-8 hover:border-copper/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
              The Visionaries
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              Leadership Team
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-1">{leader.name}</h3>
                <p className="text-copper font-medium mb-3">{leader.role}</p>
                <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Space & Facility Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="/Philosophy.jpg"
                    alt="Members Lounge"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden mt-8">
                  <Image
                    src="/deep-breath-spa.jpg"
                    alt="Fitness Floor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="/1 Philosophy Gallery Image.png"
                    alt="Spa Treatment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden mt-8">
                  <Image
                    src="/Single Lazy Food.png"
                    alt="Wellness Cafe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
                Our Sanctuary
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 mb-6 text-balance">
                8,000 Sq Ft of Luxury
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nestled in Bangalore&apos;s most prestigious locale, our 8,000 square foot 
                  sanctuary has been meticulously designed by world-renowned architects who 
                  specialize in ultra-luxury wellness spaces.
                </p>
                <p>
                  Every material, every texture, every light fixture has been carefully 
                  selected to create an atmosphere of refined tranquility. The space 
                  seamlessly blends contemporary elegance with warm, inviting comfort.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-copper/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mb-6 text-balance">
              Ready to Join the 1%?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              With only 100 founding memberships available, the opportunity to become 
              part of this exclusive community is limited. Begin your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/membership">
                  Apply for Membership
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
