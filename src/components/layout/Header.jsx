import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%]">
      <div
        className="
          bg-white/10 
          backdrop-blur-2xl 
          border border-white/20 
          rounded-2xl 
          px-6 py-3 
          flex items-center justify-between 
          shadow-2xl
        "
      >
        <h1 className="text-lg font-semibold tracking-wide text-white/80">
          Costas Pinto • Portfolio
        </h1>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
