import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto glass rounded-2xl p-8 sm:p-12 neon-border neon-border-hover transition-all duration-500">
  
        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          I'm a passionate Python Full Stack Developer with hands-on experience developing
          secure and scalable web applications using Django, MySQL, HTML, CSS, and JavaScript.
          During my internship at V Cube Software Solutions, I worked on building a CRM system,
          where I implemented features like user authentication, contact management, and activity tracking.
        </p>

        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          I have also developed a Hospital Management System to automate patient registration,
          doctor management, appointment scheduling, and billing. Through these projects, I gained
          practical experience in backend development, database design, RESTful architecture,
          debugging, and performance optimization.
        </p>

        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          I am passionate about writing clean, efficient code and continuously improving my skills. 
          I have completed my Master of Computer Applications (MCA), which strengthened my 
          foundation in software development, database management, and full-stack web technologies. 
          I am eager to contribute to real-world projects and grow as a professional Python Developer
        </p>

      </div>

    </SectionWrapper>
  );
};

export default About;
