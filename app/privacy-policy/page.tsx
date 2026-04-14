"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mt-4 mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: March 1, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                1% Circle Wellness Club Private Limited (&quot;1% Circle,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) 
                is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website, use our 
                mobile application, or engage with our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our services, you agree to the terms of this Privacy Policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Register for membership or express interest in our services</li>
                <li>Complete forms on our website or mobile application</li>
                <li>Contact us via email, phone, or other communication channels</li>
                <li>Participate in surveys, promotions, or events</li>
                <li>Use our facilities and services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Full name and contact details (email, phone number, address)</li>
                <li>Date of birth and gender</li>
                <li>Professional information (occupation, company)</li>
                <li>Health and fitness information (wellness goals, medical conditions, dietary preferences)</li>
                <li>Payment and billing information</li>
                <li>Photographs and identification documents</li>
              </ul>

              <h3 className="text-xl font-serif text-foreground mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you access our digital platforms, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device information (type, operating system, unique identifiers)</li>
                <li>Browser information and IP address</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Location data (with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process membership applications and manage your account</li>
                <li>Provide personalized wellness programs and recommendations</li>
                <li>Facilitate bookings, appointments, and service delivery</li>
                <li>Process payments and maintain financial records</li>
                <li>Communicate with you about services, updates, and promotions</li>
                <li>Improve our services and develop new offerings</li>
                <li>Ensure safety and security within our facilities</li>
                <li>Comply with legal obligations and enforce our policies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service providers who assist in our operations (payment processors, IT services)</li>
                <li>Healthcare and wellness professionals involved in your care (with your consent)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners for co-branded services (with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. These measures include encryption, secure servers, access controls, 
                and regular security assessments. However, no method of transmission over the 
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Data portability (receive your data in a structured format)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, 
                analyze usage patterns, and deliver personalized content. You can manage your 
                cookie preferences through your browser settings. Please note that disabling 
                certain cookies may affect the functionality of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not 
                knowingly collect personal information from children. If you believe we have 
                collected information from a minor, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on our website and updating the 
                &quot;Last updated&quot; date. Your continued use of our services after such changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-foreground font-medium mb-2">1 PERCENT CIRCLE PVT. LTD.</p>
                <p className="text-muted-foreground">Data Protection Officer</p>
                <p className="text-muted-foreground">#40, Signature Heights, Shubh Enclave</p>
                <p className="text-muted-foreground">Haraluru Main Road</p>
                <p className="text-muted-foreground">Bengaluru – 560 102</p>
                <p className="text-muted-foreground mt-2">Email: 1percentcirclepvtltd@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 95915 17774</p>
              </div>
            </section>
          </div>

          <div className="flex gap-4 mt-12 pt-8 border-t border-border">
            <Link href="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-primary hover:underline">
              Refund Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
