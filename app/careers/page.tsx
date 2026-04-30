"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Briefcase, Clock } from "lucide-react"

const openings = [
  {
    title: "Personal Trainer",
    department: "1% Circle — Gym & Recovery",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "We are looking for certified personal trainers who are passionate about transforming lives through elite fitness coaching. Experience with high-performance clientele preferred.",
  },
  {
    title: "Spa Therapist",
    department: "Deep Breath — Spa & Wellness",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Join our wellness team as a certified spa therapist specializing in holistic treatments. Expertise in Swedish, deep tissue, and aromatherapy massage required.",
  },
  {
    title: "Chef — Wellness Cuisine",
    department: "Long Lazy Day — Cafe & Nutrition",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "We seek a skilled chef with a passion for healthy, nutrient-rich cuisine. Experience in crafting organic, functional menus that delight the palate while nourishing the body.",
  },
  {
    title: "Member Relations Executive",
    department: "Operations",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Be the face of 1% Circle for our exclusive members. You will manage member experiences, ensure white-glove service delivery, and build lasting relationships with our community.",
  },
  {
    title: "Nutritionist & Wellness Consultant",
    department: "Long Lazy Day — Cafe & Nutrition",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Design personalized nutrition plans for our members in collaboration with our culinary team. A degree in nutrition science or dietetics with relevant certification is required.",
  },
  {
    title: "Front Desk & Concierge",
    department: "Operations",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Deliver an exceptional first impression to every member. You will handle scheduling, member queries, and ensure seamless daily operations at our luxury facility.",
  },
]

const values = [
  {
    title: "Excellence First",
    description: "We hold ourselves to the highest standards in everything we do — from service delivery to personal growth.",
  },
  {
    title: "Member Obsessed",
    description: "Our members are at the centre of every decision. We go above and beyond to create experiences that matter.",
  },
  {
    title: "Grow Together",
    description: "We invest in our team's development because we believe growth is a journey best taken together.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Careers at 1% Circle"
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
              Join the Team
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 text-balance">
              Careers at 1% Circle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Be part of a team redefining luxury wellness in India. We are looking for exceptional individuals who share our passion for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Why 1% Circle
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-background rounded-xl border border-border"
              >
                <div className="w-12 h-1 bg-copper mx-auto mb-6" />
                <h3 className="text-xl font-serif text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
              Open Roles
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              Current Openings
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {openings.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-card border border-border rounded-xl p-6 hover:border-copper/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-copper" />
                  </div>
                  <span className="text-xs font-medium text-copper bg-copper/10 px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.type}
                  </span>
                </div>
                <p className="text-copper text-sm font-medium mb-1">{job.department}</p>
                <h3 className="text-xl font-serif text-foreground mb-3">{job.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
              Apply Now
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 mb-6 text-balance">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Send your resume and a brief introduction to our team. We review every application and will get back to you if there is a fit.
            </p>
            <div className="bg-background border border-border rounded-xl p-8 inline-block">
              <p className="text-foreground font-medium mb-2">Send your application to</p>
              <a
                href="mailto:1percentcirclepvtltd@gmail.com"
                className="text-copper hover:underline text-lg"
              >
                1percentcirclepvtltd@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
