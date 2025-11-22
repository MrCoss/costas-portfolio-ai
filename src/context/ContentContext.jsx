// src/context/ContentContext.jsx
import React, { createContext, useEffect, useState, useContext } from "react";
import { getContent } from "../services/contentService";

const ContentContext = createContext(null);

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
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// 🚀 USE THIS HOOK ANYWHERE IN PORTFOLIO UI
export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside <ContentProvider>");
  return ctx.content;
};

export const useSetContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useSetContent must be inside <ContentProvider>");
  return ctx.setContent;
};

export default ContentContext;
