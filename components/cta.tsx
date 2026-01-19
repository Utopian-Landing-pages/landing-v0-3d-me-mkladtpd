import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
          Join thousands of designers who are already creating amazing 3D models with AI.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-6 h-auto group"
        >
          Start Your Free Trial Today
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <div className="mt-12 pt-12 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-gray-400">Designs Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
