/* =========================================================================
svelte.config.js

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================= */

import adapter from "@sveltejs/adapter-static"; // Static adapter for deployment
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"; // Vite preprocessor for Svelte
import { mdsvex } from "mdsvex"; // mdsvex for Markdown support

const config = {
  // Preprocessors for enhanced functionality (vitePreprocess + mdsvex for Markdown support)
  preprocess: [
    vitePreprocess(),
    mdsvex({ extension: ".svx" }), // Configure mdsvex with .svx extension
  ],

  kit: {
    // Static adapter configuration
    adapter: adapter({
      pages: "build", // Directory for generated static files
      assets: "build", // Directory for static assets
      fallback: null, // No fallback file (e.g., for SPA mode)
    }),
    // Paths configuration for deployment
    paths: {
      base: "", // Use root domain for deployment (no base path)
    },
  },

  // File extensions for Svelte and mdsvex
  extensions: [".svelte", ".svx"],
};

export default config;
// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// for more information about preprocessors
