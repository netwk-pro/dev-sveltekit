/* ==========================================================================
postcss.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import dotenv from "dotenv"; // Import dotenv
import postcssImport from "postcss-import";

// Load the appropriate .env file based on NODE_ENV
const env = process.env.NODE_ENV || "development"; // Default to 'development' if NODE_ENV is undefined
dotenv.config({ path: `.env.${env}` });

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    postcssImport(), // Resolves @import statements
    autoprefixer(), // Adds vendor prefixes automatically
    ...(isProduction
      ? [
          cssnano({
            // Minifies CSS for production builds
            preset: "default", // Use the default preset (customize if needed)
          }),
        ]
      : []), // Exclude cssnano in development
  ],
};
