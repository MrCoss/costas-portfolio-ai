import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";

const About = () => {
  const content = useContent();
  const about = content?.about || {};

  return (
    <section
      id="about"
      className="
        py-32 px-6 md:px-12 
        animate-fadeInUp
      "
    >
      <h2 className="text-center text-4xl font-semibold mb-14">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <p className="text-white/70 leading-relaxed text-lg p-6 md:p-8 text-center">
            {about.text ||
              "I am an AI/ML engineer passionate about building intelligent applications, LLM agents, and scalable solutions that solve real-world problems."}
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;
