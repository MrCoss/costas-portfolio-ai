import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import Icon from "../ui/Icon";
import { Award, ExternalLink, Calendar } from "lucide-react"; // npm install lucide-react

const Certifications = () => {
  const content = useContent();
  const certs = content?.certifications || [];

  return (
    <section
      id="certifications"
      className="relative py-15 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 tracking-wider uppercase">
            <Award size={12} /> Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <GlassCard 
              key={index} 
              className="
                group relative h-full flex flex-col 
                hover:bg-white/10 transition-all duration-500 
                border border-white/5 hover:border-white/20
              "
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Top Row: Icon & Date */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Container */}
                  <div className="
                    w-14 h-14 rounded-2xl 
                    bg-white/5 border border-white/10 
                    flex items-center justify-center 
                    group-hover:scale-110 transition-transform duration-500
                    shadow-lg shadow-black/20
                  ">
                    {cert.icon ? (
                      <Icon src={cert.icon} size={32} alt={cert.title} className="opacity-90" />
                    ) : (
                      <Award className="text-white/40" size={28} />
                    )}
                  </div>

                  {/* Date Pill */}
                  {cert.year && (
                    <div className="
                      flex items-center gap-1.5 
                      px-3 py-1 rounded-full 
                      bg-white/5 border border-white/5 
                      text-[10px] text-white/40 uppercase tracking-wide
                    ">
                      <Calendar size={10} />
                      {cert.year}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white leading-snug mb-1 group-hover:text-blue-200 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-white/50 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Spacer to push footer down */}
                <div className="flex-grow" />

                {/* Footer Action */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 
                      text-sm font-medium text-white/60 
                      group-hover:text-white transition-colors
                      pt-4 border-t border-white/5
                    "
                  >
                    Show Credential
                    <ExternalLink 
                      size={14} 
                      className="opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" 
                    />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;