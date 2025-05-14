/* =========================================================================
vite.config.js

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================= */

import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vite";
import lightningcssPlugin from "vite-plugin-lightningcss";

export default defineConfig({
  plugins: [
    sveltekit(),
    lightningcssPlugin({
      // Minification is on by default in production
      minify: process.env.NODE_ENV === "production",
      // This enables CSS pruning/tree shaking with more conservative settings
      // that are less likely to remove valid CSS
      pruneUnusedFontFaceRules: true,
      pruneUnusedKeyframes: true,
      removeUnusedFontFaces: true,
    }),
  ],
  test: {
    // Define test configurations for both client and server
    workspace: [
      {
        extends: "./vite.config.js",
        plugins: [svelteTesting()],
        test: {
          name: "client",
          environment: "jsdom",
          clearMocks: true,
          include: ["src/**/*.svelte.{test,spec}.{js,mjs}"],
          exclude: ["src/lib/server/**"],
          setupFiles: ["./vitest-setup-client.js"],
          // Enable HTML coverage report for client tests
          coverage: {
            provider: "v8", // Use @vitest/coverage-v8 for coverage
            reporter: ["html"], // HTML format only
            reportsDirectory: "./coverage/client", // Directory for client coverage reports
          },
        },
      },
      {
        extends: "./vite.config.js",
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,mjs}"],
          exclude: ["src/**/*.svelte.{test,spec}.{js,mjs}"],
          // Enable HTML coverage report for server tests
          coverage: {
            provider: "v8", // Use @vitest/coverage-v8 for coverage
            reporter: ["html"], // HTML format only
            reportsDirectory: "./coverage/server", // Directory for server coverage reports
          },
        },
      },
    ],
  },
});
