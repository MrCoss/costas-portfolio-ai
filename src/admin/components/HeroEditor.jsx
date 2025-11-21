// src/admin/components/HeroEditor.jsx
import React from "react";

const HeroEditor = ({ content, setContent }) => {
  const hero = content.hero || {};

  const updateField = (field, value) => {
    setContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">

      <h2 className="text-2xl font-bold mb-4">Hero Section</h2>

      {/* TITLE */}
      <label className="block mb-1 text-sm font-semibold opacity-80">
        TITLE
      </label>
      <input
        type="text"
        value={hero.title || ""}
        onChange={(e) => updateField("title", e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-white/5 border border-white/10 text-white"
        placeholder="Your Name or Tagline"
      />

      {/* SUBTITLE */}
      <label className="block mb-1 text-sm font-semibold opacity-80">
        SUBTITLE
      </label>
      <textarea
        rows={2}
        value={hero.subtitle || ""}
        onChange={(e) => updateField("subtitle", e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-white/5 border border-white/10 text-white"
        placeholder="Short description of who you are"
      />

      {/* IMAGE URL (Cloudinary) */}
      <label className="block mb-1 text-sm font-semibold opacity-80">
        IMAGE (Cloudinary URL)
      </label>
      <input
        type="text"
        value={hero.image || ""}
        onChange={(e) => updateField("image", e.target.value)}
        placeholder="https://res.cloudinary.com/...jpg"
        className="w-full mb-4 p-3 rounded-lg bg-white/5 border border-white/10 text-white"
      />

      {/* IMAGE PREVIEW */}
      {hero.image && (
        <div className="mt-4 flex justify-center">
          <img
            src={hero.image}
            alt="Hero Preview"
            className="w-32 h-32 object-cover rounded-full shadow-xl border border-white/20"
          />
        </div>
      )}
    </div>
  );
};

export default HeroEditor;
