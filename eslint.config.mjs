/* ==========================================================================
eslint.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import js from "@eslint/js"; // Provides ESLint core rules and recommended config
import eslintConfigPrettier from "eslint-config-prettier"; // Prettier config to disable conflicting ESLint rules
import sveltePlugin from "eslint-plugin-svelte"; // Svelte plugin
import globals from "globals";
import svelteParser from "svelte-eslint-parser"; // Svelte parser

const GLOBALS = {
  ...globals.browser,
  ...globals.node,
  self: "readonly",
  location: "readonly",
  indexedDB: "readonly",
};

// Define general ESLint rules (non-Svelte-specific)
const ESLINT_RULES = {
  indent: "off", // Turn off the 'indent' rule, managed by Prettier
  quotes: "off", // Turn off the 'quotes' rule, managed by Prettier
  semi: "off", // Turn off the 'semi' rule, managed by Prettier
};

export default [
  // Global ignores
  {
    ignores: [
      ".*", // Hidden files
      "*.xml", // XML files
      "**/.cache/**", // Cache directories
      "**/.vscode/**", // VSCode-specific files
      "**/coverage/**", // Coverage reports
      "**/build/**", // Distribution files
      "package.json", // NPM package manifest
      "package-lock.json", // NPM lockfile
      "node_modules/", // Node.js dependencies
      ".vite/", // Vite-specific cache directory
      "*.lock", // Lock files
    ],
  },

  // General JavaScript/Node.js configuration
  {
    files: ["**/*.mjs", "**/*.js"],
    languageOptions: {
      globals: GLOBALS,
      ecmaVersion: 2022, // Use ES2022 for compatibility
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint's core recommended rules (scoped)
      ...eslintConfigPrettier.rules, // Prettier config to disable conflicting ESLint rules (scoped)
      ...ESLINT_RULES, // Additional custom rules
    },
  },

  // Svelte-specific configuration
  {
    files: ["**/*.svelte"],
    plugins: { svelte: sveltePlugin }, // Use imported Svelte plugin
    languageOptions: {
      parser: svelteParser, // Use imported Svelte parser
      globals: GLOBALS, // Your global variables
      ecmaVersion: "latest", // Use "latest" for Svelte to leverage modern features
      sourceType: "module",
    },
    rules: {
      ...sveltePlugin.configs.recommended.rules, // Svelte recommended rules
      ...sveltePlugin.configs.prettier.rules, // Prettier compatibility for Svelte
      "svelte/no-at-html-tags": "warn", // Warn on use of @html (security risk)
      "svelte/require-optimized-style-attribute": "warn", // Recommend optimized style attributes
    },
  },
];
