import React from "react";

const Icon = ({ src, alt = "", size = 40, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`
        object-contain 
        opacity-90 
        select-none 
        pointer-events-none
        ${className}
      `}
      loading="lazy"
    />
  );
};

export default Icon;
