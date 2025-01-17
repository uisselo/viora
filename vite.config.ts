import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Assets": "/src/assets",
      "@Config": "/src/config",
      "@GlobalComponents": "/src/components",
      "@Modules": "/src/modules",
      "@Pages": "/src/pages",
      "@Store": "/src/store",
      "@Utilities": "/src/utils",
    },
  },
});
