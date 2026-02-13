import { Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certifications = [
  {
    title: "Python Full Stack Development",
    issuer: "Vcube Software Solutions Pvt.Ltd",
    date: "2023",
    description: "Learned Python, Django, MySQL,REST APIs, and full stack development.",
    image: "/certificates/python-fullstack.jpg",
  },
  {
    title: "Python Full Stack Devoloper(Intenship)",
    issuer: "Vvcube Consultancy Services",
    date: "2023",
    description: "Built CRM web apps using Django.",
    image: "/certificates/django.jpg",
  },
  
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass rounded-2xl overflow-hidden neon-border neon-border-hover transition-all duration-500 hover:-translate-y-1"
          >
            
            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex gap-4">
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-primary" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>

                <p className="text-sm text-primary font-medium">
                  {cert.date}
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  {cert.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
