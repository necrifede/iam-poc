import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3000,
    https: true,
    open: "/",
    host: "localhost",
  },
  preview: {
    port: 4000,
    https: true,
    open: "/",
    host: "localhost",
  },
  plugins: [mkcert(), react()],
});
