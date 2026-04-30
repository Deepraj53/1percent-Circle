"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Newspaper } from "lucide-react"

const pressArticles = [
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Holistic Wellness",
    source: "The Style World",
    url: "https://www.thestyle.world/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-holistic-wellness/",
  },
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Holistic Wellness",
    source: "PNI News",
    url: "https://www.pninews.com/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-holistic-wellness/",
  },
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Wellness",
    source: "Business News For Profit",
    url: "https://businessnewsforprofit.com/business/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-wellness/",
  },
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Wellness",
    source: "Business News Byte",
    url: "https://businessnewsbyte.com/business/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-wellness/",
  },
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Wellness",
    source: "Business Micro",
    url: "https://businessmicro.in/business/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-wellness/",
  },
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Wellness",
    source: "Biz Rapidx",
    url: "https://bizrapidx.com/business/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-wellness/",
  },
  {
    title: "The 1% Circle Launches in Bengaluru: Redefining Luxury Fitness and Wellness",
    source: "Biz News Daily",
    url: "https://biznewsdaily.com/business/the-1-circle-launches-in-bengaluru-redefining-luxury-fitness-and-wellness/",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="1% Circle Press"
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
              Media Coverage
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 text-balance">
              Press & News
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover what the media is saying about 1% Circle and our mission to redefine luxury wellness in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Articles Section */}
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
              Featured In
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              Recent Coverage
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pressArticles.map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group bg-card border border-border rounded-xl p-6 hover:border-copper/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Newspaper className="w-6 h-6 text-copper" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-copper transition-colors" />
                </div>
                <p className="text-copper text-sm font-medium mb-2">{article.source}</p>
                <h3 className="text-lg font-serif text-foreground group-hover:text-copper transition-colors leading-tight">
                  {article.title}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press Contact Section */}
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
              Media Inquiries
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 mb-6 text-balance">
              Press Contact
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              For press inquiries, interview requests, or media resources, please reach out to our communications team.
            </p>
            <div className="bg-background border border-border rounded-xl p-8 inline-block">
              <p className="text-foreground font-medium mb-2">Email us at</p>
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
