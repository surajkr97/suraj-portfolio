"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Suraj is one of the most committed frontend developers I've worked with – delivers fast and clean code every time.",
    author: "Project Mentor",
    role: "Senior Developer",
    rating: 5,
    image: import.meta.env.BASE_URL + "image-uploads/0649f635-f5ec-45f7-ad06-d4aa8e025d1b.png"
  },
  {
    quote: "Excellent grasp of modern web technologies. Eager to learn, great at UI work, and always delivers on time.",
    author: "Internship Lead", 
    role: "Tech Lead",
    rating: 5,
    image: import.meta.env.BASE_URL + "image-uploads/93648f4b-ed7a-4b3e-9ea4-4ed78b5316b8.png"
  },
  {
    quote: "Impressed by Suraj's problem-solving skills and attention to detail. A valuable team member for any project.",
    author: "Team Lead",
    role: "Senior Engineer", 
    rating: 5,
    image: import.meta.env.BASE_URL + "image-uploads/4ceeb241-4b17-4052-aa1d-0c1988632d44.png"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from mentors, leads, and collaborators I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="project-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}