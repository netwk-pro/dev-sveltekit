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
    vitePreprocess(), // Simplified (TypeScript is natively supported)
    mdsvex({ extensions: [".svx", ".md"] }), // Configure mdsvex with .svx and .md extensions
  ],

  kit: {
    // Static adapter configuration
    adapter: adapter({
      pages: "build", // Directory for generated static files
      assets: "build", // Directory for static assets
      fallback: "index.html", // Fallback file for dynamic routes (SPA support for GitHub Pages)
      strict: false, // Allow dynamic routes without strict prerendering
      precompress: false, // Disable precompression (optional; can enable if hosting supports it)
    }),
    // Paths configuration for deployment
    paths: {
      base: "", // Use root domain for deployment (update if deploying to a subdirectory)
    },
    prerender: {
      default: true, // Enable prerendering by default for static pages
      entries: [], // Keep entries empty to rely on SPA fallback for dynamic routes
    },
  },

  // File extensions for Svelte and mdsvex
  extensions: [".svelte", ".svx", ".md"], // Added .md for Markdown support
};

export default config;

// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// for more information about preprocessors
