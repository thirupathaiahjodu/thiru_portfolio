import { Download, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Python Developer",
  "Django Developer",
  "Python Full Stack Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto space-y-8" style={{ animation: "fade-in-up 1s ease-out" }}>
        
        {/* Photo placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full glass flex items-center justify-center neon-border">
          <User size={48} className="text-muted-foreground" />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight gradient-text"
          style={{
            backgroundSize: "200% auto",
            animation: "shimmer 3s ease-in-out infinite",
            backgroundImage:
              "linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-blue)), hsl(var(--neon-cyan)))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Thirupathaiah
        </h1>

        {/* Dynamic Role */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground h-10">
          {roles[roleIndex]}
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
          1 year of hands-on experience building web applications using Django, MySQL, HTML, CSS, and JavaScript.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
          <a
            href="/Thirupathaiah_Jodu_Python_Developer.pdf"
            download
            className="gradient-btn text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="glass px-6 py-3 rounded-lg font-semibold text-foreground flex items-center gap-2 neon-border neon-border-hover transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
