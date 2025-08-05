"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Suraj Kumar
            </h3>
            <p className="text-sm text-muted-foreground">
              Fullstack MERN Developer
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Suraj Kumar
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            <a
              href="https://github.com/surajkr97"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/surajkr97"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:surajkumar06174@gmail.com"
              className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}