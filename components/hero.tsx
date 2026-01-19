import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-3d-model.jpg"
          alt="AI-powered 3D model"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">
          Unleash Your Creativity with{' '}
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            AI-Powered 3D Design
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
          Effortlessly design 3D models using AI prompts, and let us handle the professional 3D printing and shipping.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Start Designing Now
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent">
            View Examples
          </Button>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-900 rounded-full" />
            <span>No design experience needed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-900 rounded-full" />
            <span>Professional quality prints</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-900 rounded-full" />
            <span>Direct to your door</span>
          </div>
        </div>
      </div>
    </section>
  )
}
