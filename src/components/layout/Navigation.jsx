import React, { useEffect, useState } from "react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [active, setActive] = useState("hero");

  const scrollTo = (id) => {
    const sec = document.getElementById(id);
    if (sec) {
      const offset = 90;
      const top = sec.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      let current = "hero";

      navLinks.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - offset;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="
        flex gap-5 
        text-white/70 
        overflow-x-auto 
        whitespace-nowrap 
        no-scrollbar
        touch-pan-x
        select-none
      "
    >
      {navLinks.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`
            transition-colors text-sm px-3 py-1 rounded-xl
            ${active === item.id
              ? "bg-white/20 text-white font-semibold backdrop-blur-xl border border-white/20"
              : "hover:text-white"
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
