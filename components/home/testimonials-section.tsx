'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AnimatedCounter } from '@/components/ui/animated-counter'

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I had an absolutely lovely experience at The 1% Circle, Bengaluru. From the moment I walked in, the ambience felt luxurious, calm, and thoughtfully curated. The salon services were top-notch — professional, relaxing, and truly indulgent. It's more than just a wellness space; it's a complete self-care sanctuary. I left feeling refreshed, pampered, and glowing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Verified Member",
    role: "Google Review ★★★★★",
  },
  {
    text: "Absolutely loved my experience. I tried both the pedicure and facial and was very impressed with the quality and care. The place is beautiful, hygienic, and the staff is extremely polite and professional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Surbhi Dhall",
    role: "Google Review ★★★★★",
  },
  {
    text: "One stop place for all your Salon Sessions. Each service was delivered with precision and care — the pedicure was both relaxing and impeccably hygienic, the hand polish was finished with great attention to detail, and the hydra boost facial left my skin noticeably refreshed and nourished. Paired with the salon's elegant, calming ambience, it felt like a well-curated self-care experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Verified Member",
    role: "Google Review ★★★★★",
  },
  {
    text: "An amazing experience with 1 Percent Circle — starting from hospitality to caring to detail on every service was the best part. Can't wait to be back for my monthly rituals. I had the best pedicure.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lalitha Naidu",
    role: "Google Review ★★★★★",
  },
  {
    text: "I had an amazing experience. I took hair spa and facial. The services are great — the place is a one stop for salon, spa, gym and cafe.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Priyanka S",
    role: "Google Review ★★★★★",
  },
  {
    text: "The staff were professional, attentive, and quietly reassuring, creating a sense of comfort without ever feeling rushed. They served my favourite black coffee and took care of me so well. A truly well-curated self-care experience.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Verified Member",
    role: "Google Review ★★★★★",
  },
  {
    text: "From the moment I walked in, the ambience felt luxurious, calm, and thoughtfully curated. It's more than just a wellness space — it's a complete self-care sanctuary.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Verified Member",
    role: "Google Review ★★★★★",
  },
  {
    text: "Can't wait to be back for my monthly rituals. The hospitality and attention to detail on every service is the best part of 1 Percent Circle.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lalitha Naidu",
    role: "Google Review ★★★★★",
  },
  {
    text: "The hydra boost facial left my skin noticeably refreshed and nourished. The place is beautiful, hygienic and the staff is extremely polite and professional. Highly recommend.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Surbhi Dhall",
    role: "Google Review ★★★★★",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsColumn = ({
  className,
  testimonials: columnTestimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col items-center gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {columnTestimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="p-8 rounded-3xl border border-border shadow-lg shadow-black/5 max-w-xs w-full bg-card transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-copper/30"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-muted-foreground leading-relaxed font-normal m-0 transition-colors duration-300">
                    &ldquo;{text}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-copper/30 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-serif font-normal not-italic tracking-tight leading-5 text-foreground transition-colors duration-300">
                        {name}
                      </cite>
                      <span className="text-sm leading-5 tracking-tight text-muted-foreground mt-0.5 transition-colors duration-300">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

const stats = [
  { label: 'Elite Members', value: 100, suffix: '+' },
  { label: 'Premium Gym Ranking', value: 1, prefix: '#', suffix: ' in Bangalore' },
  { label: 'Average Rating', value: 4.9, suffix: '', isDecimal: true },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 }
          }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <span className="border border-border py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-muted-foreground bg-secondary/50">
              Testimonials
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight mt-6 text-center text-foreground"
          >
            Trusted by Bangalore&apos;s Elite
          </h2>
          <p className="text-center mt-5 text-muted-foreground text-lg leading-relaxed max-w-sm">
            Discover why discerning members choose 1% Circle as their wellness sanctuary.
          </p>
        </motion.div>

        {/* Testimonials Columns */}
        <div
          className="flex items-start justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden mx-auto"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'text-center py-8',
                index !== stats.length - 1 && 'md:border-r md:border-border'
              )}
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
                className="font-serif text-4xl lg:text-5xl font-normal text-copper"
              />
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
