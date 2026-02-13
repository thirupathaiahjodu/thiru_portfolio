import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";
import Certifications from "@/components/Certifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground/50 border-t border-border">
        © 2026 Jodu Thirupathaiah. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
