import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { AchievementsSection } from "@/components/achievements-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ThemeToggle />
      <ScrollToTop />
      
      <main>
        <HeroSection />
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="section-heading">About Me</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  I'm a <strong>Fullstack MERN Developer</strong> passionate about creating modern, 
                  secure, and high-performance web applications. With expertise in React, Express, 
                  MongoDB, and Tailwind CSS, I bring ideas to life through clean, scalable code.
                </p>
                <p>
                  My journey includes building real-world applications with authentication, 
                  state management, and REST APIs. I've been recognized in multiple hackathons 
                  and am always eager to take on new challenges and learn cutting-edge technologies.
                </p>
                <p>
                  As a strong communicator and fast learner, I thrive in collaborative environments 
                  and am currently <strong>available for full-time or freelance opportunities</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
