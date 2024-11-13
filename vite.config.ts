import path from "path"
import { globSync } from "glob"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.config"

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), crx({ manifest })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/Injection/**/*.ts").map((file) => [
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
})
