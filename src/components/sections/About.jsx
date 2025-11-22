import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import { Brain, Code2, Globe, Sparkles } from "lucide-react"; // npm install lucide-react

const About = () => {
  const content = useContent();
  const about = content?.about || {};

  return (
    <section
      id="about"
      className="relative py-15 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Decoration (Optional Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 tracking-wider uppercase">
            <Sparkles size={12} /> Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* --- Main Bio Card (Spans 2 Columns) --- */}
          <div className="md:col-span-2">
            <GlassCard className="h-full flex flex-col justify-center p-8 md:p-10 hover:bg-white/5 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">The Mission</h3>
              </div>
              
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  {about.text ||
                    "I am an AI/ML engineer passionate about building intelligent applications, LLM agents, and scalable solutions that solve real-world problems."}
                </p>
                <p>
                  My approach combines rigorous data analysis with creative software engineering. I don't just build models; I build ecosystems where AI can thrive and deliver tangible value.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* --- Right Column Stack --- */}
          <div className="space-y-6">
            
            {/* Focus Card */}
            <GlassCard className="p-6 hover:bg-white/5 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-purple-400" size={20} />
                <h4 className="text-lg font-medium text-white">Current Focus</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["LLM Agents", "RAG Systems", "React", "Python"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Location / Status Card */}
            <GlassCard className="p-6 hover:bg-white/5 transition-colors duration-500 flex flex-col justify-between h-auto md:h-full">
               <div>
                <div className="flex items-center gap-3 mb-2">
                    <Globe className="text-green-400" size={20} />
                    <h4 className="text-lg font-medium text-white">Based In</h4>
                </div>
                <p className="text-white/60 text-sm">Global • Remote Friendly</p>
               </div>
               
               <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-sm">Experience</span>
                    <span className="text-2xl font-bold text-white">
                       2+ <span className="text-sm font-normal text-white/40">Years</span>
                    </span>
                  </div>
               </div>
            </GlassCard>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;