import type { Metadata, Viewport } from 'next'
import Head from 'next/head'
import { El_Messiri, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { BackToTop } from '@/components/layout/back-to-top'
import { CookieConsent } from '@/components/layout/cookie-consent'
import { LoaderAnimation } from '@/components/loader-animation'
import './globals.css'

const elMessiri = El_Messiri({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-el-messiri',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '1% Circle — Bangalore\'s Most Exclusive Wellness & Fitness Destination',
  description: 'Designed for the top 1%. Premium fitness, gourmet nutrition, luxury spa under one roof. Apply for Founding Membership.',
  keywords: ['premium gym', 'luxury spa', 'wellness', 'fitness', 'Bangalore', 'HNI', 'exclusive membership', '1% Circle', 'Long Lazy Day', 'Deep Breath'],
  authors: [{ name: '1% Circle' }],
  creator: '1% Circle',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://1percentcircle.com',
    siteName: '1% Circle',
    title: '1% Circle — Bangalore\'s Most Exclusive Wellness & Fitness Destination',
    description: 'Designed for the top 1%. Premium fitness, gourmet nutrition, luxury spa under one roof.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1080,
        height: 1350,
        alt: '1% Circle - Premium Wellness Destination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1% Circle — Bangalore\'s Most Exclusive Wellness & Fitness Destination',
    description: 'Designed for the top 1%. Premium fitness, gourmet nutrition, luxury spa under one roof.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_%20Circle%207.png-wa1sGC36HJzZi4hd9ECHPu04E682Yg.jpeg" />
      </Head>
      <body className={`${elMessiri.variable} ${sora.variable} font-sans antialiased w-full overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={false}
        >
          <LoaderAnimation />
          <ScrollProgress />
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
