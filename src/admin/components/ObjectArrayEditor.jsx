// src/admin/components/ObjectArrayEditor.jsx
import React from "react";

const ObjectArrayEditor = ({ title, root, structure, content, setContent }) => {
  const items = content[root] || [];

  const updateField = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;

    setContent((prev) => ({
      ...prev,
      [root]: updated,
    }));
  };

  const addItem = () => {
    const emptyItem = {};
    structure.forEach((f) => (emptyItem[f] = ""));
    setContent((prev) => ({
      ...prev,
      [root]: [...items, emptyItem],
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
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {items.map((item, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-white/20 rounded-xl bg-white/5"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold opacity-80">
              Item {index + 1}
            </h3>

            <button
              onClick={() => removeItem(index)}
              className="px-3 py-1 bg-red-500/60 hover:bg-red-600 rounded-lg text-sm"
            >
              Remove
            </button>
          </div>

          {structure.map((field) => (
            <div key={field} className="mb-3">
              <label className="block text-sm mb-1 opacity-80 font-medium">
                {field.toUpperCase()}
              </label>

              {/* Image URL field */}
              {field === "image" ? (
                <div>
                  <input
                    type="text"
                    placeholder="Paste Cloudinary URL"
                    value={item[field] || ""}
                    onChange={(e) =>
                      updateField(index, field, e.target.value)
                    }
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  />

                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-32 object-cover rounded-lg mt-2 border border-white/20"
                    />
                  )}
                </div>
              ) : (
                <input
                  type="text"
                  value={item[field] || ""}
                  onChange={(e) =>
                    updateField(index, field, e.target.value)
                  }
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                />
              )}
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={addItem}
        className="mt-3 px-4 py-2 bg-blue-600 rounded-lg"
      >
        + Add New
      </button>
    </div>
  );
};

export default ObjectArrayEditor;
