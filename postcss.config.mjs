/* ==========================================================================
postcss.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import purgecss from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

// Determine if we're in production mode
const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    // postcssImport() is removed as Vite handles most @import statements natively
    autoprefixer(), // Adds vendor prefixes automatically

    // Only include optimization plugins in production
    ...(isProduction
      ? [
          // PurgeCSS to remove unused styles
          purgecss({
            content: ["./src/**/*.{svelte,html,js,ts,jsx,tsx}"],
            defaultExtractor: (content) => [
              ...(content.match(/[\w-/:]+(?<!:)/g) || []),
              ...(content.match(/[A-Za-z0-9-_]+/g) || []),
            ],
            safelist: {
              standard: ["html", "body"],
              deep: [/^fa-/, /^modal-/], // Add any classes that might be dynamically generated
              greedy: [],
            },
          }),

          // CSS minification
          cssnano({
            preset: "default", // Use the default preset
          }),
        ]
      : []), // Exclude optimization plugins in development
  ],
};
