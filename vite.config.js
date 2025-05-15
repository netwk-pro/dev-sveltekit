// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import lightningcssPlugin from "vite-plugin-lightningcss";

export default defineConfig({
  plugins: [
    sveltekit(),
    lightningcssPlugin({
      minify: process.env.NODE_ENV === "production",
      pruneUnusedFontFaceRules: true,
      pruneUnusedKeyframes: true,
      removeUnusedFontFaces: true,
    }),
  ],
});
