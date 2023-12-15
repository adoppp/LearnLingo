import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      global: '/src/components/global',
      pages: '/src/pages',
      assets: '/src/assets'
    },
  },
  base: '/LearnLingo/',
});