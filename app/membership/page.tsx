"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MembershipFormSection } from "@/components/home/membership-form-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  Check,
  ArrowRight,
  Dumbbell,
  Utensils,
  Sparkles,
  Clock,
  Users,
  Shield
} from "lucide-react"

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

const membershipTiers = [
  {
    name: "Founding Elite",
    subtitle: "Limited to 50 Members",
    price: "25,00,000",
    period: "per annum",
    initiation: "5,00,000",
    featured: true,
    description: "The ultimate membership for those who demand absolute exclusivity and priority access.",
    benefits: [
      "Unlimited access to all 1% Circle facilities",
      "Unlimited Long Lazy Day dining credits",
      "Unlimited Deep Breath spa treatments",
      "Personal wellness concierge (dedicated)",
      "Priority booking for all services",
      "Complimentary guest passes (12/year)",
      "Private locker with premium amenities",
      "Access to members-only events",
      "Exclusive founder&apos;s circle networking",
      "24/7 facility access",
      "Complimentary valet parking",
      "Annual wellness retreat invitation"
    ]
  }
]

const memberBenefits = [
  {
    icon: Dumbbell,
    title: "1% Circle Access",
    description: "World-class fitness facilities with Olympic-grade equipment and certified trainers."
  },
  {
    icon: Utensils,
    title: "Long Lazy Day Dining",
    description: "Gourmet wellness cuisine crafted by executive chefs and certified nutritionists."
  },
  {
    icon: Sparkles,
    title: "Deep Breath Spa",
    description: "Luxury spa treatments including Turkish hammam, aromatherapy, and energy healing."
  },
  {
    icon: Clock,
    title: "Priority Access",
    description: "Skip the wait with priority booking and preferred scheduling for all services."
  },
  {
    icon: Users,
    title: "Exclusive Community",
    description: "Network with like-minded individuals at members-only events and retreats."
  },
  {
    icon: Shield,
    title: "Privacy Guaranteed",
    description: "Discrete service, private facilities, and absolute confidentiality assured."
  }
]

const applicationSteps = [
  {
    step: "01",
    title: "Submit Application",
    description: "Complete our membership application with your details and wellness goals."
  },
  {
    step: "02",
    title: "Membership Review",
    description: "Our membership committee reviews your application within 72 hours."
  },
  {
    step: "03",
    title: "Personal Consultation",
    description: "Schedule a private tour and wellness consultation at our facility."
  },
  {
    step: "04",
    title: "Welcome to the Circle",
    description: "Complete your membership and begin your transformation journey."
  }
]

const faqs = [
  {
    question: "What makes 1% Circle different from other fitness clubs?",
    answer: "1% Circle is not just a fitness club—it&apos;s a comprehensive wellness ecosystem. With only 100 founding members, we offer unprecedented exclusivity, personalized attention, and a holistic approach that integrates fitness, nutrition, and recovery under one roof."
  },
  {
    question: "Can I freeze my membership if I&apos;m traveling?",
    answer: "Yes, Founding Elite members can freeze their membership for up to 90 days per year at no additional cost. Founding Premier members can freeze for up to 60 days. We also offer reciprocal access arrangements with select partner clubs worldwide."
  },
  {
    question: "Are there any age restrictions for membership?",
    answer: "Members must be 21 years or older. We also offer family membership packages that include access for spouse and children above 16 years with parental supervision."
  },
  {
    question: "What is the guest policy?",
    answer: "Founding Elite members receive 12 complimentary guest passes per year, while Founding Premier members receive 6. Additional guest passes can be purchased. All guests must be registered 24 hours in advance."
  },
  {
    question: "Is there a dress code?",
    answer: "We maintain a smart-casual dress code in common areas and the cafe. Athletic wear is required in fitness areas. Spa areas have their own protocols that will be explained during your orientation."
  },
  {
    question: "Can I cancel my membership?",
    answer: "Founding memberships require a 12-month minimum commitment. After the initial period, memberships can be cancelled with 90 days written notice. The one-time initiation fee is non-refundable."
  }
]

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    tier: "",
    goals: ""
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - PulseFit Style */}
      <section
        className="relative w-full min-h-screen flex flex-col overflow-hidden"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)/0.3) 50%, hsl(var(--background)) 100%)",
        }}
      >
        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl"
            style={{ gap: "32px" }}
          >
            {/* Eyebrow */}
            <span className="text-copper font-medium tracking-[0.3em] uppercase text-sm">
              Exclusive Membership
            </span>

            {/* Title */}
            <h1 className="font-serif font-light text-foreground text-balance" style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Join the Elite <span className="text-copper">1% Circle</span>
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground max-w-xl text-pretty" style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6" }}>
              Only 100 founding memberships available. Reserve your place in Bangalore&apos;s most exclusive wellness sanctuary.
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button
                onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex flex-row items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 bg-foreground text-background font-medium"
                style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)" }}
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById("membership-tiers")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full transition-all hover:scale-105 border border-border text-foreground font-medium bg-transparent"
              >
                View Pricing
              </button>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-muted-foreground text-sm italic"
            >
              *Application required. Limited founding memberships remaining.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-row items-center gap-3"
            >
              <div className="flex flex-row -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt={`Member ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Join <AnimatedCounter value={50} suffix="+" className="text-copper font-semibold" /> elite members
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Program Cards Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden py-16"
        >
          {/* Gradient Overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[150px]"
            style={{ background: "linear-gradient(90deg, hsl(var(--background)) 0%, transparent 100%)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[150px]"
            style={{ background: "linear-gradient(270deg, hsl(var(--background)) 0%, transparent 100%)" }}
          />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center gap-6 pl-6"
            animate={{ x: [0, -1520] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Program Cards - Duplicated for seamless loop */}
            {[
              { image: "/images/membership-strength.jpg", category: "1% CIRCLE", title: "Personal One-on-One Training" },
              { image: "/images/membership-cuisine.jpg", category: "LONG LAZY DAY", title: "Gourmet Wellness Cuisine" },
              { image: "/images/membership-spa.jpg", category: "DEEP BREATH", title: "Luxury Spa & Recovery" },
              { image: "/images/membership-events.jpg", category: "MEMBERS ONLY", title: "Exclusive Events" },
              { image: "/images/membership-strength.jpg", category: "1% CIRCLE", title: "Personal One-on-One Training" },
              { image: "/images/membership-cuisine.jpg", category: "LONG LAZY DAY", title: "Gourmet Wellness Cuisine" },
              { image: "/images/membership-spa.jpg", category: "DEEP BREATH", title: "Luxury Spa & Recovery" },
              { image: "/images/membership-events.jpg", category: "MEMBERS ONLY", title: "Exclusive Events" },
            ].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 cursor-pointer relative overflow-hidden rounded-3xl"
                style={{ width: "356px", height: "420px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)" }}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                    {program.category}
                  </span>
                  <h3 className="text-2xl font-serif font-normal text-white leading-tight">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Membership Benefits Overview */}
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
              Member Privileges
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 mb-6 text-balance">
              What Membership Includes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every membership grants access to our complete wellness ecosystem,
              designed to transform every aspect of your well-being.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {memberBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl p-8 hover:border-copper/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-copper-l" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers - New Card Design */}
      <section id="membership-tiers" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block border border-border py-1.5 px-4 rounded-full text-xs font-medium tracking-wide text-muted-foreground bg-background mb-4">
              Simple, Honest Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-4 text-balance">
              Choose Your Membership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A Smart, Risk-Free Investment for Your Wellness
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative rounded-2xl overflow-hidden ${tier.featured
                  ? "bg-[#1a1a1a] dark:bg-[#0a0a0a] text-white border border-copper/30"
                  : "bg-card border border-border"
                  }`}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className={`text-xl font-serif font-normal mb-1 ${tier.featured ? 'text-white' : 'text-foreground'}`}>
                        {tier.name}
                      </h3>
                      <p className={`text-sm ${tier.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {tier.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${tier.featured
                      ? 'bg-copper text-black'
                      : 'bg-secondary text-muted-foreground'
                      }`}>
                      {tier.featured ? 'RECOMMENDED' : 'MOST POPULAR'}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-lg ${tier.featured ? 'text-white/60' : 'text-muted-foreground'}`}>INR</span>
                      <span className={`text-5xl font-serif font-normal ${tier.featured ? 'text-white' : 'text-foreground'}`}>
                        {tier.price}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${tier.featured ? 'text-white/60' : 'text-muted-foreground'}`}>
                      {tier.period}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-4 ${tier.featured
                      ? 'bg-copper hover:bg-copper-l text-black'
                      : 'bg-background border border-border hover:bg-secondary text-foreground'
                      }`}
                    size="lg"
                    onClick={() => {
                      setFormData({ ...formData, tier: tier.name })
                      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get Started
                  </Button>

                  <p className={`text-center text-xs mb-8 ${tier.featured ? 'text-white/50' : 'text-muted-foreground'}`}>
                    + INR {tier.initiation} one-time initiation fee
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? 'bg-copper/20' : 'bg-copper/20'
                          }`}>
                          <Check className={`w-3 h-3 ${tier.featured ? 'text-copper-l' : 'text-copper'}`} />
                        </div>
                        <span className={`text-sm ${tier.featured ? 'text-white/80' : 'text-foreground'}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-copper/5 to-copper/10 border border-copper/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-copper/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-copper" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-xl md:text-2xl font-normal text-foreground mb-3">Notice of Limited Availability</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Memberships are made available on a first-come, first-serve basis. Your application is being given
                  first access to this membership; however, 1% Circle makes no guarantee that this will still be
                  available after today. Only <span className="text-copper font-medium">47 founding memberships</span> remain.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
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
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              The Application Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-serif text-copper/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-serif text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form - Use the Homepage component */}
      <MembershipFormSection />

      {/* FAQ Section */}
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
              Questions & Answers
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-copper flex-shrink-0 transition-transform ${expandedFaq === index ? "rotate-90" : ""
                      }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
