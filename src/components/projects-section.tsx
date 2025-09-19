"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Vote, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Voting App",
    description: "Fullstack Voting App with candidate management, JWT auth, and real-time vote tracking along with Admin Pannel. 🗳️",
    icon: Vote,
    stack: ["React", "Tailwind", "Express", "MongoDB"],
    features: ["JWT Authentication", "Real-time Tracking", "Role-based Access", "Secure Voting"],
    github: "https://github.com/surajkr97/voting-fullStack",
    live: "https://voting-fullstack.onrender.com/",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-900/50 dark:to-cyan-900/50"
  },
  {
    title: "Live Cricket Score",
    description: "A responsive app that shows live scores across all match formats with 3D hover cards, error handling, and optimized loading. 🏏",
    icon: Zap,
    stack: ["React", "API Integration", "Tailwind"],
    features: ["Live Data", "3D Hover Effects", "Error Handling", "Responsive Design"],
    github: "https://github.com/surajkr97/LiveCricketScore", 
    live: "https://live-cricket-score-three.vercel.app",
    gradient: "from-green-200 to-emerald-200 dark:from-green-900/50 dark:to-emerald-900/50"
  },
  {
    title: "RouterVault",
    description: "A multi-page React app using React Router loaders, protected routes, GitHub user search integration, and localStorage-based auth. 🔐",
    icon: Shield,
    stack: ["React", "React Router", "Tailwind"],
    features: ["Protected Routes", "GitHub Integration", "Local Storage Auth", "Route Loaders"],
    github: "https://github.com/surajkr97/RouterVault",
    live: "https://router-vault.vercel.app", 
    gradient: "from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50"
  }
  
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of real-world applications built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="project-card group h-full">
                <CardHeader className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button 
            className="btn-hero"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  )
}