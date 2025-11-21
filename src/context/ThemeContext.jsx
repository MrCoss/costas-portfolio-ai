// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { ref, get } from "firebase/database";

export const ThemeContext = createContext(null);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primary: "#ffffff",
    secondary: "#999999",
    background: "#000000",
    text: "#ffffff",
  });

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const themeRef = ref(db, "theme/active");
        const snapshot = await get(themeRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          setTheme(data);

          // Apply to CSS variables (Vision UI style)
          const root = document.documentElement;
          Object.keys(data).forEach((key) => {
            root.style.setProperty(`--c-${key}`, data[key]);
          });
        }
      } catch (err) {
        console.warn("Theme load failed → using default Vision colors.", err);
      }
    };

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
