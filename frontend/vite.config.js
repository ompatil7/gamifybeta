import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    //got rid of the CORS error
    proxy: {
      "/api": {
        target: "https://gamifybeta-1.onrender.com/",
        changeOrigin: true,
        secure: true, //as http not https
      },
    },
  },
});
