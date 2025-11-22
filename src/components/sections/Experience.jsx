import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import { Briefcase, Calendar, Building2, ArrowRight } from "lucide-react"; // npm install lucide-react

const Experience = () => {
  const content = useContent();
  const xp = content?.experience || [];

  return (
    <section
      id="experience"
      className="relative py-15 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-20 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 tracking-wider uppercase">
            <Briefcase size={12} /> Career Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* --- Timeline Layout --- */}
        <div className="relative space-y-12">
          
          {/* The Vertical Gradient Line */}
          <div className="absolute left-4 md:left-10 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />

          {xp.map((item, index) => (
            <div key={index} className="relative pl-16 md:pl-24 group">
              
              {/* Timeline Dot (Glowing Node) */}
              <div 
                className="
                  absolute left-4 md:left-10 top-8 -translate-x-1/2 
                  w-4 h-4 rounded-full 
                  bg-black border border-blue-500/50
                  group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                  transition-all duration-500 z-20
                "
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full" />
              </div>

              {/* The Card */}
              <GlassCard className="p-8 md:p-10 hover:bg-white/10 transition-colors duration-500 border border-white/5 hover:border-white/20">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    {/* Role */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {item.role || "Job Role"}
                    </h3>
                    
                    {/* Company */}
                    <div className="flex items-center gap-2 text-lg text-white/70">
                      <Building2 size={18} className="text-blue-400" />
                      <span className="font-medium">{item.company || "Company Name"}</span>
                    </div>
                  </div>

                  {/* Period Pill */}
                  {item.period && (
                    <div className="
                      self-start shrink-0
                      flex items-center gap-2 px-4 py-1.5 
                      rounded-full bg-white/5 border border-white/10 
                      text-xs font-bold text-white/50 uppercase tracking-wide
                      group-hover:border-white/20 group-hover:text-white/80 transition-all
                    ">
                      <Calendar size={12} />
                      {item.period}
                    </div>
                  )}
                </div>

                {/* Description List */}
                {Array.isArray(item.details) && item.details.length > 0 && (
                  <ul className="space-y-3">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 group/item">
                        <ArrowRight 
                          size={18} 
                          className="mt-1 text-white/20 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all duration-300 shrink-0" 
                        />
                        <span className="leading-relaxed group-hover/item:text-white/80 transition-colors">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;