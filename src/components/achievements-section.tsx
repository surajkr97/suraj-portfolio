"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Calendar, Code, ExternalLink } from "lucide-react"

const achievements = [
  {
    title: "Open Source Contribution - rtCamp/frappe-appointment",
    description: "React + TypeScript contribution improving navigation UX by adding responsive Home button, enhancing UI consistency across devices, and ensuring seamless user experience through collaborative development.",
    date: "2024",
    type: "opensource",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    link: "https://github.com/rtCamp/frappe-appointment/pull/199"
  },
  {
    title: "First Runner-Up, Tech Talent Hackathon 2023", 
    description: "Built a Memory Game in React - Interactive game with modern UI/UX and state management",
    date: "2023",
    type: "hackathon",
    icon: Award,
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "First Runner-Up, Incubate India Hackathon 2021",
    description: "Built ScanIT virus tracker - A comprehensive solution for virus tracking and monitoring",
    date: "2021",
    type: "hackathon",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500"
  }
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation and technical excellence in competitive environments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-primary"></div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Achievement card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="project-card"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} bg-opacity-10`}>
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground">{achievement.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      {achievement.type === "opensource" ? (
                        <>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
                            🌟 Open Source
                          </span>
                          {achievement.link && (
                            <a 
                              href={achievement.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-primary hover:text-primary-glow transition-colors"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              GitHub PR #199
                            </a>
                          )}
                        </>
                      ) : achievement.title.includes("Tech Talent") ? (
                        <>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            🥈 First Runner-Up
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
                            🎓 Inter-College
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            🥈 First Runner-Up
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800">
                            💻 GitHub
                          </span>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">1+</div>
            <div className="text-muted-foreground">Open Source Contributions</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">2+</div>
            <div className="text-muted-foreground">Hackathon Awards</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">3+</div>
            <div className="text-muted-foreground">Major Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}