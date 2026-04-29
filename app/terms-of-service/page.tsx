"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: March 1, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you 
                and 1% Circle Wellness Club Private Limited (&quot;1% Circle,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) 
                governing your access to and use of our facilities, services, website, and mobile 
                application. By becoming a member or using our services, you agree to be bound by 
                these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">2. Membership</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">2.1 Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Membership is available to individuals who are at least 21 years of age. All 
                membership applications are subject to approval by our membership committee. 
                We reserve the right to decline any application without providing a reason.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">2.2 Membership Tiers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer different membership tiers, each with specific benefits, access levels, 
                and fees. Details of each tier are provided during the application process and 
                are subject to change with reasonable notice.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">2.3 Membership Fees</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Annual membership fees are payable in advance</li>
                <li>Additional services may incur separate charges</li>
                <li>For exclusive offers and custom packages, get in touch with us</li>
                <li>Fees are subject to applicable taxes</li>
              </ul>

              <h3 className="text-xl font-serif text-foreground mb-3">2.4 Membership Term and Renewal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founding memberships require a minimum commitment of 12 months. Memberships 
                automatically renew unless cancelled in accordance with Section 10 of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">3. Facility Access and Usage</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">3.1 Access</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Members may access facilities during designated hours according to their membership 
                tier. Access is personal and non-transferable. Members must present valid 
                identification or membership credentials upon entry.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">3.2 Guest Policy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Members may bring guests in accordance with their membership tier&apos;s guest privileges. 
                All guests must be registered at least 24 hours in advance and accompanied by the 
                member. Members are responsible for their guests&apos; conduct and compliance with these Terms.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">3.3 Dress Code</h3>
              <p className="text-muted-foreground leading-relaxed">
                Members and guests must adhere to our dress code: smart-casual attire in common 
                areas and the cafe; appropriate athletic wear in fitness areas; and spa-specific 
                protocols as instructed by staff.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">4. Code of Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Members and guests must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Treat all members, guests, and staff with respect and courtesy</li>
                <li>Maintain appropriate noise levels and respect others&apos; privacy</li>
                <li>Use equipment and facilities responsibly and for their intended purpose</li>
                <li>Follow all safety guidelines and staff instructions</li>
                <li>Not engage in any illegal, disruptive, or inappropriate behavior</li>
                <li>Not photograph or record other members without explicit consent</li>
                <li>Not solicit or conduct business activities on premises without authorization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">5. Health and Safety</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">5.1 Health Disclosure</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Members must disclose any medical conditions, injuries, or limitations that may 
                affect their use of facilities or services. This information will be kept 
                confidential and used only to ensure your safety and provide appropriate services.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">5.2 Assumption of Risk</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Physical exercise and certain wellness treatments involve inherent risks. By 
                using our facilities and services, you acknowledge and voluntarily assume these 
                risks. You are encouraged to consult with healthcare professionals before 
                beginning any fitness or wellness program.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">5.3 Emergency Procedures</h3>
              <p className="text-muted-foreground leading-relaxed">
                Members must familiarize themselves with emergency procedures and evacuation 
                routes. In case of emergency, follow staff instructions promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">6. Bookings and Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certain services require advance booking. Cancellation policies vary by service:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personal training: 24-hour cancellation notice required</li>
                <li>Spa treatments: 48-hour cancellation notice required</li>
                <li>Private dining: 72-hour cancellation notice required</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Late cancellations or no-shows may result in charges or loss of credits at our discretion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, logos, and intellectual property associated with 1% Circle 
                are owned by us or our licensors. You may not use, reproduce, or distribute any 
                such materials without our prior written consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, 1% Circle shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from 
                your use of our facilities or services. Our total liability shall not exceed 
                the membership fees paid by you in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless 1% Circle, its officers, directors, 
                employees, and agents from any claims, damages, losses, or expenses arising 
                from your violation of these Terms or your use of our facilities and services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">10. Membership Suspension and Termination</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">10.1 By Member</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After the initial 12-month commitment period, members may cancel their membership 
                with 90 days written notice. The initiation fee is non-refundable. Unused portions 
                of prepaid fees may be refunded in accordance with our Refund Policy.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">10.2 By 1% Circle</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate membership for violation of these 
                Terms, non-payment of fees, or any conduct we deem detrimental to the club or 
                its members. In cases of termination for cause, no refunds will be provided.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">11. Governing Law and Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by the laws of India. Any disputes arising from 
                these Terms or your membership shall be subject to the exclusive jurisdiction 
                of the courts in Bangalore, Karnataka.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. Material changes will be communicated 
                to members with at least 30 days notice. Continued use of our services after 
                such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms, please contact:
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-foreground font-medium mb-2">1 PERCENT CIRCLE PVT. LTD.</p>
                <p className="text-muted-foreground">#40, Signature Heights, Shubh Enclave</p>
                <p className="text-muted-foreground">Haraluru Main Road</p>
                <p className="text-muted-foreground">Bengaluru – 560 102</p>
                <p className="text-muted-foreground mt-2">Email: 1percentcirclepvtltd@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 95915 17774</p>
              </div>
            </section>
          </div>

          <div className="flex gap-4 mt-12 pt-8 border-t border-border">
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
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
