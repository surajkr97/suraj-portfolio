"use client"

import { motion } from "framer-motion"
import { 
  Code, Database, Wrench, MessageSquare,
  Monitor, Server, Globe
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React.js", "React Router", "Bootstrap", "Tailwind CSS", "Redux Toolkit", "Shadcn UI"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend", 
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Netlify", "Vercel", "Figma"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    color: "from-orange-500 to-red-500"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from frontend to backend
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 mb-4`}>
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="skill-tag text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-full">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Specialized in MERN Stack Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}