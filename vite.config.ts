import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // CUSTOM DOMAIN = ROOT PATH
  base: "/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
