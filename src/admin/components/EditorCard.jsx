// src/admin/components/EditorCard.jsx
import React from "react";

const EditorCard = ({ title, root, fields, content, setContent }) => {
  const handleChange = (field, value) => {
    setContent((prev) => ({
      ...prev,
      [root]: {
        ...prev[root],
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {fields.map((field) => (
        <div key={field} className="mb-4">
          <label className="block mb-1 text-sm font-semibold opacity-80">
            {field.toUpperCase()}
          </label>

          <input
            type="text"
            placeholder={field === "image" ? "Paste Cloudinary URL" : ""}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
            value={content[root]?.[field] || ""}
            onChange={(e) => handleChange(field, e.target.value)}
          />

          {/* Preview if image */}
          {field === "image" && content[root]?.image && (
            <img
              src={content[root].image}
              className="rounded-lg mt-2 h-32 w-full object-cover border border-white/10"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default EditorCard;
