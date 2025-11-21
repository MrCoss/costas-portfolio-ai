import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";

const Skills = () => {
  const content = useContent();
  const skills = content?.skills || [];   // ← FIX: simple string array

  return (
    <section id="skills" className="py-32 px-8 fade-up">
      <h2 className="text-center text-4xl font-semibold mb-14">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <GlassCard
            key={index}
            className="flex flex-col items-center justify-center p-6 
                       hover:scale-[1.05] transition-transform"
          >
            <p className="text-white/90 font-medium text-lg text-center">
              {skill}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
