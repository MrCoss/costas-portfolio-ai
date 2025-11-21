import React, { useState, useEffect } from "react";
import useContent from "../../hooks/useContent";

const TYPING_TEXT = "Hi there!";

const Hero = () => {
  const content = useContent();
  const hero = content?.hero || {};

  const [typed, setTyped] = useState("");

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPING_TEXT.slice(0, i));
      i++;
      if (i > TYPING_TEXT.length) clearInterval(interval);
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
        min-h-screen flex flex-col justify-center items-center 
        text-center px-6 relative overflow-hidden
      "
    >
      <div
        className="
          glass-heavy rounded-3xl 
          px-10 py-12 max-w-3xl 
          fade-up shadow-2xl 
          border border-white/20
        "
      >
{/* Typing animation title */}
        <h1
          className="
            text-3xl md:text-5xl 
            font-semibold text-white 
            mb-6 leading-tight h-20
          "
        >
          {typed}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle (from Firebase) */}
        <p
          className="
            text-lg md:text-xl
            text-white/60 
            max-w-2xl mx-auto 
            leading-relaxed
          "
        >
          {hero.subtitle ||
            "Lets Craft intelligent systems with Machine Learning, Deep Learning, and Generative AI."}
        </p>

        {/* --- SOCIAL ICONS ROW --- */}
<div className="flex justify-center gap-6 mt-8 mb-2">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/costaspinto"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-white/20 backdrop-blur-xl border border-white/30
      p-3 rounded-xl hover:bg-white/40 transition
    "
  >
    <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 4-2.2 4.2 0 5 2.7 5 6.2V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24h-4V8z"/>
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/MrCoss"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-white/20 backdrop-blur-xl border border-white/30
      p-3 rounded-xl hover:bg-white/40 transition
    "
  >
    <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
      <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 8 10.9.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C18 6 19 6.3 19 6.3c.6 1.7.2 2.9.1 3.2.8.9 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.7-1.5 8-5.8 8-10.9C23.5 5.6 18.4.5 12 .5z"/>
    </svg>
  </a>

  {/* Kaggle */}
  <a
    href="https://www.kaggle.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-white/20 backdrop-blur-xl border border-white/30
      p-3 rounded-xl hover:bg-white/40 transition
    "
  >
    <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
      <path d="M3 3v18h4v-7.5l7 7.5h5l-8.5-9L19 3h-5l-7 7.5V3H3z"/>
    </svg>
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-white/20 backdrop-blur-xl border border-white/30
      p-3 rounded-xl hover:bg-white/40 transition
    "
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M17.2 15.3l-1.4 1.4-5.3-5.3 5.3-5.3 1.4 1.4-3.9 3.9 3.9 3.9z"/>
      <path d="M6.1 20.5l-1.6-1.2 3.8-5.3-3.8-5.3L6.1 7l4.6 7.1-4.6 6.4z"/>
    </svg>
  </a>

  {/* HackerRank */}
  <a
    href="https://www.hackerrank.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-white/20 backdrop-blur-xl border border-white/30
      p-3 rounded-xl hover:bg-white/40 transition
    "
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M12 0l10 6v12l-10 6L2 18V6l10-6zm-2 7v10h2V7h-2zm4 0v10h2V7h-2z"/>
    </svg>
  </a>

</div>
      </div>

      {/* Background layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 blur-[180px] rounded-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
