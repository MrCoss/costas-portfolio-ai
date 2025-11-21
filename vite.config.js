import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ------------------------------------------------------
// Vite Config for GitHub Pages Deployment
// ------------------------------------------------------
// If your repo is:  https://github.com/MrCoss/costas-portfolio-ai
// Your base must be: "/costas-portfolio-ai/"
// ------------------------------------------------------

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: Update this to match your repo name
  base: "/costas-portfolio-ai/",

  // Optional: cleaner build output
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
