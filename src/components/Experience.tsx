import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="max-w-3xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-10 neon-border neon-border-hover transition-all duration-500 relative">
          <div className="flex items-start gap-4">
            
            <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0">
              <Briefcase size={22} className="text-primary-foreground" />
            </div>

            <div className="flex-1">
              
              <h3 className="text-xl font-semibold text-foreground">
                Python Full Stack Developer Intern
              </h3>

              <p className="text-primary text-sm font-medium mt-1">
                Vvcube Consultancy Services. | May 2023 – October 2023
              </p>

              <ul className="mt-4 space-y-3">
                {[
                  "Developed web applications using Python and Django, including a CRM system.",
                  "Implemented user authentication, contact management, and activity tracking modules.",
                  "Built responsive user interfaces using HTML, CSS, and JavaScript.",
                  "Designed and managed relational databases using MySQL and Django ORM.",
                  "Performed testing, debugging, and performance optimization to improve system efficiency.",
                  "Used Git and GitHub for version control and collaborative development.",
                  "Worked in Agile methodology including daily stand-ups and sprint planning.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
