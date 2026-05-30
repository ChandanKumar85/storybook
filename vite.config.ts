import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { format, resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "lego",
      formats: ["es", "umd"],
      fileName: `(format)=>indexedDB.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
