'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does the AI design process work?',
    answer: 'Simply provide a text prompt describing your desired model, and our AI will generate a 3D design for you. You can refine and iterate on the design until it\'s perfect.',
  },
  {
    question: 'What materials are available for printing?',
    answer: 'We offer a wide range of materials, including PLA, ABS, Resin, and more. Check the options when placing your order to see all available materials for your specific design.',
  },
  {
    question: 'How long does printing and shipping take?',
    answer: 'Printing typically takes 1-3 business days, and shipping times vary based on your location. You\'ll receive tracking information once your order is shipped.',
  },
  {
    question: 'Can I modify the AI-generated designs?',
    answer: 'Yes! You can refine your designs through additional prompts or download the model files to edit in your preferred 3D software.',
  },
  {
    question: 'What if I\'m not satisfied with my print?',
    answer: 'We stand behind our quality. If you\'re not satisfied with your print, contact our support team within 14 days for a replacement or refund.',
  },
]

export default function Faq() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to know about 3D Me. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 mb-4 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
