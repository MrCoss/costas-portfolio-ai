import React, { useEffect, useState } from "react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifictions" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navigation = ({ onNavigate, className = "" }) => {
  const [active, setActive] = useState("hero");

  const scrollTo = (id) => {
    const sec = document.getElementById(id);
    if (sec) {
      // Offset accounts for the fixed header height
      const offset = 80; 
      const top = sec.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    if (onNavigate) onNavigate();
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      const offset = 150; // Trigger point for changing active state

      navLinks.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop - offset;
          if (window.scrollY >= top) current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex gap-1 ${className || "flex-col md:flex-row"}`}>
      {navLinks.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`
            relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
            ${
              active === item.id
                ? "text-white bg-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] ring-1 ring-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }
          `}
        >
          {/* Text Label */}
          <span className="relative z-10">{item.label}</span>

          {/* Optional: Subtle Glow for Active State */}
          {active === item.id && (
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
          )}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;