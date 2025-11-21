import React from "react";

const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white/10
        backdrop-blur-2xl 
        border border-white/20 
        rounded-2xl 
        shadow-xl 
        p-6 
        transition-all
        hover:bg-white/15
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
