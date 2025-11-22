import React, { useState } from "react";
import useContent from "../../hooks/useContent";
import { Mail, Copy, Check, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"; // npm install lucide-react

const Contact = () => {
  const content = useContent();
  const data = content?.contact || {};
  const email = data.email || "contact@example.com";
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-15 px-6 md:px-12 overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- Main Glass Card --- */}
        <div className="
          relative p-1 bg-gradient-to-b from-white/10 to-white/5 
          rounded-[2.5rem] border border-white/10 backdrop-blur-2xl 
          shadow-[0_0_50px_rgba(0,0,0,0.3)]
        ">
          <div className="bg-black/20 rounded-[2.3rem] px-6 py-16 md:px-16 md:py-20 text-center">
            
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-lg">
              <Mail className="text-white/90" size={32} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Let's work together.
            </h2>

            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              {data.message ||
                "I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative injection, let's chat."}
            </p>

            {/* --- Action Buttons --- */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              
              {/* Primary Button: MailTo */}
              <a
                href={`mailto:${email}`}
                className="
                  group relative px-8 py-4 rounded-full 
                  bg-white text-black font-semibold text-lg
                  hover:bg-blue-50 transition-colors duration-300
                  flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)]
                "
              >
                Say Hello
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Button: Copy Email */}
              <button
                onClick={handleCopy}
                className="
                  px-8 py-4 rounded-full 
                  bg-white/5 border border-white/10 hover:bg-white/10
                  text-white font-medium text-lg
                  transition-all duration-300
                  flex items-center gap-3
                "
              >
                {copied ? (
                  <> <Check size={18} className="text-green-400" /> Copied </>
                ) : (
                  <> <Copy size={18} className="opacity-50" /> Copy Email </>
                )}
              </button>
            </div>

            {/* --- Divider & Socials --- */}
            <div className="flex flex-col items-center gap-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="flex items-center gap-6">
                <SocialIcon href="https://github.com" icon={<Github size={20} />} label="GitHub" />
                <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for Social Icons
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="
      p-3 rounded-full bg-white/5 border border-white/5 
      text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 
      transition-all duration-300
    "
  >
    {icon}
  </a>
);

export default Contact;