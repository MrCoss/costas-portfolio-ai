// src/pages/Home.jsx
import React from "react";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
