import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Sparkles, Printer, Package } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Design',
    description: 'Create stunning 3D models with simple text prompts, no prior design experience required.',
  },
  {
    icon: Printer,
    title: 'Professional 3D Printing',
    description: 'Access specialized 3D printing labs for high-quality prints with various materials.',
  },
  {
    icon: Package,
    title: 'Hassle-Free Shipping',
    description: 'Get your finished products professionally packaged and shipped directly to your doorstep.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything You Need to Create
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            From AI-powered design to professional printing, we handle every step of the process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-gray-900 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
