import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Sri Sai Ram Institute of PG Studies, Nellore",
    year: "2023 – 2025",
    score: "CGPA: 8.4 / 10",
  },
  {
    degree: "Bachelor of Commerce (Computer Applications)",
    college: "Sita Rama Degree College, Seetharamapuram",
    year: "2019 – 2022",
    score: "CGPA: 7.25 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    college: "L.V.R Jr College, Seetharamapuram",
    year: "2017 – 2019",
    score: "CGPA: 6.88 / 10",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    college: "Z.P High School, Oguruvandlapalli",
    year: "2016 – 2017",
    score: "CGPA: 9.5 / 10",
  },
];

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="max-w-3xl mx-auto space-y-6">

        {education.map((edu, index) => (
          <div
            key={index}
            className="glass rounded-2xl p-6 sm:p-8 neon-border neon-border-hover transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>

                <p className="text-muted-foreground text-sm mt-1">
                  {edu.college}
                </p>

                <p className="text-primary text-sm font-medium mt-1">
                  {edu.year}
                </p>

                <p className="text-muted-foreground text-sm mt-1">
                  {edu.score}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </SectionWrapper>
  );
};

export default Education;
