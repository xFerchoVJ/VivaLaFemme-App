import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        comunidad: resolve(__dirname, "comunidad.html"),
        nosotros: resolve(__dirname, "nosotros.html"),
        viva_market: resolve(__dirname, "viva-market.html"),
        app: resolve(__dirname, "app.html"),
        gallery: resolve(__dirname, "gallery.html"),
        membresia: resolve(__dirname, "membresia.html"),
      },
    },
  },
});
