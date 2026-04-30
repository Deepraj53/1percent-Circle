"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Check,
  MessageSquare,
  Calendar,
  Building
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "1 PERCENT CIRCLE PVT. LTD.",
      "#40, Signature Heights, Shubh Enclave",
      "Haraluru Main Road",
      "Bengaluru – 560 102"
    ]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 95915 17774",
      "+91 95915 17774 (WhatsApp)"
    ]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "1percentcirclepvtltd@gmail.com",
      "1percentcirclepvtltd@gmail.com"
    ]
  },
  {
    icon: Clock,
    title: "Hours",
    details: [
      "Mon - Fri: 5:00 AM - 12:00 AM",
      "Sat - Sun: 6:00 AM - 11:00 PM",
      "Elite Members: 24/7 Access"
    ]
  }
]

const inquiryTypes = [
  { id: "membership", label: "Membership Inquiry", icon: Building },
  { id: "tour", label: "Schedule a Tour", icon: Calendar },
  { id: "general", label: "General Question", icon: MessageSquare }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "membership",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact 1% Circle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 top-40 bg-linear-to-b from-background/60 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-copper font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 text-balance">
              Connect With Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Whether you&apos;re interested in membership or have questions,
              our concierge team is here to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-copper/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mt-4 mb-6 text-balance">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and a member of our team will respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-background border border-copper/30 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-copper" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Message Sent</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will respond to your inquiry within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Iapos;m interested in:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                          className={`p-3 rounded-lg border text-center transition-all ${formData.inquiryType === type.id
                            ? "border-copper bg-primary/5"
                            : "border-border hover:border-copper/30"
                            }`}
                        >
                          <type.icon className={`w-5 h-5 mx-auto mb-1 ${formData.inquiryType === type.id ? "text-copper" : "text-muted-foreground"
                            }`} />
                          <span className="text-xs text-foreground">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="aspect-square lg:aspect-4/3 relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/deep-power-hero.jpg"
                  alt="1% Circle Location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                  <a
                    href="https://google.com/maps?q=1+Percent+Circle,+40,+signature+heights,+Shubh+enclave,+Haralur+Main+Rd,+Bengaluru,+Karnataka+560102&ftid=0x3bae13f4e2749e41:0xe7183e888e4d5179&entry=gps&shh=CAE&lucs=,94297699,94275415,94284460,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTksOTQyNzU0MTUsOTQyODQ0NjAsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAklO&skid=79d79fef-e252-4672-a500-2e4ef1e3248a&g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-background transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-copper" />
                    <span className="text-foreground font-medium">Open in Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-serif text-xl text-foreground mb-4">Schedule a Private Tour</h3>
                <p className="text-muted-foreground mb-4">
                  Experience 1% Circle firsthand with a private, guided tour of our facilities.
                  Our concierge will personally walk you through each wellness pillar.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-copper" />
                    Complimentary wellness consultation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-copper" />
                    Sample our Long Lazy Day cafe
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-copper" />
                    Meet our expert team
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Request a Tour
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
