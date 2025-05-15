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
      removeUnusedFontFaces: false, // safer unless 100% static
      browserslist: true, // respect browserslist config
      // Enables nesting support in Lightning CSS
      //drafts: {
      //  nesting: true
      //}
    }),
  ],
});
