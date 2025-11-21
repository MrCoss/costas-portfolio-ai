// src/context/ContentContext.jsx
import React, { createContext, useEffect, useState, useContext } from "react";
import { getContent } from "../services/contentService";

export const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getContent();
        setContent(data || {});
      } catch (err) {
        console.error("❌ Failed to load content:", err);
        setContent({});
      }
    };
    load();
  }, []);

  if (content === null) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white text-xl">
        Loading content...
      </div>
    );
  }

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

// ⭐ THIS WAS MISSING
export const useContent = () => {
  return useContext(ContentContext);
};

export default useContent;
