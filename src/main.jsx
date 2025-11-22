// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AdminRoutes from "./routes/AdminRoutes";

import { ContentProvider } from "./context/ContentContext";
import { CustomThemeProvider } from "./context/ThemeContext";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/costas-portfolio-ai">
      <Routes>

        {/* Public Portfolio (Wrapped in Theme + Content Providers) */}
        <Route
          path="/*"
          element={
            <CustomThemeProvider>
              <ContentProvider>
                <App />
              </ContentProvider>
            </CustomThemeProvider>
          }
        />

        {/* Admin CMS Backend */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
