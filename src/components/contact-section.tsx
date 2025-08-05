"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7367089724",
    href: "tel:+917367089724",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    label: "Email", 
    value: "surajkumar06174@gmail.com",
    href: "mailto:surajkumar06174@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/surajkr97",
    href: "https://github.com/surajkr97",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    value: "linkedin.com/in/surajkr97",
    href: "https://linkedin.com/in/surajkr97",
    color: "from-blue-600 to-blue-800"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities, especially 
                  ambitious or large-scale projects. Whether you're a company looking 
                  to hire, or you're an individual looking for a developer, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 hover:bg-primary/5 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{contact.label}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Open to remote work & relocation</span>
              </motion.div>
            </motion.div>

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="project-card h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Ready to Start a Project?
                    </h3>
                    <p className="text-muted-foreground">
                      I'm available for freelance work and full-time opportunities. 
                      Let's create something amazing together!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      className="btn-hero w-full"
                      asChild
                    >
                      <a href="mailto:surajkumar06174@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:+917367089724">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}