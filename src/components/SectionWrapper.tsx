import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, children }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className="py-24 px-4 relative z-10 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text">
          {title}
        </h2>

        {/* Section Content */}
        <div className="relative z-10">
          {children}
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper;
