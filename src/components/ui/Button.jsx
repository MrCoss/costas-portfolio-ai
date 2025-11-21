import React from "react";

const Button = ({ children, onClick, className = "", disabled = false }) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        px-5 py-2 rounded-xl 
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        shadow-lg text-white font-medium 
        transition-all
        hover:bg-white/20 hover:scale-[1.02]
        disabled:opacity-40 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
