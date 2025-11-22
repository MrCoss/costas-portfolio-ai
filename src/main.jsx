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
    {/* ❌ REMOVE BASENAME — Vercel uses root domain, not subpath */}
    <BrowserRouter>
      <Routes>

        {/* Portfolio site */}
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

        {/* Admin Panel */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
