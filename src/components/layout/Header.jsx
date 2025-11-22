import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to subtly change the glass opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- FLOATING HEADER (Dynamic Island Style) --- */}
      <header
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-5xl
          flex items-center justify-between
          px-6 py-3
          rounded-full
          border border-white/10
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              : "bg-white/5 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          }
        `}
      >
        {/* LOGO AREA */}
        <div className="flex items-center gap-2 cursor-pointer group">
          {/* Optional: Small glowing dot or icon */}
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] group-hover:scale-125 transition-transform" />
          
          <h1 className="text-sm font-medium text-white tracking-wide select-none">
            <span className="font-bold ml-1.5">Costas</span>
            <span className="font-bold ml-1.5">Pinto</span>
          </h1>
        </div>

        {/* DESKTOP NAV (Hidden on mobile) */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden relative w-10 h-10
            flex items-center justify-center
            rounded-full bg-white/5 hover:bg-white/10
            border border-white/5 transition-colors
          "
        >
          <div className="relative w-5 h-4">
            {/* Top Line */}
            <span
              className={`
                absolute left-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-in-out
                ${menuOpen ? "top-2 rotate-45" : "top-0"}
              `}
            />
            {/* Middle Line */}
            <span
              className={`
                absolute left-0 top-2 h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-in-out
                ${menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
              `}
            />
            {/* Bottom Line */}
            <span
              className={`
                absolute left-0 h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-in-out
                ${menuOpen ? "top-2 -rotate-45" : "top-4"}
              `}
            />
          </div>
        </button>
      </header>

      {/* --- MOBILE FULLSCREEN OVERLAY --- */}
      {/* We move Navigation inside here for mobile */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-black/60 backdrop-blur-[20px]
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          flex flex-col justify-center items-center
          ${
            menuOpen
              ? "opacity-100 visible backdrop-blur-3xl"
              : "opacity-0 invisible backdrop-blur-none pointer-events-none"
          }
        `}
      >
        {/* Close on click outside/background */}
        <div className="absolute inset-0" onClick={() => setMenuOpen(false)} />

        {/* Content Container */}
        <div 
          className={`
            relative z-50 p-6 text-center space-y-6
            transition-all duration-500 delay-100
            ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        >
           <h2 className="text-2xl font-bold text-white mb-8">Menu</h2>
           
           {/* Pass a prop to Navigation to style it vertically for mobile if needed */}
           <div className="flex flex-col gap-6 text-lg" onClick={() => setMenuOpen(false)}>
             <Navigation /> 
           </div>
        </div>
      </div>
    </>
  );
};

export default Header;