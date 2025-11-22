import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import { Cpu, Zap } from "lucide-react"; // npm install lucide-react

const Skills = () => {
  const content = useContent();
  const skills = content?.skills || [];

  return (
    <section
      id="skills"
      className="relative py-15 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient Background Glow (Pink/Magenta for Skills) */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pink-300 tracking-wider uppercase">
            <Cpu size={12} /> Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Expertise
          </h2>
        </div>

        {/* --- Dashboard Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <GlassCard
              key={idx}
              className="
                group relative p-6
                hover:bg-white/10 transition-all duration-500
                border border-white/5 hover:border-white/20
                flex flex-col justify-between gap-4
              "
            >
              {/* Top Row: Name & Icon */}
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-white/90 text-lg leading-tight">
                  {skill.name}
                </h3>
                
                {/* Decorative Icon */}
                <div className="p-2 rounded-lg bg-white/5 text-pink-400/80 group-hover:text-pink-300 group-hover:scale-110 transition-all">
                  <Zap size={16} />
                </div>
              </div>

              {/* Middle: Big Metric */}
              <div className="relative">
                <span className="text-4xl font-bold text-white tracking-tighter">
                  {skill.level}%
                </span>
                <span className="text-xs text-white/40 ml-1 font-medium uppercase tracking-wide">
                  Proficiency
                </span>
              </div>

              {/* Bottom: Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="
                    h-full rounded-full 
                    bg-gradient-to-r from-pink-500 to-purple-600
                    shadow-[0_0_10px_rgba(236,72,153,0.5)]
                    transition-all duration-1000 ease-out
                    group-hover:brightness-125
                  "
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;