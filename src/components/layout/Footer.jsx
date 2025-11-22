import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"; // npm install lucide-react

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-32 bg-black/20 pt-10 pb-8 backdrop-blur-sm">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Costas Pinto
            </h3>
            <p className="text-white/40 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "Tailwind", "Firebase", "OpenAI"].map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1 rounded-full 
                  bg-white/5 border border-white/5
                  text-[10px] uppercase tracking-wider text-white/60
                  hover:bg-white/10 hover:border-white/10 transition-colors cursor-default
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com" icon={<Github size={18} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
            <SocialLink href="mailto:contact@example.com" icon={<Mail size={18} />} />
            
            <div className="w-px h-8 bg-white/10 mx-2 hidden md:block"></div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
            >
              Top
              <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/5 transition-all">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Social Links
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;