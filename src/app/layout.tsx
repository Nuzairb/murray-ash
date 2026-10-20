import type { Metadata } from 'next'
import { Instrument_Serif, Inter_Tight } from 'next/font/google'
import { IntroLoader } from '@/components/layout/intro-loader'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteNav } from '@/components/layout/site-nav'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { INTRO_SEEN_KEY } from '@/lib/site'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
})

const TITLE = 'Murray Ash — Somatic Therapy & the Science of Self'
const DESCRIPTION =
  'Psychotherapy-informed somatic therapy and professional facilitator training for people serious about change.'

const SKIP_SEEN_INTRO = `try{if(sessionStorage.getItem('${INTRO_SEEN_KEY}'))document.documentElement.dataset.intro='seen'}catch(e){document.documentElement.dataset.intro='seen'}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { type: 'website', title: TITLE, description: DESCRIPTION },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${interTight.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint so a returning visitor never sees the intro flash. */}
        <script dangerouslySetInnerHTML={{ __html: SKIP_SEEN_INTRO }} />
      </head>
      <body className="min-h-full overflow-x-clip font-sans">
        <SmoothScroll>
          <IntroLoader />
          <SiteNav />
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  )
}
