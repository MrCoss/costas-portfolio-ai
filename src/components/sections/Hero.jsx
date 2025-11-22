import React, { useState, useEffect } from "react";
import useContent from "../../hooks/useContent";
import { ArrowDown } from "lucide-react"; // npm install lucide-react

const PHRASES = [
  "Hi there!",
  "Let's Automate.",
  "Let's Make Machines Learn."
];

const Hero = () => {
  const content = useContent();
  const hero = content?.hero || {};

  // State for typewriter effect
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing Logic
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % PHRASES.length;
      const fullText = PHRASES[i];

      // Check if finished typing the current phrase
      if (!isDeleting && text === fullText) {
        // Pause at the end of the phrase
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      // Check if finished deleting the current phrase
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Small pause before next phrase
        return;
      }

      // Determine the next text state
      const nextText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(nextText);

      // Adjust speed: Deleting is faster than typing
      setTypingSpeed(isDeleting ? 40 : 100);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]); // Dependencies ensure effect runs on every text change or state flip

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 -z-10">
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a0a1a] to-slate-950" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />
        
        {/* Grid Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* --- Main Glass Portal --- */}
      <div className="relative z-10 max-w-3xl w-full">
        <div 
          className="
            relative
            bg-white/5 backdrop-blur-3xl 
            border border-white/10 rounded-[2.5rem] 
            p-8 md:p-12 text-center
            shadow-[0_0_40px_rgba(0,0,0,0.3)]
            animate-fade-in-up
          "
        >
          {/* Inner Light Highlight (Top) */}
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-black/30 border border-white/5 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-white/60 tracking-wide uppercase">
              Online & Available
            </span>
          </div>

          {/* Typing Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight min-h-[1.2em] flex flex-col md:block">
            <span>{text}</span>
            <span className="animate-pulse text-blue-400 font-light">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
            {hero.subtitle ||
              "Crafting intelligent systems with Machine Learning, Deep Learning, and Generative AI."}
          </p>

          {/* --- Social Dock (Unified Pill) --- */}
          <div className="inline-flex items-center gap-4 p-2 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
            <SocialButton href="https://linkedin.com/in/costaspinto" label="LinkedIn">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 4-2.2 4.2 0 5 2.7 5 6.2V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24h-4V8z"/>
            </SocialButton>

            <SocialButton href="https://github.com/MrCoss" label="GitHub">
              <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 8 10.9.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 6 19 6.3 19 6.3c.6 1.7.2 2.9.1 3.2.8.9 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.7-1.5 8-5.8 8-10.9C23.5 5.6 18.4.5 12 .5z"/>
            </SocialButton>

            <SocialButton href="https://kaggle.com" label="Kaggle">
              <path d="M3 3v18h4v-7.5l7 7.5h5l-8.5-9L19 3h-5l-7 7.5V3H3z"/>
            </SocialButton>

            <SocialButton href="https://leetcode.com" label="LeetCode">
              <path d="M17.2 15.3l-1.4 1.4-5.3-5.3 5.3-5.3 1.4 1.4-3.9 3.9 3.9 3.9z"/>
              <path d="M6.1 20.5l-1.6-1.2 3.8-5.3-3.8-5.3L6.1 7l4.6 7.1-4.6 6.4z"/>
            </SocialButton>

            <SocialButton href="https://hackerrank.com" label="HackerRank">
              <path d="M12 0l10 6v12l-10 6L2 18V6l10-6zm-2 7v10h2V7h-2zm4 0v10h2V7h-2z"/>
            </SocialButton>
          </div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ArrowDown size={24} />
      </div>

      {/* CSS for Fade Up Animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
           animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

// --- Reusable Social Button Component ---
const SocialButton = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="
      group relative
      flex items-center justify-center
      w-10 h-10 rounded-xl
      text-white/60 hover:text-white
      hover:bg-white/10 hover:scale-110
      transition-all duration-300 ease-out
    "
  >
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      {children}
    </svg>
    
    {/* Tooltip */}
    <span className="
      absolute -top-8 left-1/2 -translate-x-1/2 
      px-2 py-1 rounded-md bg-black/80 text-[10px] text-white 
      opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap
    ">
      {label}
    </span>
  </a>
);

export default Hero;