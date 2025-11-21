import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 py-10 text-center text-white/40 text-sm">
      <p>© {new Date().getFullYear()} Costas Pinto — Portfolio</p>
      <p className="mt-2">Built with React · Tailwind · Firebase · OpenAI</p>
    </footer>
  );
};

export default Footer;
