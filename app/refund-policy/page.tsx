"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: March 1, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Refund Policy outlines the terms and conditions for refunds related to 
                membership fees, services, and purchases at 1% Circle Wellness Club Private 
                Limited. We are committed to ensuring member satisfaction while maintaining 
                fair and transparent policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">2. Initiation Fee</h2>
              <p className="text-muted-foreground leading-relaxed">
                For details on initiation fees and exclusive offers, please contact us directly 
                as these are customized based on individual membership packages and requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">3. Annual Membership Fees</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">3.1 Cooling-Off Period</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                New members may cancel their membership within 14 days of activation and 
                receive a full refund of the annual membership fee (initiation fee excluded), 
                provided they have not used the facilities more than twice during this period.
              </p>

              <h3 className="text-xl font-serif text-foreground mb-3">3.2 Cancellation After Cooling-Off Period</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After the 14-day cooling-off period and during the first 12 months:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>No refunds will be provided for the minimum commitment period</li>
                <li>Members remain responsible for the full annual fee</li>
              </ul>

              <h3 className="text-xl font-serif text-foreground mb-3">3.3 Cancellation After First Year</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For cancellations with proper 90-day notice after the initial commitment period:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Pro-rata refund of unused months will be calculated</li>
                <li>An administrative fee of INR 25,000 will be deducted</li>
                <li>Refunds will be processed within 30 business days</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">4. Service Credits and Packages</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">4.1 Personal Training Packages</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Unused sessions are valid for 12 months from purchase date</li>
                <li>Extensions may be granted at management&apos;s discretion</li>
                <li>No cash refunds for unused sessions</li>
                <li>Sessions may be transferred to immediate family members with approval</li>
              </ul>

              <h3 className="text-xl font-serif text-foreground mb-3">4.2 Spa Credits</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Monthly spa credits expire at the end of each calendar month</li>
                <li>Unused credits cannot be carried forward or refunded</li>
                <li>Purchased spa packages are valid for 6 months</li>
              </ul>

              <h3 className="text-xl font-serif text-foreground mb-3">4.3 Dining Credits</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Monthly dining credits expire at the end of each calendar month</li>
                <li>Unused credits cannot be carried forward or refunded</li>
                <li>Credits cannot be converted to cash</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">5. Individual Service Bookings</h2>
              
              <h3 className="text-xl font-serif text-foreground mb-3">5.1 Cancellation Timeline</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>48+ hours notice: Full refund or credit</li>
                <li>24-48 hours notice: 50% refund or credit</li>
                <li>Less than 24 hours: No refund</li>
              </ul>

              <h3 className="text-xl font-serif text-foreground mb-3">5.2 No-Shows</h3>
              <p className="text-muted-foreground leading-relaxed">
                Failure to attend a scheduled service without prior cancellation will result 
                in forfeiture of the full service fee or deduction of credits.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">6. Membership Freeze</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an alternative to cancellation, members may request to freeze their membership:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Founding Elite: Up to 90 days per year at no cost</li>
                <li>Founding Premier: Up to 60 days per year at no cost</li>
                <li>Additional freeze periods may be available for a nominal fee</li>
                <li>Membership term extends by the duration of the freeze</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">7. Medical Circumstances</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In cases of documented medical conditions that prevent facility use:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Extended freeze periods may be granted with medical documentation</li>
                <li>Pro-rata refunds may be considered for permanent conditions</li>
                <li>Each case is reviewed individually by management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">8. Relocation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Members relocating more than 50 kilometers from our facility may request 
                early termination with proof of new residence. A pro-rata refund minus a 
                INR 50,000 processing fee will be provided after the minimum commitment period.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">9. Termination by 1% Circle</h2>
              <p className="text-muted-foreground leading-relaxed">
                If membership is terminated by 1% Circle for violation of Terms of Service 
                or Code of Conduct, no refund will be provided. If termination is due to 
                facility closure or other circumstances within our control, a pro-rata 
                refund will be provided.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">10. Refund Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To request a refund:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Submit a written request to 1percentcirclepvtltd@gmail.com</li>
                <li>Include your membership ID and reason for refund</li>
                <li>Attach any required supporting documentation</li>
                <li>Requests are reviewed within 10 business days</li>
                <li>Approved refunds are processed within 30 business days</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Refunds will be credited to the original payment method or via bank 
                transfer as determined by our finance team.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">11. Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you disagree with a refund decision, you may escalate the matter by 
                writing to our Membership Director at 1percentcirclepvtltd@gmail.com. 
                All disputes will be handled in accordance with our Terms of Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For refund-related inquiries:
              </p>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-foreground font-medium mb-2">1 PERCENT CIRCLE PVT. LTD.</p>
                <p className="text-muted-foreground">#40, Signature Heights, Shubh Enclave</p>
                <p className="text-muted-foreground">Haraluru Main Road</p>
                <p className="text-muted-foreground">Bengaluru – 560 102</p>
                <p className="text-muted-foreground mt-2">Email: 1percentcirclepvtltd@gmail.com</p>
                <p className="text-muted-foreground">Phone: +91 95915 17774</p>
                <p className="text-muted-foreground">Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </section>
          </div>

          <div className="flex gap-4 mt-12 pt-8 border-t border-border">
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
