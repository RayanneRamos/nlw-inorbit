import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: "es2020",
  },
  plugins: [react()],
});
