import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import { GraduationCap, Calendar, BookOpen } from "lucide-react"; // npm install lucide-react

const Education = () => {
  const content = useContent();
  const edu = content?.education || [];

  return (
    <section
      id="education"
      className="relative py-15 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient Background Element */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 tracking-wider uppercase">
            <BookOpen size={12} /> Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {edu.map((item, i) => (
            <GlassCard 
              key={i} 
              className="
                group relative p-8 
                hover:bg-white/10 transition-colors duration-500
                border border-white/5 hover:border-white/20
                flex flex-col sm:flex-row gap-6 items-start
              "
            >
              {/* Decorative Gradient Blob inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors" />

              {/* Icon Container */}
              <div className="
                shrink-0 w-16 h-16 rounded-2xl 
                bg-gradient-to-br from-white/10 to-white/5 
                border border-white/10
                flex items-center justify-center
                shadow-inner shadow-white/5
                group-hover:scale-105 transition-transform duration-500
              ">
                <GraduationCap className="text-white/80" size={32} />
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                {/* Top Row: Degree & Year Badge */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                    {item.degree || "Degree Title"}
                  </h3>
                  
                  {item.year && (
                    <div className="
                      self-start shrink-0
                      flex items-center gap-1.5 px-3 py-1 
                      rounded-full bg-white/5 border border-white/5 
                      text-[11px] font-medium text-white/50 uppercase tracking-wide
                    ">
                      <Calendar size={10} />
                      {item.year}
                    </div>
                  )}
                </div>

                {/* School Name */}
                <p className="text-lg text-white/60 font-medium mb-4">
                  {item.school || "University Name"}
                </p>

                {/* Optional Description (if you have it in data) */}
                {item.description && (
                  <p className="text-sm text-white/40 leading-relaxed border-t border-white/5 pt-4">
                    {item.description}
                  </p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;