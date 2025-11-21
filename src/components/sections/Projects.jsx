import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";

const Projects = () => {
  const content = useContent();
  const projects = content?.projects?.list || [];

  return (
    <section id="projects" className="py-32 px-8 fade-up">
      <h2 className="text-center text-4xl font-semibold mb-14">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <GlassCard
            key={index}
            className="
              hover:scale-[1.03] transition-transform 
              flex flex-col p-6
            "
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white/90 mb-2">
              {project.title || "Untitled Project"}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
              {project.description ||
                "This project description will appear here once added from the admin panel."}
            </p>

            {/* Link */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline text-sm mt-auto"
              >
                View Project →
              </a>
            ) : (
              <p className="text-white/30 text-xs mt-auto italic">
                No link provided
              </p>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
