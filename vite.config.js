import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // FIX FOR VERCEL — root at "/"
  base: "/",

  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
