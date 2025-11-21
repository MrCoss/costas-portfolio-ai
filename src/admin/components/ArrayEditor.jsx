// src/admin/components/ArrayEditor.jsx
import React from "react";

const ArrayEditor = ({ title, root, content, setContent }) => {
  const items = content[root] || [];

  const updateItem = (index, value) => {
    const updated = [...items];
    updated[index] = value;

    setContent((prev) => ({
      ...prev,
      [root]: updated,
    }));
  };

  const addItem = () => {
    setContent((prev) => ({
      ...prev,
      [root]: [...items, ""],
    }));
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);

    setContent((prev) => ({
      ...prev,
      [root]: updated,
    }));
  };

  return (
    <div className="p-6 rounded-2xl 
      bg-black/30 
      backdrop-blur-xl 
      border border-white/20 
      shadow-xl text-white">

      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3 mb-3">
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
            className="flex-1 p-3 rounded-lg 
              bg-white/5 
              border border-white/10 
              text-white 
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
          />

          <button
            onClick={() => removeItem(index)}
            className="px-3 py-2 
              bg-red-500/70 hover:bg-red-600 
              rounded-lg text-sm transition-all"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={addItem}
        className="mt-3 px-4 py-2 
          bg-blue-600 hover:bg-blue-700 
          rounded-lg transition-all"
      >
        + Add Item
      </button>
    </div>
  );
};

export default ArrayEditor;
