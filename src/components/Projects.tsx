import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "CRM System",
    description:
      "Developed a Customer Relationship Management (CRM) system during my internship using Django. Implemented features like user authentication, contact management, activity tracking, and secure role-based access. Improved workflow efficiency and data organization.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
    github: "https://github.com/thirupathaiahjodu", // replace with exact repo if available
    live: "#",
  },

  {
    title: "Hospital Management System",
    description:
      "Built a web-based Hospital Management System to automate patient registration, doctor management, appointment scheduling, and billing. Implemented secure login, form validation, and database integration using Django ORM.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/thirupathaiahjodu", // replace with exact repo
    live: "#",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern responsive portfolio website to showcase my projects, skills, and experience. Implemented dark/light mode, responsive design, and interactive UI using React and Tailwind CSS.",
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    github: "https://github.com/thirupathaiahjodu", // replace with portfolio repo
    live: "#",
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-2xl p-6 neon-border neon-border-hover transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group"
          >
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="glass px-4 py-2 rounded-lg text-sm font-medium text-foreground flex items-center gap-2 hover:text-primary transition-colors">
                <Github size={16} />
                GitHub
              </a>
              <a href={project.live} className="glass px-4 py-2 rounded-lg text-sm font-medium text-foreground flex items-center gap-2 hover:text-primary transition-colors">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
