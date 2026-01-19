import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: '3D Me transformed my design workflow! The AI is incredibly intuitive, and the print quality is outstanding.',
    author: 'Happy Customer',
    image: '/images/avatar-1.jpg',
    initials: 'HC',
  },
  {
    quote: 'Finally, a platform that handles everything from design to delivery. I can focus on creating without worrying about printer maintenance.',
    author: 'Another Satisfied User',
    image: '/images/avatar-2.jpg',
    initials: 'AS',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Designers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            See what our users have to say about their experience with 3D Me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-gray-300 mb-4" />
                <p className="text-lg mb-6 leading-relaxed text-balance">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-gray-900">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback className="bg-gray-900 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
