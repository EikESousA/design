import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    resolve: {
      preserveSymlinks: true,
    },
    build: {
      chunkSizeWarningLimit: 1000,
      emptyOutDir: true,
    },
    server: {
      host: "127.0.0.1",
    },
    plugins: [
      svgr(),
      react(),
      tsconfigPaths(),
      visualizer({
        brotliSize: true,
        gzipSize: true,
        template: "treemap",
        filename: "stats/rollup-stats.html",
        title: "EikE Design - Visualizer Bundle",
      }) as PluginOption,
    ],
  };
});
