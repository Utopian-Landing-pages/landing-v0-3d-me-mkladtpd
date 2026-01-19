import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Faq from '@/components/faq'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </main>
  )
}
