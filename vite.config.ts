import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Pages": "/src/pages",
      "@Components": "/src/components",
      "@Stores": "/src/stores",
    },
  },
});
