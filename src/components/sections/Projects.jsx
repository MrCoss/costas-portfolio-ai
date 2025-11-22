import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import { FolderGit2, ExternalLink, ArrowUpRight, Code2 } from "lucide-react"; // npm install lucide-react

const Projects = () => {
  const content = useContent();
  
  // Convert Firebase object -> array
  const projects = content?.projects
    ? Object.values(content.projects)
    : [];

  return (
    <section
      id="projects"
      className="relative py-15 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Glow - Unique Color for Projects (Teal/Cyan) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-300 tracking-wider uppercase">
            <FolderGit2 size={12} /> Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard 
              key={index} 
              className="
                group relative h-full flex flex-col
                border border-white/5 hover:border-white/20
                hover:bg-white/10 hover:-translate-y-2
                transition-all duration-500 ease-out
                overflow-hidden
              "
            >
              {/* Inner Gradient Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 p-8 flex flex-col h-full">
                
                {/* Top Row: Icon & Link */}
                <div className="flex justify-between items-start mb-6">
                  <div className="
                    w-12 h-12 rounded-xl 
                    bg-teal-500/10 border border-teal-500/20 text-teal-400
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform
                  ">
                    <Code2 size={24} />
                  </div>

                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="
                        p-2 rounded-full bg-white/5 hover:bg-white/20 text-white/50 hover:text-white
                        transition-colors duration-300
                      "
                      aria-label="View Project"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">
                  {project.title || "Untitled Project"}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {project.description || "A showcasing of technical prowess and creative problem solving."}
                </p>

                {/* Optional: Tech Tags (Mocked or from Data) */}
                {/* If you add a 'tags' array to your Firebase data, map them here */}
                {project.tags && Array.isArray(project.tags) && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/40 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Action (If no tags, show button) */}
                {(!project.tags || project.tags.length === 0) && project.link && (
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 text-sm font-medium text-teal-300/80 hover:text-teal-300
                        transition-colors
                      "
                    >
                      Explore Project <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;