import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "Python", level: 90 },
  { name: "Django", level: 80 },
  { name: "REST APIs", level: 80 },
  { name: "React", level: 70 },
  { name: "HTML / CSS / JS", level: 80 },
  { name: "SQL (MySQL)", level: 80 },
  { name: "Git & GitHub", level: 70 },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full gradient-btn transition-all duration-1000"
                style={{
                  width: `${skill.level}%`,
                  animation: `progress-fill 1.5s ease-out forwards`,
                  ["--progress-width" as string]: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
